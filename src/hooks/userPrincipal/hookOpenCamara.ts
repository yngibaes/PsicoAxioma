import { useEffect, useRef, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  Camera,
  PhotoFile,
  useCameraDevice,
  useCameraPermission,
} from "react-native-vision-camera";
import UserNavigation from "../userNavigation";

const hookOpenCamara = () => {
  const { hasPermission, requestPermission } = useCameraPermission();
  const camera = useRef<Camera>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [imageSource, setImageSource] = useState<PhotoFile[]>([]);

  const { HomeScreen } = UserNavigation();

  const device = useCameraDevice("front");

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
        setImageSource(prevState => [photo, ...prevState,]);
        console.log(imageSource[0]?.path);
        console.log(imageSource);
        const photoFile: PhotoFile = { 
          path: imageSource[0]?.path, 
          width: 0, 
          height: 0, 
          isRawPhoto: false, 
          orientation: "portrait", 
          isMirrored: false 
        };
        scannerResult([photoFile]);
        setShowCamera(false);
      } catch (error) {
        console.error("Error al capturar la foto", error);
      }
    } else {
      console.error("La cámara no está lista o el dispositivo no está configurado");
    }
  };

  const scannerResult = async (imageSources: PhotoFile[]) => {

    try {
      const formData = new FormData();
      const response = await fetch("https://api.hume.ai/v0/registry/files/upload", {
        method: "POST",
        headers: {
          "X-Hume-Api-Key": "V7VtoAQ0cAUQALDDjTZAWnqnUnM6mWvRINuB9bqxe7XQGA8I",
        },
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        const idPhoto = result.job_id;
        console.log(idPhoto);
        //await retryGetEmotions(idPhoto);
      } else {
        const errorResult = await response.json();
        console.error("Error al subir la imagen al servidor", errorResult);
      }
    } catch (error) {
        console.error("Error inesperado", error);
    }
  };

  const getEmotions = async (idPhoto:any) => {
    try {
      const response = await fetch(`https://api.hume.ai/v0/batch/jobs/${idPhoto}/predictions`, {
        method: "GET",
        headers: {
          "X-Hume-Api-Key": "V7VtoAQ0cAUQALDDjTZAWnqnUnM6mWvRINuB9bqxe7XQGA8I",
          "Accept": "application/json"
        },
      });

      if (response.ok) {
        const resultEmotions = await response.json();
        console.log(resultEmotions[0].results.predictions[0].models.language.grouped_predictions[0].predictions[0].emotions);
        const detectedEmotions = resultEmotions[0].results.predictions[0].models.language.grouped_predictions[0].predictions[0].emotions;
        const spanish = [
          "Admiración",
          "Adoración",
          "Apreciación estética",
          "Diversión",
          "Enojo",
          "Molestia",
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
          "Determinación",
          "Decepción",
          "Desaprobación",
          "Repulsión",
          "Angustia",
          "Duda",
          "Éxtasis",
          "Vergüenza",
          "Dolor empático",
          "Entusiasmo",
          "Fascinación",
          "Envidia",
          "Emoción",
          "Temor",
          "Gratitud",
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
          "Sarcasmo",
          "Satisfacción",
          "Deseo",
          "Lástima",
          "Sorpresa (negativa)",
          "Sorpresa (positiva)",
          "Simpatía",
          "Cansancio",
          "Triunfo",
        ];
        const emotions = detectedEmotions.map((item: any, index: number) => ({
          name: spanish[index],
          score: Math.round(item.score * 100),
        }));
        emotions.sort((a: any, b: any) => b.score - a.score);
        const top = emotions.slice(0, 5);
        console.log("Emociones más fuertes detectadas:", top);
        const ResultScanner = JSON.stringify(top);
        console.log(ResultScanner);
      } else {
        const errorResult = await response.json();
        if (errorResult.message === "Job is in progress.") {
          throw new Error("Job is in progress.");
        } else {
          console.error("Error al obtener las emociones", errorResult);
        }
      }
    } catch (error) {
      if (error instanceof TypeError && error.message === "Network request failed") {
        console.error("Error de red: Verifica tu conexión a Internet o la URL de la API.");
      } else {
        console.error("Error inesperado al obtener las emociones", error);
      }
      throw error; // Re-lanzar el error para que el reintento lo capture
    }
  };

  const retryGetEmotions = async (idPhoto: string, retries = 5, delay = 2000) => {
    for (let i = 0; i < retries; i++) {
      try {
        await getEmotions(idPhoto);
        return;
      } catch (error) {
        if (error.message === "Job is in progress." && i < retries - 1) {
          console.log(`Reintentando obtener emociones (${i + 1}/${retries})...`);
          await new Promise(resolve => setTimeout(resolve, delay));
        } else {
          console.error("Error al obtener las emociones después de varios intentos", error);
        }
      }
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
  };
};

export default hookOpenCamara;