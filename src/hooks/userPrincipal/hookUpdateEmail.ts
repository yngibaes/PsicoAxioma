import { useState } from 'react';
import { Alert } from 'react-native';
import axios from 'axios';
import { auth } from '../config/firebase';
import url from '../config/config';
import { verifyBeforeUpdateEmail, updateEmail, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';

//En este apartado de la app se podra encontrar el hook de olvido de contraseña, en el cual se podra encontrar la funcipin de resetear la contraseña, el correo del usuario y la funcion de setear el correo del usuario, ademas de los mensajes de alerta que se mostraran en caso de que el usuario no ingrese el correo, se envie el correo o ocurra un error al enviar el correo de restablecimiento.
const hookUpdateEmail = () => {
  const [userEmail, setUserEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const alertMessages = {
    confirmEmail: {
      title: 'Campo obligatorio',
      message: 'Por favor, ingresa tu correo electrónico.'
    },
    emailSent: {
      title: 'Actualización exitosa',
      message: 'Se ha actualizado el correo.'
    },
    error: {
      title: 'Error',
      message: 'Ocurrió un error al enviar el correo de restablecimiento. Inténtalo de nuevo.'
    }
  };

  const user = auth.currentUser;


  const updateEmailUser = async (newEmail: string, userEmail: string, userPassword: string) => {

    if (!newEmail || !userEmail || !userPassword) {
      Alert.alert(alertMessages.confirmEmail.title, alertMessages.confirmEmail.message);
      return;
    }
    try {
      if (user) {
        const credential = EmailAuthProvider.credential(userEmail, userPassword);
        if (credential) {
          try {
            await reauthenticateWithCredential(user, credential);
          } catch (error) {
            if (error.code === 'auth/user-token-expired') {
              // Reautenticar al usuario si el token ha expirado
              await reauthenticateWithCredential(user, credential);
            } else {
              throw error;
            }
          }
          await verifyBeforeUpdateEmail(user, newEmail);
          Alert.alert('Revisa tu correo', 'Verifica tu correo.');

          // Verificar periódicamente si el correo ha sido verificado
          const intervalId = setInterval(async () => {
            await user.reload();
            if (user.emailVerified) {
              clearInterval(intervalId);
              try {
                await updateEmail(user, newEmail);
                const response = await axios.post(`${url}/updateUser?userEmail=`, { userEmail, newEmail });
                if (response.status === 200) {
                  Alert.alert(alertMessages.emailSent.title, alertMessages.emailSent.message);
                  setNewEmail('');
                }
              } catch (error) {
                console.error('Error al actualizar el email:', error);
              }
            }
          }, 5000); // Verificar cada 5 segundos
        }
      }
    } catch (error) {
      console.error('Error al verificar el número de teléfono:', error);
    }
  };

  return { updateEmailUser, newEmail, setNewEmail, userPassword, setUserPassword, userEmail, setUserEmail };
};

export default hookUpdateEmail;
