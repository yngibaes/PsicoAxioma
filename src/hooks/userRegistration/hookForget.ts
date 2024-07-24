import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../config/firebase';
import { Alert } from 'react-native';

const hookForgetPassword = () => {
	const [userEmail, setUserEmail] = useState('');

	const resetPassword = async (email: string) => {
		try {
			await sendPasswordResetEmail(auth, email);
			Alert.alert('Correo enviado', 'Se ha enviado un correo para restablecer tu contraseña');
		} catch (error: any) {
			Alert.alert('Error', 'Ocurrió un error al enviar el correo de restablecimiento. Inténtalo de nuevo.');
			console.log(error.message);
		}
	};

	return { resetPassword, userEmail, setUserEmail };
};

export default hookForgetPassword;