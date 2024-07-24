import { useState, useEffect, useRef } from 'react';
import { Alert, TextInput } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import UserNavigation from '../userNavigation';

const hookLogin = () => {

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isFormValid, setIsFormValid] = useState(false);
    const [failedAttempts, setFailedAttempts] = useState(0);

    // Referencias
    const userPasswordRef = useRef<TextInput>(null);
    const userPasswordNext = () => userPasswordRef.current?.focus();

    const clearForm = () => {
        setUserEmail('');
        setUserPassword('');
        setErrors({});
        setIsFormValid(false);
    }

    useEffect(() => {
        validateForm();
    }, [userEmail, userPassword]);

    // Validar el formulario
    const validateForm = () => {
        // Definición de los errores
        const errors: { [key: string]: string } = {};
        if (!userEmail) errors.userEmail = '*Email es requerido.';
        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    }

    const { signUp, forgetPassword } = UserNavigation()

    const handleSubmit = async (userEmail: string, userPassword: string) => {
        // Enviar los datos del formulario
        try {
            await signInWithEmailAndPassword(auth, userEmail, userPassword);
            console.log('Usuario logueado');
            clearForm()
            setFailedAttempts(0)
        }
        catch (error: any) {
            setFailedAttempts(prev => prev + 1); // Incrementar el contador de intentos fallidos
            if (failedAttempts + 1 >= 3) {
                Alert.alert("Error", "Has alcanzado el número máximo de intentos. Redirigiendo a 'Olvidar Contraseña'.");
                forgetPassword()
            } else {
                const errorMessage = error.code === 'auth/invalid-credential'
                    ? "Credenciales incorrectas. Por favor, inténtalo de nuevo."
                    : error.message || "Ocurrió un error al enviar el formulario. Por favor, inténtalo de nuevo.";
                Alert.alert("Error", errorMessage);
            }
        }
    };
    return {
        userEmail,
        userPassword,
        errors,
        isFormValid,
        setUserEmail,
        setUserPassword,
        handleSubmit,
        userPasswordRef,
        userPasswordNext,
        signUp
    };
}

export default hookLogin;