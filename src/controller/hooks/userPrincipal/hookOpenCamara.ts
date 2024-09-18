import { useEffect, useRef, useState, useCallback } from "react";
import { Alert } from "react-native";
import { HumeClient } from "hume";
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

const useOpenCamera = () => {
  const { hasPermission, requestPermission } = useCameraPermission();
  const camera = useRef<Camera>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [imageSource, setImageSource] = useState<string>();

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
        console.log(photo);
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
        const getEmotions 
        console.log(body);
      } catch (error) {
        console.error("Error al enviar la imagen al servidor", error);
      }

    } catch (error) {
      console.error("Error inesperado", error);
    }
  }

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

export default useOpenCamera;