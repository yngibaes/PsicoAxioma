import React from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './style/styleButtonLogIn';

// Definición de las props usando TypeScript
interface propsButtonLogin {
  LogIn: () => void;
  SignUp: () => void;
}
const loginText = 'Iniciar sesión';
const signunPrompText = '¿Aún no tienes cuenta?';
const signupText = 'Regístrate';

// Definición del componente ButtonLogin
const ButtonLogin: React.FC<propsButtonLogin> = ({LogIn, SignUp}) => {
  return (
    <View style={styles.divButton}>
      <Pressable style={styles.parentButton} onPress={LogIn}>
        <Text style={[styles.button, styles.title]}>{loginText}</Text>
      </Pressable>
      <View style={styles.divQuestion}>
        <Text style={[styles.sizeText, styles.text]}>{signunPrompText}</Text>
        <Pressable style={styles.marginText} onPress={SignUp}>
          <Text style={[styles.optionsText, styles.text]}>{signupText}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ButtonLogin;
