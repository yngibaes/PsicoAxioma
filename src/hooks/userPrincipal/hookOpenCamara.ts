import { useEffect, useRef, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  Camera,
  PhotoFile,
  useCameraDevice,
  useCameraPermission,
} from "react-native-vision-camera";
//import { Worklets } from 'react-native-worklets-core';
//import { scanFaces, type Face } from 'vision-camera-trustee-face-detector-v3';
import UserNavigation from "../userNavigation";

//https://dev.to/thelamina/how-to-implement-face-detection-in-react-native-using-react-native-vision-camera-58ff
//https://www.npmjs.com/package/react-native-vision-camera-face-detector

const hookOpenCamara = () => {
  const { hasPermission, requestPermission } = useCameraPermission();
  const camera = useRef<Camera>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [imageSource, setImageSource] = useState<PhotoFile>();
  //const [faces, setFaces] = useState<any>();

  console.log("Permiso de camara: ", hasPermission);

  /* const handleFaceDetection = (Worklets.createRunInJsFn as unknown as (fn: (face: Face) => void) => (face: Face) => void)((face) => {
     setFaces(face);
   });*/

  const device = useCameraDevice("front");
  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission]);

  useFocusEffect(
    useCallback(() => {
      setShowCamera(true);
      return () => {
        setShowCamera(false);
      };
    }, []),
  );

  const capturePhoto = async () => {
    if (camera.current !== null) {
      const photo = await camera.current?.takePhoto({});
      setImageSource(photo);
      console.log("Foto tomada: ", photo);
      setShowCamera(false);
    }
  };

  const { HomeScreen } = UserNavigation();

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

/* import { useEffect, useRef, useState } from 'react'
import { Linking } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera'

const hookOpenCamara = async () => {
    const camera = useRef<Camera>(null)
    const devices = useCameraDevices();
    const device = devices.find(device => device.position === 'front');

    const [showCamera, setShowCamera] = useState(false);
    const [imageSource, setImageSource] = useState('');

    useEffect(() => {
        async function getPermission() {
            const cameraPermission = await Camera.requestCameraPermission();
            console.log('Permiso de camara: ', cameraPermission);
            if (cameraPermission === 'denied') {
                await Linking.openSettings();
            }
        }
        getPermission();
    }, [])

    const capturePhoto = async () => {
        if (camera.current !== null) {
            const photo = await camera.current.takePhoto({});
            setImageSource(photo.path);
            setShowCamera(false);
            console.log('Foto tomada: ', photo.path);
        }
    }
    return { camera, device, showCamera, imageSource, capturePhoto, setShowCamera }
}

  useEffect(() => {
    if (camera.current) {
      const timer = setTimeout(async () => {
        try {
          if (camera.current) {
            const photo = await camera.current?.takePhoto({});
            console.log('Foto tomada: ', photo.path);
            setImageSource(photo.path);
            console.log('Imagen: ', imageSource);
            setShowCamera(false);
          }
        } catch (error) {
          console.error('Error al tomar la foto: ', error);
        }
      }, 10);

      return () => clearTimeout(timer);
    }
  }, [camera]);

export default hookOpenCamara

const camera = useRef<Camera>(null)
  const [showCamera, setShowCamera] = useState(false);
  const [imageSource, setImageSource] = useState<PhotoFile>();

  const device = useCameraDevice('front', {
    physicalDevices: ['wide-angle-camera', 'ultra-wide-angle-camera', 'telephoto-camera']
  });

  //https://github.com/mrousavy/react-native-vision-camera/blob/main/package/example/src/CameraPage.tsx

  useFocusEffect(
    useCallback(() => {
      setShowCamera(true);
      return () => {
        console.log('CameraScreen: cleanup');
        setShowCamera(false);
      }
    }, [])
  );

  useEffect(() => {
    async function getPermission() {
      const cameraPermission = await Camera.requestCameraPermission();
      console.log('Permiso de camara: ', cameraPermission);
      if (cameraPermission === 'denied') {
        await Linking.openSettings();
      }
    }
    getPermission();
  }, [])

  const capturePhoto = async () => {
    const photo = await camera.current?.takePhoto();
    setImageSource(photo);
    setShowCamera(false);
    console.log('Foto tomada: ', photo);
  }

  const render = async () => {
    if (!imageSource) {
      return <Text>Presiona el botón para tomar una foto</Text>
    }
    const res = await fetch(`file://${imageSource.path}`);
  }

  if (!device) return <Text>Dispositivo no encontrado</Text>

{showCamera ? (
        <>
          <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={showCamera}
            photo={true}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => capturePhoto()}>
            <Text>Take Photo</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
      
          {imageSource ? (
            <>
              <Image
                source={{ uri: `file://${imageSource.path}` }}
                style={StyleSheet.absoluteFill}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={() => render()}>
                <Text>Renderizar</Text>
              </TouchableOpacity>
            </>
          ) : (
            <Text>Presiona el botón para tomar una foto</Text>
          )}
        </>
      )
      }

*/
