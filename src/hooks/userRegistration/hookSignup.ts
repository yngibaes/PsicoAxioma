import { useState, useEffect, useRef } from 'react';
import { Alert, TextInput } from 'react-native';
import axios from 'axios';
import { createUserWithEmailAndPassword, sendEmailVerification, User, updateProfile } from 'firebase/auth';
import UserNavigation from '../userNavigation';
import url from '../config/config';
import { auth } from '../config/firebase';

// En este apartado de la app se podra encontrar el hook de registro, en el cual se podra encontrar la funcion de registro, el nombre del usuario, el correo del usuario, el télefono del usuario, la contraseña del usuario, la confirmación de la contraseña, los errores, si el formulario es valido, las referencias y las funciones de navegación.

const hookSignup = () => {
    // Definición de los estados
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPhone, setUserPhone] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState<{ [key: string]: string }>({})
    const [isFormValid, setIsFormValid] = useState(false)

    // Referencias
    const userEmailRef = useRef<TextInput>(null)
    const userPhoneRef = useRef<TextInput>(null)
    const userPasswordRef = useRef<TextInput>(null)
    const confirmPasswordRef = useRef<TextInput>(null)

    // Funciones para navegar entre los campos del formulario
    const userEmailNext = () => userEmailRef.current?.focus()
    const userPhoneNext = () => userPhoneRef.current?.focus()
    const userPasswordNext = () => userPasswordRef.current?.focus()
    const confirmPasswordNext = () => confirmPasswordRef.current?.focus()

    // Limpiar el formulario
    const clearForm = () => {
        setUserName('')
        setUserEmail('')
        setUserPhone('')
        setUserPassword('')
        setConfirmPassword('')
        setErrors({})
        setIsFormValid(false)
    }

    // Validar el formulario
    useEffect(() => {
        validateForm()
    }, [userName, userEmail, userPhone, userPassword, confirmPassword])

    // Definición de los mensajes de error
    const ERROR_MESSAGES = {
        userName: '*Por favor ingresa tu nombre completo.',
        userEmailRequired: '*Email es requerido.',
        userEmailInvalid: '*Email es inválido.',
        userEmailDomain: '*Debe ser de un dominio permitido',
        userPhoneRequired: '*Télefono es requerido.',
        userPhoneInvalid: '*Debe tener 10 dígitos.',
        userPasswordRequired: '*Contraseña es requerida.',
        confirmPassword: '*Las contraseñas no coinciden.',
    }

    // Definición de las expresiones regulares
    const REGEX = {
        userName: /^\S+\s+\S+/,
        userEmail: /\S+@\S+\.\S+/,
        userEmailDomain: /(@gmail\.com|@outlook\.com|@yahoo\.com)$/,
        userPhone: /^3\d{9}$/,
    }

    // Validar el formulario
    const validateForm = () => {
        const errors: { [key: string]: string } = {}

        if (!userName || !REGEX.userName.test(userName)) {
            errors.userName = ERROR_MESSAGES.userName
        }

        if (!userEmail) {
            errors.userEmail = ERROR_MESSAGES.userEmailRequired
        } else if (!REGEX.userEmail.test(userEmail)) {
            errors.userEmail = ERROR_MESSAGES.userEmailInvalid
        } else if (!REGEX.userEmailDomain.test(userEmail)) {
            errors.userEmail = ERROR_MESSAGES.userEmailDomain
        }

        if (!userPhone) {
            errors.userPhone = ERROR_MESSAGES.userPhoneRequired
        } else if (!REGEX.userPhone.test(userPhone)) {
            errors.userPhone = ERROR_MESSAGES.userPhoneInvalid
        }

        if (!userPassword) {
            errors.userPassword = ERROR_MESSAGES.userPasswordRequired
        }

        if (confirmPassword !== userPassword) {
            errors.confirmPassword = ERROR_MESSAGES.confirmPassword
        }

        setErrors(errors)
        setIsFormValid(Object.keys(errors).length === 0)
    }

    // Navegación
    const { goBack } = UserNavigation()

    // Verificar télefono
    const verifyPhoneNumber = async (userPhone: string): Promise<boolean> => {
        try {
            const response = await axios.post(`${url}/verifyPhone`, { userPhone })
            if (
                response.data.message !==
                'El numero de télefono no existe en la base de datos.'
            ) {
                // El número de teléfono ya está registrado
                return false
            }
            // El número de teléfono no está registrado
            return true
        } catch (error) {
            // Manejar otros posibles errores de la petición
            console.error('Error al verificar el número de teléfono:', error)
            throw new Error('Error al verificar el número de teléfono')
        }
    }

    // Registrar usuario en firebase
    const registerUserInFirebase = async (
        userEmail: string,
        userPassword: string,
    ) => {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            userEmail,
            userPassword,
        )
        return userCredential.user
    }

    // Enviar verificación y registrar usuario
    const sendVerificationAndRegisterUser = async (user: User) => {
        await sendEmailVerification(user)
        const response = await axios.post(`${url}/insertUser`, {
            userName,
            userEmail,
            userPhone,
        })
        if (response.status === 200) {
            if (auth.currentUser) {
                const userPhoto = 'https://firebasestorage.googleapis.com/v0/b/psicoaxioma.appspot.com/o/user.png?alt=media&token=bf2e35a6-ff00-490b-9750-0242667ab50e';
                updateProfile(auth.currentUser, {
                    displayName: userName,
                    photoURL: userPhoto,
                }).then(() => {
                    console.log('Usuario con nombre')
                }).catch((error) => {
                    console.log(error)
                });
            }
            Alert.alert(
                'Registro exitoso',
                'Usuario registrado correctamente. Por favor, verifica tu correo electrónico antes de iniciar sesión.',
            )
            goBack()
            clearForm()
        }
    }

    // Enviar el formulario
    const handleSubmit = async () => {
        try {
            if (!isFormValid) {
                console.error('Error al momento de enviar a la base de datos')
                return
            }
            // Verificar si el número de teléfono ya está registrado
            const phoneValid = await verifyPhoneNumber(userPhone)
            if (phoneValid) {
                Alert.alert(
                    'Error',
                    'El número de teléfono ya está registrado. Por favor, utiliza otro número.',
                )
                return
            }

            // Registrar usuario en firebase
            const user = await registerUserInFirebase(userEmail, userPassword)
            await sendVerificationAndRegisterUser(user)
        } catch (error) {
            const errorMessage =
                error.code === 'auth/email-already-in-use'
                    ? 'El correo electrónico ya está registrado. Por favor, utiliza otro correo.'
                    : 'Ocurrió un error al enviar el formulario. Por favor, inténtalo de nuevo.'
            Alert.alert('Error', errorMessage)
            console.log(error.message)
        }
    }

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
    }
}

export default hookSignup
