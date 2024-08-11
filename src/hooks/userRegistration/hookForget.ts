import { useState } from 'react';
import { Alert } from 'react-native';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../config/firebase';

//En este apartado de la app se podra encontrar el hook de olvido de contraseña, en el cual se podra encontrar la funcipin de resetear la contraseña, el correo del usuario y la funcion de setear el correo del usuario

const hookForgetPassword = () => {
  const [userEmail, setUserEmail] = useState('')

  const resetPassword = async (email: string) => {
    try {
      //Que ponga primero si escribio un correo ono
      await sendPasswordResetEmail(auth, email)
      Alert.alert(
        'Correo enviado',
        'Se ha enviado un correo para restablecer tu contraseña',
      )
    } catch (error: any) {
      Alert.alert(
        'Error',
        'Ocurrió un error al enviar el correo de restablecimiento. Inténtalo de nuevo.',
      )
      console.log(error.message)
    }
  }

  return { resetPassword, userEmail, setUserEmail }
}

export default hookForgetPassword
