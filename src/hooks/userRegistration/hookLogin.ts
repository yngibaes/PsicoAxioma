import { useState, useEffect, useRef } from 'react';
import { Alert, TextInput } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import UserNavigation from '../userNavigation';

// En este apartado de la app se podra encontrar el hook de login, en el cual se podra encontrar la funcion de loguear al usuario, el correo del usuario, la contraseña del usuario, los errores, si el formulario es valido, los intentos fallidos y las referencias. Ademas de las alertas que se mostraran en caso de que el usuario no ingrese el correo, la contraseña, se loguee, haya un error, haya alcanzado el numero maximo de intentos, las credenciales sean incorrectas, haya un error al enviar el formulario o haya campos vacios.

const alertMessages = {
    emailRequired: '*Email es requerido.',
    passwordRequired: '*Contraseña es requerida.',
    userLoggedIn: 'Usuario logueado',
    error: 'Error',
    maxAttemptsReached: "Has alcanzado el número máximo de intentos. Redirigiendo a 'Olvidar Contraseña'.",
    invalidCredentials: 'Credenciales incorrectas. Por favor, inténtalo de nuevo.',
    formError: 'Ocurrió un error al enviar el formulario. Por favor, inténtalo de nuevo.',
    emptyInputs: 'Por favor, llena todos los campos.'
};

const erorrCodes = {
    invalidCredential: 'auth/invalid-credential'
};

const hookLogin = () => {
    // Estados
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isFormValid, setIsFormValid] = useState(false);
    const [failedAttempts, setFailedAttempts] = useState(0);

    // Referencias
    const userPasswordRef = useRef<TextInput>(null);
    const userPasswordNext = () => userPasswordRef.current?.focus();

    // Limpiar el formulario
    const clearForm = () => {
        setUserEmail('');
        setUserPassword('');
        setErrors({});
        setIsFormValid(false);
    };

    // Validar el formulario al cambiar
    useEffect(() => {
        validateForm();
    }, [userEmail, userPassword]);

    // Reiniciar los intentos fallidos al montar el componente
    useEffect(() => {
        setFailedAttempts(0);
    }, []);

    // Validar el formulario
    const validateForm = () => {
        // Definición de los errores
        const errors: { [key: string]: string } = {};
        if (!userEmail) errors.userEmail = alertMessages.emailRequired;
        if (!userPassword) errors.userPassword = alertMessages.passwordRequired;
        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    };

    // Navegación
    const { signUp, forgetPassword } = UserNavigation();

    // Enviar el formulario
    const handleSubmit = async (userEmail: string, userPassword: string) => {
        // Validar el formulario
        if (!userEmail || !userPassword) {
            Alert.alert(alertMessages.error, alertMessages.emptyInputs);
            return;
        }
        // Enviar los datos del formulario
        try {
            await signInWithEmailAndPassword(auth, userEmail, userPassword);
            console.log(alertMessages.userLoggedIn);
            clearForm();
            setFailedAttempts(0);
        } catch (error: any) {
            setFailedAttempts(prev => prev + 1); // Incrementar el contador de intentos fallidos
            if (failedAttempts + 1 >= 3) {
                Alert.alert((alertMessages.error, alertMessages.maxAttemptsReached));
                forgetPassword();
            } else {
                const errorMessage =
                    error.code === erorrCodes.invalidCredential
                        ? alertMessages.invalidCredentials
                        : error.message ||
                        alertMessages.formError;
                Alert.alert(alertMessages.error, errorMessage);
            }
        }
    };

    // Retornar los valores y funciones necesarios
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
        signUp,
    };
};

export default hookLogin;
