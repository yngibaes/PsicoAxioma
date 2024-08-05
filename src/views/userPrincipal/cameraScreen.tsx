import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styles from './style/styleScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Image } from 'react-native-elements';

import { useEffect, useRef, useState } from 'react'
import { Linking } from 'react-native';
import { Camera, getCameraDevice, useCameraDevice, NoCameraDeviceError } from 'react-native-vision-camera'

// Definición del componente SignUp
const CameraScreen = () => {
  const camera = useRef<Camera>(null)
  /*   const devices = Camera.getAvailableCameraDevices()
    const device = getCameraDevice(devices, 'front') */
  const device = useCameraDevice('front')
  const [showCamera, setShowCamera] = useState(false);
  const [imageSource, setImageSource] = useState('');

  //https://github.com/mrousavy/react-native-vision-camera/blob/main/package/example/src/CameraPage.tsx
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
          {imageSource !== '' ? (
            <Image
              source={{ uri: `file://${imageSource}` }}
              style={{ width: 200, height: 200 }}
            />
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
