import { useState } from 'react';
import { Alert } from 'react-native';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../config/firebase';

//En este apartado de la app se podra encontrar el hook de olvido de contraseña, en el cual se podra encontrar la funcipin de resetear la contraseña, el correo del usuario y la funcion de setear el correo del usuario, ademas de los mensajes de alerta que se mostraran en caso de que el usuario no ingrese el correo, se envie el correo o ocurra un error al enviar el correo de restablecimiento.
const hookForgetPassword = () => {
  const [userEmail, setUserEmail] = useState('');

  const alertMessages = {
    confirmEmail: {
      title: 'Campo obligatorio',
      message: 'Por favor, ingresa tu correo electrónico.'
    },
    emailSent: {
      title: 'Correo enviado',
      message: 'Se ha enviado un correo para restablecer tu contraseña'
    },
    error: {
      title: 'Error',
      message: 'Ocurrió un error al enviar el correo de restablecimiento. Inténtalo de nuevo.'
    }
  };

  const resetPassword = async (email: string) => {
    if (!email) {
      Alert.alert(alertMessages.confirmEmail.title, alertMessages.confirmEmail.message);
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert(alertMessages.emailSent.title, alertMessages.emailSent.message);
    } catch (error: any) {
      Alert.alert(alertMessages.error.title, alertMessages.error.message);
      console.log(error.message);
    }
  };

  return { resetPassword, userEmail, setUserEmail };
};

export default hookForgetPassword;
