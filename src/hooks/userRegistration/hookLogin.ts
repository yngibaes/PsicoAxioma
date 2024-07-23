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
        } else if (!/\S+@\S+\.\S+/.test(userEmail)) {
            errors.userEmail = '*Email es inválido.';
        } else if (!/(@gmail\.com|@outlook\.com|@yahoo\.com)$/.test(userEmail)) {
            errors.userEmail = '*Debe ser de un dominio permitido';
        }
        // Actualizar los errores 
        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    }

    const handleSubmit = async () => {
        // Enviar los datos del formulario
        try {
            if (userEmail && userPassword) {
                await signInWithEmailAndPassword(auth, userEmail, userPassword);
                console.log('Usuario logueado');
            } else {
                console.error('Error al loguearse')
            }
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