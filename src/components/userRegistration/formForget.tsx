import * as React from 'react'
import { Text, View, TextInput, Pressable } from 'react-native'
import styles from './style/styleFormForget'
import hookForgetPassword from '../../hooks/userRegistration/hookForget'

// Definición del componente FormForget
const FormForget = () => {
  const { resetPassword, userEmail, setUserEmail } = hookForgetPassword()
  return (
    <View style={styles.parentEmail}>
      <View style={styles.childEmail}>
        <Text style={[styles.divLabel, styles.labelText]}>
          Digite su email para recuperar su contraseña
        </Text>
        <View style={[styles.Input, styles.sizeInput]}>
          <TextInput
            style={styles.label}
            placeholder="Escriba su email"
            keyboardType="email-address"
            placeholderTextColor="#828282"
            inputMode="email"
            data-name="userEmail"
            keyboardAppearance='dark'
            returnKeyType='next'
            value={userEmail}
            onChangeText={setUserEmail}
          />
        </View>
      </View>
      <View style={styles.divButton}>
        <Pressable
          style={
            styles.parentButton} onPress={() => resetPassword(userEmail)}>
          <Text
            style={
              [styles.button,
              styles.title,]
            }>
            Enviar
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

export default FormForget
