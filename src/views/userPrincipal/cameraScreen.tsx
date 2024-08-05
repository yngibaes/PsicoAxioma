import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styles from './style/styleScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Image } from 'react-native-elements';
import { Linking } from 'react-native';
import { Camera, PhotoFile, useCameraDevice } from 'react-native-vision-camera'
import { useFocusEffect } from '@react-navigation/native';

// Definición del componente SignUp
const CameraScreen = () => {
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

  return (
    <View style={styles.container}>
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
    </View>
  )
}

export default CameraScreen
