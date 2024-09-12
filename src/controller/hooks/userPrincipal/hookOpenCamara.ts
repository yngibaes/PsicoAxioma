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
import RNFetchBlob from 'react-native-blob-util';

const hookOpenCamara = () => {
  const { hasPermission, requestPermission } = useCameraPermission();
  const camera = useRef<Camera>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [imageSource, setImageSource] = useState<PhotoFile>();

  const { HomeScreen } = UserNavigation();

  const device = useCameraDevice("front");

  const format = useCameraFormat(device, [
    { photoResolution: { width: 1280, height: 700 } }
  ]);

  useEffect(() => {
    const checkPermission = async () => {
      if (!hasPermission) {
        await requestPermission();
      }
    };
    checkPermission();
  }, [hasPermission, requestPermission]);

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
        setImageSource(photo);
        console.log(imageSource);
        console.log(imageSource?.path);
        await scannerResult(imageSource);
        setShowCamera(false);
      } catch (error) {
        console.error("Error al capturar la foto", error);
      }
    } else {
      console.error("La cámara no está lista o el dispositivo no está configurado");
    }
  };

  const scannerResult = async (imageSources: any) => {
    if (!imageSources || !imageSources.path) {
      Alert.alert('Error', 'Intenta de nuevo');
      return;
    }


    const apiKey = "ihQLg5EVtVEJEK1SGjqG40EAknf8mwM2qEreZNBxEd954lbU";
    const ws = new WebSocket(`wss://api.hume.ai/v0/stream/models?api_key=${apiKey}`);

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

    const sendWebSocket = async (imageSources: any) => {
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