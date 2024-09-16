import { useEffect, useRef, useState, useCallback } from "react";
import { Alert } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import {
  Camera,
  PhotoFile,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
} from "react-native-vision-camera";
import UserNavigation from "../userNavigation";
import RNFS from 'react-native-fs';

const hookOpenCamara = () => {
  const { hasPermission, requestPermission } = useCameraPermission();
  const camera = useRef<Camera>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [imageSource, setImageSource] = useState<PhotoFile>();

  const { HomeScreen } = UserNavigation();

  const device = useCameraDevice("front");

  const format = useCameraFormat(device, [
    { photoResolution: { width: 640, height: 480 } }
  ]);

  useEffect(() => {
    const checkPermission = async () => {
      if (!hasPermission) {
        await requestPermission();
      }
      // Remove the extra closing brace
      checkPermission();
    };
    checkPermission();
  }, [hasPermission, requestPermission as any]);

  useFocusEffect(
    useCallback(() => {
      setShowCamera(true);
      return () => {
        setShowCamera(false);
      };
    }, [])
  );


  const capturePhoto = async () => {
    if (camera.current !== null && device != null) {
      try {
        const photo = await camera.current?.takePhoto({});
        console.log(photo);
        setImageSource(photo);
        await scannerResult(photo);
        setShowCamera(false);
      } catch (error) {
        console.error("Error al capturar la foto", error);
      }
    } else {
      console.error("La cámara no está lista o el dispositivo no está configurado");
    }
  };

  const scannerResult = async (imageSources: PhotoFile) => {

    try {
      const formData = new FormData();

      // Verifica que imageSource tenga una propiedad 'path'
      if (imageSources.path) {
        const file = {
          uri: imageSources.path,
          type: 'image/jpeg', // Ajusta el tipo MIME según el tipo de imagen
          name: 'photo.jpg', // Ajusta el nombre del archivo si es necesario
        };

        formData.append('file', file as any); // TypeScript puede necesitar un "any" aquí
      }

      formData.append('filename', 'result.jpg');
      formData.append('content_type', 'image/jpeg');


      formData.append('json', JSON.stringify({
        models: {
          face: {
            facs: {},
          },
        },
      }));

      console.log(formData);


      const response = await fetch("https://api.hume.ai/v0/batch/jobs", {
        method: "POST",
        headers: {
          "X-Hume-Api-Key": "ihQLg5EVtVEJEK1SGjqG40EAknf8mwM2qEreZNBxEd954lbU"
        },
        body: imageSources.path,
      });

      if (!response.ok) {
        const errorResult = await response.json();
        throw new Error(`Error al subir la imagen al servidor: ${errorResult.error}`);
      }

      const body = await response.json();
      const idPhoto = body.job_id;
      console.log(idPhoto);
      // await retryGetEmotions(idPhoto);

    } catch (error) {
      console.error("Error inesperado", error);
    }
  };

  return {
    camera,
    hasPermission,
    showCamera,
    imageSource,
    capturePhoto,
    device,
    HomeScreen,
    format
  };
};



export default hookOpenCamara;


