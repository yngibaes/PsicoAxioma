import * as React from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';
import styles from './style/styleFormLogIn';
import hookLogin from '../../hooks/userRegistration/hookLogin';
import stylesButton from './style/styleButtonLogIn';

// Definición de las props usando TypeScript
interface propsFormLogIn {
  forget: () => void
}

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
  } = hookLogin()
  return (
    <View style={styles.parentForm}>
      <View style={styles.parentInput}>
        <View style={styles.divInput}>
          <View style={styles.divLabel}>
            <Text style={styles.labelForm}>Email</Text>
            {errors.userEmail && (
              <Text style={styles.error}>{errors.userEmail}</Text>
            )}
          </View>
          <View style={[styles.sizeInput, styles.input]}>
            <TextInput
              style={styles.label}
              placeholder="Escriba su email"
              keyboardType="email-address"
              placeholderTextColor="#828282"
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
          <Text style={styles.labelForm}>Contraseña</Text>
          <View style={[styles.sizeInput, styles.input]}>
            <TextInput
              style={styles.label}
              placeholder="Escriba su contraseña"
              keyboardType="default"
              secureTextEntry
              placeholderTextColor="#000"
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
        <Text style={styles.text}>¿Olvidaste tu contraseña?</Text>
      </Pressable>
      <View style={stylesButton.divButton}>
        <Pressable
          style={stylesButton.parentButton}
          onPress={() => handleSubmit(userEmail, userPassword)}>
          <Text style={[stylesButton.button, stylesButton.title]}>
            Iniciar sesión
          </Text>
        </Pressable>
        <View style={stylesButton.divQuestion}>
          <Text style={[stylesButton.sizeText, stylesButton.text]}>
            ¿Aún no tienes cuenta?
          </Text>
          <Pressable style={stylesButton.marginText} onPress={signUp}>
            <Text style={[stylesButton.optionsText, stylesButton.text]}>
              Regístrate
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default FormLogIn
