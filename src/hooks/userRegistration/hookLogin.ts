import { useState, useEffect, useRef } from 'react';
import { Alert, TextInput } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import UserNavigation from '../userNavigation';

// En este apartado de la app se podra encontrar el hook de login, en el cual se podra encontrar la funcion de loguear al usuario, el correo del usuario, la contraseña del usuario, los errores, si el formulario es valido, los intentos fallidos y las referencias.

const hookLogin = () => {
    // Estados
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [errors, setErrors] = useState<{ [key: string]: string }>({})
    const [isFormValid, setIsFormValid] = useState(false)
    const [failedAttempts, setFailedAttempts] = useState(0)

    // Referencias
    const userPasswordRef = useRef<TextInput>(null)
    const userPasswordNext = () => userPasswordRef.current?.focus()

    // Limpiar el formulario
    const clearForm = () => {
        setUserEmail('')
        setUserPassword('')
        setErrors({})
        setIsFormValid(false)
    }

    // Validar el formulario al cambiar
    useEffect(() => {
        validateForm()
    }, [userEmail, userPassword])

    // Validar el formulario
    const validateForm = () => {
        // Definición de los errores
        const errors: { [key: string]: string } = {}
        if (!userEmail) errors.userEmail = '*Email es requerido.'
        setErrors(errors)
        setIsFormValid(Object.keys(errors).length === 0)
    }

    // Navegación
    const { signUp, forgetPassword } = UserNavigation()

    // Enviar el formulario
    const handleSubmit = async (userEmail: string, userPassword: string) => {
        // Enviar los datos del formulario
        try {
                  //Que ponga primero si escribio un correo ono
            await signInWithEmailAndPassword(auth, userEmail, userPassword)
            console.log('Usuario logueado')
            clearForm()
            setFailedAttempts(0)
        } catch (error: any) {
            setFailedAttempts(prev => prev + 1) // Incrementar el contador de intentos fallidos
            if (failedAttempts + 1 >= 3) {
                Alert.alert(
                    'Error',
                    "Has alcanzado el número máximo de intentos. Redirigiendo a 'Olvidar Contraseña'.",
                )
                forgetPassword()
            } else {
                const errorMessage =
                    error.code === 'auth/invalid-credential'
                        ? 'Credenciales incorrectas. Por favor, inténtalo de nuevo.'
                        : error.message ||
                        'Ocurrió un error al enviar el formulario. Por favor, inténtalo de nuevo.'
                Alert.alert('Error', errorMessage)
            }
        }
    }

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
    }
}

export default hookLogin
