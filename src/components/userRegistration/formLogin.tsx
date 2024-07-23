import * as React from 'react'
import { Text, View, TextInput, Pressable } from 'react-native'
import styles from './style/styleFormLogIn'
import hookLogin from '../../hooks/userRegistration/hookLogin'

// Definición de las props usando TypeScript
interface propsFormLogIn {
  forget: () => void
}

// Definición del componente FormLogIn
const FormLogIn = (props: propsFormLogIn) => {
  const {
    userEmail,
    userPassword,
    setUserEmail,
    setUserPassword,
    userPasswordRef,
    userPasswordNext
  } = hookLogin()
  return (
    <View style={styles.parentForm}>
      <View style={styles.parentInput}>
        <View style={styles.divInput}>
          <Text style={styles.labelForm}>Email</Text>
          <View style={[styles.sizeInput, styles.input]}>
            <TextInput
              style={styles.label}
              placeholder="Escriba su email"
              keyboardType="email-address"
              placeholderTextColor="#000"
              inputMode="email"
              data-name="userEmail"
              keyboardAppearance='dark'
              returnKeyType='next'
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
              keyboardAppearance='dark'
              returnKeyType='done'
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
    </View>
  )
}

export default FormLogIn