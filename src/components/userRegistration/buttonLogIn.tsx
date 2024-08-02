import * as React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './style/styleButtonLogIn';

// Definición de las props usando TypeScript
interface propsButtonLogin {
  LogIn: () => void
  SignUp: () => void
}

// Definición del componente ButtonLogin
const ButtonLogin: React.FC<propsButtonLogin> = ({ LogIn, SignUp }) => {
  return (
    <View style={styles.divButton}>
      <Pressable style={styles.parentButton} onPress={LogIn}>
        <Text style={[styles.button, styles.title]}>Iniciar sesión</Text>
      </Pressable>
      <View style={styles.divQuestion}>
        <Text style={[styles.sizeText, styles.text]}>
          ¿Aún no tienes cuenta?
        </Text>
        <Pressable style={styles.marginText} onPress={SignUp}>
          <Text style={[styles.optionsText, styles.text]}>Regístrate</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default ButtonLogin
