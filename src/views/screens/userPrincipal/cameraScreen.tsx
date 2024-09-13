import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Camera } from "react-native-vision-camera";
import hookOpenCamara from "../../../controller/hooks/userPrincipal/hookOpenCamara";
import styles from "./style/styleScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import TopBar from "../../components/userRegistration/topBar";

// Pantalla de la cámara
const CameraScreen = () => {
  const {
    camera,
    hasPermission,
    showCamera,
    imageSource,
    capturePhoto,
    device,
    HomeScreen,
    format,
  } = hookOpenCamara();

  // Mientras se carga la cámara
  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#213751" />
      </View>
    );
  }

  // Si no se encuentra el dispositivo
  if (!device) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Dispositivo no encontrado</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {showCamera ? (
        <>
          <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device}
            format={format}
            isActive={showCamera}
            photo={true}
          />
          <View style={styles.capturePhoto}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => capturePhoto()}
            >
              <Ionicons name="camera-outline" color="#000" size={50} />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View>
          {imageSource ? (
            <ScrollView>
              <View style={styles.containerResult}>
                <TopBar goBack={HomeScreen} text="Resultados" />
                <View style={styles.containerParent}>
                  <Image
                    source={{ uri: `file://${imageSource?.path}` }}
                    style={styles.photo}
                  />
                  <View style={styles.resultsContainer}>
                    <Text
                      style={styles.titleResult}
                    >{`Tus emociones son:`}</Text>
                    <View style={styles.textContainer}>
                      <Text style={styles.textResult}>
                        {`1. Alegría:`}
                        <Text style={styles.textScore}>{` 65%`}</Text>
                      </Text>
                      <Text style={styles.textResult}>
                        {`2. Regocijo:`}
                        <Text style={styles.textScore}>{` 20%`}</Text>
                      </Text>
                      <Text style={styles.textResult}>
                        {`3. Éxtasis:`}
                        <Text style={styles.textScore}>{` 15%`}</Text>
                      </Text>
                      <Text style={styles.textResult}>
                        {`4. Alegría:`}
                        <Text style={styles.textScore}>{` 65%`}</Text>
                      </Text>
                      <Text style={styles.textResult}>
                        {`5. Regocijo:`}
                        <Text style={styles.textScore}>{` 20%`}</Text>
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          ) : (
            <View style={styles.container}>
              <ActivityIndicator size="large" color="#213751" />
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default CameraScreen;
