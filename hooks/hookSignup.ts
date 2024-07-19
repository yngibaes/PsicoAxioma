import { useState, useEffect, useRef } from 'react';
import { Alert, TextInput } from 'react-native';
import axios from 'axios';
import UserNavigation from './userNavigation';
import url from './config';

const hookSignup = () => {

    // Definición de los estados
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isFormValid, setIsFormValid] = useState(false);

    // Referencias
    const userEmailRef = useRef<TextInput>(null);
    const userPhoneRef = useRef<TextInput>(null);
    const userPasswordRef = useRef<TextInput>(null);
    const confirmPasswordRef = useRef<TextInput>(null);

    const userEmailNext = () => userEmailRef.current?.focus();
    const userPhoneNext = () => userPhoneRef.current?.focus();
    const userPasswordNext = () => userPasswordRef.current?.focus();
    const confirmPasswordNext = () => confirmPasswordRef.current?.focus();

    // Limpiar el formulario
    const clearForm = () => {
        setUserName('');
        setUserEmail('');
        setUserPhone('');
        setUserPassword('');
        setConfirmPassword('');
        setErrors({});
        setIsFormValid(false);
    }

    // Validar el formulario
    useEffect(() => {
        validateForm();
    }, [userName, userEmail, userPhone, userPassword, confirmPassword]);

    // Definición de la interfaz ErrorObject
    type ErrorObject = {
        [key: string]: string;
    };

    // Validar el formulario
    const validateForm = () => {

        // Definición de los errores
        const errors: ErrorObject = {};

        if (!userName || !/^\S+\s+\S+/.test(userName)) {
            errors.userName = '*Por favor ingresa tu nombre completo.';
        }

        if (!userEmail) {
            errors.userEmail = '*Email es requerido.';
        } else if (!/\S+@\S+\.\S+/.test(userEmail)) {
            errors.userEmail = '*Email es inválido.';
        } else if (!/(@gmail\.com|@outlook\.com|@yahoo\.com)$/.test(userEmail)) {
            errors.userEmail = '*Debe ser de un dominio permitido';
        }

        if (!userPhone) {
            errors.userPhone = '*Télefono es requerido.';
        } else if (!/^3\d{9}$/.test(userPhone)) {
            errors.userPhone = '*Debe tener 10 dígitos.';
        }

        if (!userPassword) {
            errors.userPassword = '*Contraseña es requerida.';
        } if (!/[A-Z]/.test(userPassword) || !/[a-z]/.test(userPassword) || !/[!?$@&%]/.test(userPassword) || !/(\d.*\d)/.test(userPassword)) {
            errors.userPassword = '*Al menos una letra mayúscula y letra minúscula, un carácter especial (!?$@&%) y al menos dos números.';
        }

        if (confirmPassword !== userPassword) {
            errors.confirmPassword = '*Las contraseñas no coinciden.';
        }

        // Actualizar los errores 
        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    }

    // Navegación
    const { logIn } = UserNavigation()

    // Enviar el formulario
    const handleSubmit = async () => {
        // Enviar los datos del formulario
        try {
            if (isFormValid) {
                const response = await axios.post(`${url}/insertUser`, { userName, userEmail, userPhone, userPassword });
                console.log(response.status);
                if (response.status == 200) {
                    Alert.alert('Registro exitoso', 'Usuario registrado correctamente.')
                    logIn()
                    clearForm();
                }
            } else {
                console.log('Formulario inválido');
            }
        }
        catch (error) { 
            const errorMessage = (error.response?.data?.error || error.message) as string;
            if (errorMessage.includes("Duplicate entry")) {
                // Aquí puedes personalizar el mensaje basado en si el error es por el email o el teléfono
                let fieldError = "email o teléfono";
                console.log(errorMessage)
                if (errorMessage.includes('userEmail')) {
                    fieldError = "email";
                } else if (errorMessage.includes('userPhone')) {
                    fieldError = "télefono";
                }
                Alert.alert("Error", `La entrada para ${fieldError} ya existe.`);
            } else {
                // Maneja otros posibles errores
                Alert.alert("Error", "Ocurrió un error al enviar el formulario. Por favor, inténtalo de nuevo.");
                console.log(error.message);
            }
        }
    };

    // Retornar los valores y funciones necesarios
    return {
        userName,
        userEmail,
        userPhone,
        userPassword,
        confirmPassword,
        errors,
        isFormValid,
        setUserName,
        setUserEmail,
        setUserPhone,
        setUserPassword,
        setConfirmPassword,
        handleSubmit,
        userEmailRef,
        userEmailNext,
        userPhoneRef,
        userPhoneNext,
        userPasswordRef,
        userPasswordNext,
        confirmPasswordRef,
        confirmPasswordNext,
    };
};

export default hookSignup;