/* const scannerResult = async (imageSources: any) => {
  if (!imageSources || !imageSources.path) {
    Alert.alert('Error', 'Intenta de nuevo');
    return;
  }
 
  // Función para convertir imagen a base64
  const imgToBase64 = async (imagePath: string): Promise<string | null> => {
    try {
      const base64Data = await RNFS.readFile(imagePath, 'base64');
      // Asegúrate de que el prefijo esté incluido
      return `data:image/jpeg;base64,${base64Data}`; // Cambia el prefijo si es necesario
    } catch (error) {
      console.error('Error encoding to base64:', error);
      return null;
    }
  };
 
  // Función para verificar el prefijo de base64
  const verifyBase64Prefix = (base64Image: string): boolean => {
    const jpegPrefix = 'data:image/jpeg;base64,';
    const pngPrefix = 'data:image/png;base64,';
 
    if (base64Image.startsWith(jpegPrefix) || base64Image.startsWith(pngPrefix)) {
      console.log('Base64 image is correctly prefixed.');
      return true;
    } else {
      console.error('Base64 image does not have the correct prefix.');
      return false;
    }
  };
 
  // Función para enviar datos al WebSocket
  const sendWebSocket = async (base64Image: string) => {
    // Verificar el prefijo de base64
    /* if (!verifyBase64Prefix(base64Image)) {
      console.error('Invalid base64 image prefix.');
      return;
    }
 
    if (!base64Image || base64Image.length < 1000) {
      console.error('Invalid or incomplete base64 image data.');
      return;
    } 
 
    const payload = {
      models: {
        face: {
          min_face_size: 20,
          identify_faces: true,
          prob_threshold: 1,
          fps_pred: 6
        }
      },
      "job_details": true,
      data: base64Image,
    };
 
    // Initialize WebSocket connection
    const apiKey = "ihQLg5EVtVEJEK1SGjqG40EAknf8mwM2qEreZNBxEd954lbU";
    const ws = new WebSocket(`wss://api.hume.ai/v0/stream/models?api_key=${apiKey}`);
 
    ws.onopen = () => {
      console.log('WebSocket connection opened.');
      ws.send(JSON.stringify(payload));
    };
 
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log('Received data:', data);
 
      // Check if the face predictions are available
      if (data.face && data.face.predictions && data.face.predictions.length > 0) {
        const detectedEmotions = data.face.predictions[0].emotions;
 
        const cVaginia = [
          'Admiración', 'Adoración', 'Apreciación estética', 'Diversión', 'Enojo', 'Ansiedad',
          'Asombro', 'Incomodidad', 'Aburrimiento', 'Calma', 'Concentración', 'Contemplación',
          'Confusión', 'Desprecio', 'Alegría', 'Antojo', 'Determinación', 'Decepción',
          'Repulsión', 'Angustia', 'Duda', 'Éxtasis', 'Vergüenza', 'Dolor empático',
          'Fascinación', 'Envidia', 'Emoción', 'Temor', 'Culpa', 'Horror', 'Interés',
          'Regocijo', 'Amor', 'Nostalgia', 'Dolor', 'Orgullo', 'Plenitud', 'Alivio',
          'Romance', 'Tristeza', 'Satisfacción', 'Deseo', 'Vergüenza', 'Sorpresa (negativa)',
          'Sorpresa (positiva)', 'Simpatía', 'Cansancio', 'Triunfo',
        ];
 
        const emociones = detectedEmotions.map((item: any, index: any) => ({
          name: cVaginia[index] || 'Desconocida',
          score: Math.round(item.score * 100),
        }));
 
        emociones.sort((a: any, b: any) => b.score - a.score);
        const top = emociones.slice(0, 6);
 
        console.log(`Hoy te sientes con ${top[0].name} (${top[0].score})\n`);
 
        for (const emotion of top) {
          console.log(emotion.name + ': ' + emotion.score);
        }
      } else {
        console.log('No face predictions found.');
      }
 
      // Close WebSocket connection
      ws.close();
    };
 
    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
 
    ws.onclose = () => {
      console.log('WebSocket connection closed.');
    };
  };
 
  // Función principal para analizar emociones
  const analyzeEmotions = async (photoUri: string) => {
    const base64Image = await imgToBase64(photoUri);
 
    if (!base64Image) {
      console.error('Image could not be converted to base64.');
      return;
    }
 
    await sendWebSocket(imageSources.path);
  };
 
  analyzeEmotions(imageSources.path);
*/
/* try {
  const formData = new FormData();
  formData.append('file', {
    uri: photoUri,
    type: 'image/jpeg', // o el tipo adecuado según el archivo
    name: 'photo.jpg',
  });
 
  const response = await axios.post('wss://api.hume.ai/v0/stream/models?api_key=ihQLg5EVtVEJEK1SGjqG40EAknf8mwM2qEreZNBxEd954lbU', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
 
  // Procesa los resultados aquí
  console.log('Emotions:', response.data);
} catch (error) {
  if (axios.isAxiosError(error)) {
    console.error('Error analyzing emotions:', error.response?.status, error.response?.data);
  } else {
    console.error('Error analyzing emotions:', error);
  }
} */


/*
 
 const deBlobToBase64 = async (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => {
        resolve(reader.result)
      }
      reader.onerror = (error) => {
        reject(error);
      }
      reader.readAsDataURL(blob)
    })
  }
 
const base64Image = await deBlobToBase64(blob) 
 
  // --- si no sirve la conversión actual, usar el la anterior función --- //
 
const imgToBase64 = async (imagePath: any) => {
  try {
    const base64Data = await RNFetchBlob.fs.readFile(imagePath, 'base64');
    console.log('encoded base64:', base64Data);
    return base64Data;
  } catch (error) {
    console.error('err encoding:', error);
    return null;
  }
};
 
const sendWebSocket = async (imageSources: PhotoFile) => {
  const base64Image = await imgToBase64(imageSources.path);
 
  if (!base64Image) {
    console.error('no se convirtió a base64');
  }
 
  const payload = {
    models: {
      face: {
        facs: {}
      }
    },
    data: base64Image
  };
 
  ws.onopen = async () => {
    console.log("WebSocket connection opened.");
    ws.send(JSON.stringify(payload));
  };
 
  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log(data);
    const detectedEmotions = data.face.predictions[0].emotions;
 
    const cVaginia = [
      'Admiración', 'Adoración', 'Apreciación estética', 'Diversión', 'Enojo', 'Ansiedad',
      'Asombro', 'Incomodidad', 'Aburrimiento', 'Calma', 'Concentración', 'Contemplación',
      'Confusión', 'Desprecio', 'Alegría', 'Antojo', 'Determinación', 'Decepción',
      'Repulsión', 'Angustia', 'Duda', 'Éxtasis', 'Vergüenza', 'Dolor empático',
      'Fascinación', 'Envidia', 'Emoción', 'Temor', 'Culpa', 'Horror', 'Interés',
      'Regocijo', 'Amor', 'Nostalgia', 'Dolor', 'Orgullo', 'Plenitud', 'Alivio',
      'Romance', 'Tristeza', 'Satisfacción', 'Deseo', 'Vergüenza', 'Sorpresa (negativa)',
      'Sorpresa (positiva)', 'Simpatía', 'Cansancio', 'Triunfo'
    ];
 
    const emociones = detectedEmotions.map((item: any, index: any) => ({
      name: cVaginia[index],
      score: Math.round(item.score * 100)
    }));
 
    emociones.sort((a: any, b: any) => b.score - a.score);
    const top = emociones.slice(0, 6);
    console.log(`Hoy te sientes con ${top[0].name} (${top[0].score})\n`);
 
    for (const i of top)
      console.log(i.name + ': ' + i.score);
 
    ws.close();
  };
 
  ws.onerror = (error) => {
    console.error("WebSocket error:", error);
  };
 
  ws.onclose = () => {
    console.log("WebSocket conn closed.");
  };
 
};
 
sendWebSocket(imageSources);
*/
