import React from "react";
import { Text, View, TextInput, Pressable } from "react-native";
import styles from "./style/styleFormLogIn";
import hookLogin from "../../../controller/hooks/userRegistration/hookLogin";
import stylesButton from "./style/styleButtonLogIn";

// Definición de las props usando TypeScript
interface propsFormLogIn {
  forget: () => void;
}

const labelEmail = "Email";
const placeholderEmail = "Escriba su email";
const placeholderColor = "#828282";
const labelPassword = "Contraseña";
const placeholderPassword = "Escriba su contraseña";
const forgotText = "¿Olvidaste tu contraseña?";
const loginButtonText = "Iniciar sesión";
const signunPrompText = "¿Aún no tienes cuenta?";
const signupText = "Regístrate";

// Definición del componente FormLogIn
const FormLogIn = (props: propsFormLogIn) => {
  const {
    userEmail,
    userPassword,
    errors,
    setUserEmail,
    setUserPassword,
    userPasswordRef,
    userPasswordNext,
    handleSubmit,
    signUp,
  } = hookLogin();
  return (
    <View style={styles.parentForm}>
      <View style={styles.parentInput}>
        <View style={styles.divInput}>
          <View style={styles.divLabel}>
            <Text style={styles.labelForm}>{labelEmail}</Text>
            {errors.userEmail && (
              <Text style={styles.error}>{errors.userEmail}</Text>
            )}
          </View>
          <View style={[styles.sizeInput, styles.input]}>
            <TextInput
              style={styles.label}
              placeholder={placeholderEmail}
              keyboardType="email-address"
              placeholderTextColor={placeholderColor}
              inputMode="email"
              data-name="userEmail"
              keyboardAppearance="dark"
              returnKeyType="next"
              value={userEmail}
              onChangeText={setUserEmail}
              onSubmitEditing={userPasswordNext}
            />
          </View>
        </View>
        <View style={styles.divInput}>
          <View style={styles.divLabel}>
            <Text style={styles.labelForm}>{labelPassword}</Text>
            {errors.userPassword && (
              <Text style={styles.error}>{errors.userPassword}</Text>
            )}
          </View>
          <View style={[styles.sizeInput, styles.input]}>
            <TextInput
              style={styles.label}
              placeholder={placeholderPassword}
              keyboardType="default"
              secureTextEntry
              placeholderTextColor={placeholderColor}
              inputMode="text"
              data-name="userPassword"
              keyboardAppearance="dark"
              returnKeyType="done"
              value={userPassword}
              onChangeText={setUserPassword}
              ref={userPasswordRef}
            />
          </View>
        </View>
      </View>
      <Pressable style={styles.divForget} onPress={props.forget}>
        <Text style={styles.text}>{forgotText}</Text>
      </Pressable>
      <View style={stylesButton.divButton}>
        <Pressable
          style={stylesButton.parentButton}
          onPress={() => handleSubmit(userEmail, userPassword)}
        >
          <Text style={[stylesButton.button, stylesButton.title]}>
            {loginButtonText}
          </Text>
        </Pressable>
        <View style={stylesButton.divQuestion}>
          <Text style={[stylesButton.sizeText, stylesButton.text]}>
            {signunPrompText}
          </Text>
          <Pressable style={stylesButton.marginText} onPress={signUp}>
            <Text style={[stylesButton.optionsText, stylesButton.text]}>
              {signupText}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default FormLogIn;
