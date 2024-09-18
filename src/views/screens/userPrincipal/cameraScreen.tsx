import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import { Camera } from "react-native-vision-camera";
import hookOpenCamara from "../../../controller/hooks/userPrincipal/hookOpenCamara";
import styles from "./style/styleScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import TopBar from "../../components/userRegistration/topBar";

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
    imageSourceShow,
    resultDiary
  } = hookOpenCamara();

  const data = resultDiary ? JSON.parse(resultDiary) : [];

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#479E9C" />
      </View>
    );
  }

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
                    source={{ uri: `file://${imageSourceShow?.path}` }}
                    style={styles.photo}
                  />
                  <View style={styles.resultsContainer}>
                  <Text
                      style={styles.titleResult}
                    >{`Tus emociones son:`}</Text>
                     <View style={styles.textContainer}>             
                      {data.length > 0 ? (
                        data.map((item:any, index:any) => (
                          <Text key={index} style={styles.textResult}>
                          {`${index + 1}. ${item.name}:`}
                          <Text style={styles.textScore}>{` ${item.score}%`}</Text>
                        </Text>
                        ))
                      ) : (
                        <Text style={styles.titleResult}>{`Datos no encontrados`}</Text>
                      )}
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
