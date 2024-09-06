import React from "react";
import { View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import TopBar from "../../components/userRegistration/topBar";
import FormSignUp from "../../components/userRegistration/formSignUp";
import ImageBear from "../../components/userRegistration/imageBear";
import UserNavigation from "../../../controller/hooks/userNavigation";
import styles from "./style/styleAll";

// Definición del componente SignUpScreen
const SignUpScreen = () => {
  const { goBack } = UserNavigation();
  return (
    <View style={styles.parentSignUp}>
      <TopBar goBack={goBack} text="Regístrate" />
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        scrollEnabled={false} // Deshabilita el scroll en la vista
        extraScrollHeight={10} // Ajusta este valor según sea necesario
        keyboardShouldPersistTaps="handled" // Mejora la interacción con los inputs cuando el teclado está visible
        resetScrollToCoords={{ x: 0, y: 0 }} // Esta línea asegura que el scroll vuelva a su posición original
      >
        <View style={styles.parentForm}>
          <View style={styles.childForm}>
            <View style={styles.ellipseForm}>
              <ImageBear sizeHeightD="19%" sizeHeightI="19%" sizeWidhtI="50%" />
            </View>
            <View style={styles.backgroundForm}>
              <FormSignUp />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignUpScreen;
