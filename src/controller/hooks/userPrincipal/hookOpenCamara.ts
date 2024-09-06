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