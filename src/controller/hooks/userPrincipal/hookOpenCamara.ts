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
import RNFS from "react-native-fs";
import axios from "axios";
import hookDataUser from "./hookDataUser";
import url from "../config/config";

const useOpenCamera = () => {
  const { hasPermission, requestPermission } = useCameraPermission();
  const camera = useRef<Camera>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [imageSource, setImageSource] = useState<string>();
  const [imageSourceShow, setImageSourceShow] = useState<PhotoFile>();
  const [resultScanner, setResultScanner] = useState('');
  const [loading, setLoading] = useState(false); // Estado para la pantalla de carga

  const { userEmail } = hookDataUser();
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
      Alert.alert("Advertencia", "Por favor, la foto debe estar bien iluminada, de lo contrario no se podrá detectar las emociones.");
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
        setImageSourceShow(photo);

        // Save photo to local storage
        const savedPhotoPath = await savePhotoToLocal(photo);
        console.log("Photo saved to:", savedPhotoPath);
        setImageSource(savedPhotoPath);

        await ScannerResult(savedPhotoPath);
        setShowCamera(false);
      } catch (error) {
        console.error("Error al capturar la foto", error);
      }
    } else {
      console.error("La cámara no está lista o el dispositivo no está configurado");
    }
  };

  const savePhotoToLocal = async (photo: PhotoFile) => {
    const filePath = `${RNFS.DocumentDirectoryPath}/scanner_${Date.now()}.jpg`;
    try {
      await RNFS.copyFile(photo.path, filePath);
      return filePath;
    } catch (error) {
      console.error("Error al guardar la foto en el almacenamiento local", error);
      throw error;
    }
  };

  const ScannerResult = async (filePath: string) => {
    Alert.alert("Procesando", "Por favor, espere un momento...");
    try {
      const formData = new FormData();
      formData.append('file', {
        uri: filePath.startsWith('file://') ? filePath : `file://${filePath}`,
        type: 'image/jpg',
        name: `scanner_${Date.now()}.jpg`,
      });

      formData.append('json', JSON.stringify({
        "models": {
          "face": {
            "identify_faces": true,
            "min_face_size": 30,
            "prob_threshold": 0.8,
          },
        },
      }));

      console.log(formData);

      try {
        const response = await fetch("https://api.hume.ai/v0/batch/jobs", {
          method: "POST",
          headers: {
            "X-Hume-Api-Key": "V7VtoAQ0cAUQALDDjTZAWnqnUnM6mWvRINuB9bqxe7XQGA8I",
            "Content-Type": "multipart/form-data"
          },
          body: formData,
        });

        const body = await response.json();
        const job_id = body.job_id;
        console.log(job_id);
        const getEmotions = async () => {
          let isJobComplete = false;
          let emotions = null;

          while (!isJobComplete) {
            const response = await fetch(`https://api.hume.ai/v0/batch/jobs/${job_id}/predictions`, {
              method: 'GET',
              headers: {
                'X-Hume-Api-Key': 'V7VtoAQ0cAUQALDDjTZAWnqnUnM6mWvRINuB9bqxe7XQGA8I',
                'Content-Type': 'application/json',
              },
            });

            const result = await response.json();

            if (response.status === 200) {
              isJobComplete = true;
              emotions = result;
            } else if (response.status === 400 && result.message === 'Job is in progress.') {
              console.log('Job is still in progress, waiting...');
              await new Promise(resolve => setTimeout(resolve, 5000)); // Espera 5 segundos antes de volver a intentar
            } else {
              throw new Error(`Unexpected response: ${response.status} ${result.message}`);
            }
          }

          return emotions;
        };
        const data = await getEmotions();

        // Verificación adicional para evitar errores de acceso a propiedades
        if (
          data &&
          data[0] &&
          data[0].results &&
          data[0].results.predictions &&
          data[0].results.predictions[0] &&
          data[0].results.predictions[0].models &&
          data[0].results.predictions[0].models.face &&
          data[0].results.predictions[0].models.face.grouped_predictions &&
          data[0].results.predictions[0].models.face.grouped_predictions[0] &&
          data[0].results.predictions[0].models.face.grouped_predictions[0].predictions &&
          data[0].results.predictions[0].models.face.grouped_predictions[0].predictions[0]
        ) {
          const predictions = data[0].results.predictions[0].models.face.grouped_predictions[0].predictions;
          console.log(predictions);

          if (predictions.length === 0) {
            Alert.alert("Error", "La foto debe estar más iluminada. Inténtalo de nuevo.");
            setLoading(false); // Ocultar pantalla de carga
            return;
          }

          const detectedEmotions = predictions[0].emotions;
          console.log(detectedEmotions);

          const spanish = [
            "Admiración",
            "Adoración",
            "Apreciación estética",
            "Diversión",
            "Enojo",
            "Ansiedad",
            "Asombro",
            "Incomodidad",
            "Aburrimiento",
            "Calma",
            "Concentración",
            "Confusión",
            "Contemplación",
            "Desprecio",
            "Alegría",
            "Antojo",
            "Deseo",
            "Determinación",
            "Decepción",
            "Repulsión",
            "Angustia",
            "Duda",
            "Éxtasis",
            "Vergüenza",
            "Dolor empático",
            "Fascinación",
            "Envidia",
            "Emoción",
            "Temor",
            "Culpa",
            "Horror",
            "Interés",
            "Regocijo",
            "Amor",
            "Nostalgia",
            "Dolor",
            "Orgullo",
            "Plenitud",
            "Alivio",
            "Romance",
            "Tristeza",
            "Satisfacción",
            "Lástima",
            "Sorpresa (negativa)",
            "Sorpresa (positiva)",
            "Simpatía",
            "Cansancio",
            "Triunfo"
          ];

          const emotions = detectedEmotions.map((item: any, index: any) => ({
            name: spanish[index],
            score: Math.round(item.score * 100),
          }));

          emotions.sort((a: any, b: any) => b.score - a.score);
          const top = emotions.slice(0, 5);
          console.log("Emociones más fuertes detectadas:", top);

          const ResultScanner = JSON.stringify(top);
          setResultScanner(ResultScanner);

          try {
            const response = await axios.post(`${url}/insertsResultScanner?userEmail=${userEmail}`, {
              ResultScanner,
            });
            if (response.status === 200) {
              Alert.alert("Enviado", "Escánner Enviado.");
            } else {
              console.error("Error en la respuesta del servidor:", response.data);
              Alert.alert("Error", "Hubo un problema al enviar los datos al servidor.");
            }
          } catch (error) {
            console.error("Error al enviar la imagen al servidor:", error.response ? error.response.data : error.message);
            Alert.alert("Error", "Hubo un problema al enviar los datos al servidor.");
          }
        } else {
          Alert.alert("Error", "La foto debe estar más iluminada.");
        }
      } catch (error) {
        console.error("Error al enviar la imagen al servidor", error);
      }

    } catch (error) {
      console.error("Error inesperado", error);
    } finally {
      setLoading(false); // Ocultar pantalla de carga
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
    format,
    imageSourceShow,
    resultScanner,
    loading // Devolver el estado de carga
  };
};

export default useOpenCamera;