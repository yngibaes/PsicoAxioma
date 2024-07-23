import { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import axios from 'axios';

// Asume que ya has inicializado Firebase en otro lugar de tu aplicación

const useForgetPassword = () => {
    const [userEmail, setUserEmail] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const resetPassword = async (email: string) => {
		setLoading(true);
		setError(null);

		try {
			const auth = getAuth();
			await sendPasswordResetEmail(auth, email);
			// Opcional: Registrar el intento de restablecimiento en MySQL
			await axios.post('tu_endpoint_para_registrar_el_intento', { email });
			setLoading(false);
		} catch (error: any) {
			setError(error.message);
			setLoading(false);
		}
	};

	return { resetPassword, loading, error, userEmail, setUserEmail};
};

export default useForgetPassword;