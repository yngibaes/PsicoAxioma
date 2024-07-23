import { useState, useEffect, useRef } from 'react';
import { Alert, TextInput } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

const hookLogin = () => {

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isFormValid, setIsFormValid] = useState(false);

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
    type ErrorObject = {
        [key: string]: string;
    };

    // Validar el formulario
    const validateForm = () => {

        // Definición de los errores
        const errors: ErrorObject = {};

        if (!userEmail) {
            errors.userEmail = '*Email es requerido.';
        }
        // Actualizar los errores 
        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    }

    const handleSubmit = async (userEmail:string, userPassword:string) => {
        // Enviar los datos del formulario
        try {
            console.log(userEmail)
            await signInWithEmailAndPassword(auth, userEmail, userPassword);
            console.log('Usuario logueado');
            clearForm()
        }
        catch (error) {
            Alert.alert("Error", "Ocurrió un error al enviar el formulario. Por favor, inténtalo de nuevo.");
            console.log(error.message);
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
        userPasswordNext
    };
}

export default hookLogin;