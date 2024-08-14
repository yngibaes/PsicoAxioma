import React from 'react';
import { Text, View, StyleSheet, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'react-native-vision-camera';
import hookOpenCamara from '../../hooks/userPrincipal/hookOpenCamara';
import styles from './style/styleScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CameraScreen = () => {
  const { camera, hasPermission, showCamera, imageSource, capturePhoto, device } = hookOpenCamara();

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#213751" />
      </View>);
  }

  if (!device) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Dispositivo no encontrado</Text>
      </View>);
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
          <View style={styles.capturePhoto}>
            <TouchableOpacity style={styles.button}
              onPress={() => capturePhoto()}>
              <Ionicons
                name="camera-outline"
                color='#000'
                size={50}
              />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View>
          {imageSource ? (
            <>
              <Image
                source={{ uri: `file://${imageSource.path}` }}
                style={styles.photo}
              />

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
  );
};

export default CameraScreen;
