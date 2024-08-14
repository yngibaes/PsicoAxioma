import { useState } from 'react';
import { Alert } from 'react-native';
import axios from 'axios';
import { auth } from '../config/firebase';
import url from '../config/config';
import hookDataUser from './hookDataUser';
import { verifyBeforeUpdateEmail, updateEmail, EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';

//En este apartado de la app se podra encontrar el hook de olvido de contraseña, en el cual se podra encontrar la funcipin de resetear la contraseña, el correo del usuario y la funcion de setear el correo del usuario, ademas de los mensajes de alerta que se mostraran en caso de que el usuario no ingrese el correo, se envie el correo o ocurra un error al enviar el correo de restablecimiento.
const hookUpdateEmail = () => {
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

  const { userEmail } = hookDataUser();

  const updateEmailUser = async (newEmail: string, userPassword: string) => {
    if (!newEmail) {
      Alert.alert(alertMessages.confirmEmail.title, alertMessages.confirmEmail.message);
      return;
    }
    try {
      if (auth.currentUser) {
        console.log(auth.currentUser.email!);
        const credential = userEmail ? EmailAuthProvider.credential(userEmail, userPassword) : null; // Reemplaza 'your-password' con la contraseña del usuario
        if (credential) {
          
          await reauthenticateWithCredential(auth.currentUser, credential);
          await verifyBeforeUpdateEmail(auth.currentUser, newEmail);
          await updateEmail(auth.currentUser, newEmail);
          const response = await axios.post(`${url}/updateUser?userEmail=`, { userEmail, newEmail });
          if (response.status === 200) {
            Alert.alert(alertMessages.emailSent.title, alertMessages.emailSent.message);
            setNewEmail('');
          }
        }
      }
    } catch (error) {
      console.error('Error al verificar el número de teléfono:', error);
    }
  };

  return { updateEmailUser, newEmail, setNewEmail, userPassword, setUserPassword };
};

export default hookUpdateEmail;
