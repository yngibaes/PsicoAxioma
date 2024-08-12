import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import styles from './style/styleScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Image } from 'react-native-elements';
import { Linking } from 'react-native';
import { Camera, PhotoFile, useCameraDevice } from 'react-native-vision-camera'
import { useFocusEffect } from '@react-navigation/native';
import { useCameraPermission } from 'react-native-vision-camera';

const CameraScreen = () => {
  const { hasPermission, requestPermission } = useCameraPermission();
  const camera = useRef<Camera>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [imageSource, setImageSource] = useState<PhotoFile>();

  console.log('Permiso de camara: ', hasPermission);

  const device = useCameraDevice('front');
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
      }
    }, [])
  );

  const capturePhoto = async () => {
    if (camera.current !== null) {
        const photo = await camera.current?.takePhoto({});
        setImageSource(photo);
        console.log('Foto tomada: ', photo.path);
        console.log('Foto tomada: ', imageSource?.path);
        setShowCamera(false);
    }
}

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#213751" />
      </View>)
  }

  if (!device) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Dispositivo no encontrado</Text>
      </View>)
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
            onPress={() => capturePhoto()}>
            <Text>Take Photo</Text>
          </TouchableOpacity>
        </>
      ) : (
        <View>
          {imageSource ? (
                        <>
            <Image
              source={{ uri: `file://${imageSource.path}` }}
              style={{ width: 344, height: 800 }}
            />
            <Text>Si estoy es que me da penita</Text>
        </>
          ) : (
            <View style={styles.container}>
              <Text style={styles.text}>Imagen no encontrado</Text>
            </View>
          )}
        </View>
      )
      }
    </View>
  )
}

export default CameraScreen
