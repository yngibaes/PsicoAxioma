import React from 'react';
import { Text, View, StyleSheet, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'react-native-vision-camera';
import hookOpenCamara from '../../hooks/userPrincipal/hookOpenCamara';
import styles from './style/styleScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TopBar from '../../components/userRegistration/topBar';

//https://react-native-vision-camera.com/docs/guides/frame-processors-interacting

const CameraScreen = () => {
  const { camera, hasPermission, showCamera, imageSource, capturePhoto, device, HomeScreen } = hookOpenCamara();

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
            <View style={styles.containerResult}>
            <TopBar goBack={HomeScreen} text="Resultados" />
              <Image
                source={{ uri: `file://${imageSource.path}` }}
                style={styles.photo}
              />
              <View style={styles.resultsContainer}>
                <Text style={styles.textResult}>`Resultados: ${imageSource.path}`</Text>
              </View>
            </View>
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

/* import React, { useRef, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {
  useCameraDevice,
  useCameraPermission,
  CameraCaptureError,
  Camera,
  type CameraPosition,
  useFrameProcessor,
} from 'react-native-vision-camera';
import { Worklets } from 'react-native-worklets-core';

import { COLORS } from '@/styles';
import { scanFaces, type Face } from 'vision-camera-trustee-face-detector-v3';

type CameraProps = {
  // Define the properties of the Camera component here
};

export const PhotoCamera: React.FC<CameraProps> = () => {
  const { hasPermission, requestPermission } = useCameraPermission();
  const cameraRef = useRef<Camera | null>(null);
  const device = useCameraDevice('front');
  const [faces, setFaces] = useState<Face>();
  const [photo, setPhoto] = useState<string>("");

  useEffect(() => {
    (async () => {
      await requestPermission();
    })();
  }, [requestPermission]);

  const handleFaceDetection = Worklets.createRunInJsFn((face: Face) => {
    setFaces(face);
  });

  const frameProcessor = useFrameProcessor(
    (frame) => {
      'worklet';
      try {
        const scannedFaces: any = scanFaces(frame, {});
        if (Object.keys(scannedFaces).length > 0) {
          handleFaceDetection(scannedFaces);
        }
      } catch (error) {}
    },
    [handleFaceDetection]
  );
  
  const handleTakePicture = async () => {
    if (cameraRef.current) {
      setFaces(undefined);
      if (faces) {
        const shot = await cameraRef.current.takePhoto({});
        setPhoto(`file://${shot.path}`);
      } else {
        Alert.alert('Posiciona bien la cara sosorra');
      }
    }
  };

  if (!hasPermission) {
    // Camera permissions are still loading
    return (
      <View style={styles.container}>
        <ActivityIndicator color="#162D4C" />
      </View>
    );
  }

  if (device == null) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>No camera device found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {photo ? (
        <View
          style={{
            flex: 1,
            position: 'relative',
          }}
        >
          <Image
            source={{ uri: photo }}
            style={{
              flex: 1,
              borderRadius: 10,
            }}
          />
        </View>
      ) : (
        <View style={{ flex: 1, position: 'relative', borderRadius: 10 }}>
          <Camera
            ref={cameraRef}
            frameProcessor={frameProcessor}
            style={styles.camera}
            device={device}
            isActive={!!device}
            pixelFormat="yuv"
          />

          <View style={styles.bottomBar}>
              <TouchableOpacity
                onPress={handleTakePicture}
                style={styles.shutterButton}
              />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
    padding: 7,
    position: 'relative',
    borderRadius: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 24,
    position: 'absolute',
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  bottomBar: {
    justifyContent: 'center',
    position: 'absolute',
    bottom: 32,
    width: '100%',
    alignItems: 'center',
  },
  shutterButton: {
    width: 70,
    height: 70,
    bottom: 0,
    borderRadius: 50,
    backgroundColor: '#fff',
  },
}); 

import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import { 
  useEffect, 
  useState,
  useRef
} from 'react';
import {
  Frame,
  useCameraDevice,
  requestPermission
} from 'react-native-vision-camera';
import {
  Face,
  Camera,
  FaceDetectionOptions
} from 'react-native-vision-camera-face-detector';

export default function App() {
  const faceDetectionOptions = useRef<FaceDetectionOptions>( {
    // detection options
  } ).current

  const device = useCameraDevice('front');

  useEffect(() => {
    (async () => {
      const status = await requestPermission();
      console.log({ status })
    })()
  }, [device])

  function handleFacesDetection(
    faces: Face[],
    frame: Frame
  ) { 
    console.log(
      'faces', faces.length,
      'frame', frame.toString()
    )
  }

  return (
    <View style={{ flex: 1 }}>
      {!!device?  ( <Camera
        isActive={true}
        style={StyleSheet.absoluteFill}
        device={device}
        faceDetectionCallback={ handleFacesDetection }
        faceDetectionOptions={ faceDetectionOptions }
      />) : (<Text>
        No Device
      </Text>)}
    </View>
  )
} */

/* import React from "react";
import { useFrameProcessor, Camera } from "react-native-vision-camera";

const CameraScreen = () => {
  import { detectObjects } from './path/to/detectObjects'; // Replace './path/to/detectObjects' with the actual path to the module that defines the 'detectObjects' function.
  
  const frameProcessor = useFrameProcessor((frame) => {
    'worklet'
    const objects = detectObjects(frame)
    const label = objects[0].name
    console.log(`You're looking at a ${label}.`)
  }, [])
  
  return <Camera frameProcessor={frameProcessor} />
} */