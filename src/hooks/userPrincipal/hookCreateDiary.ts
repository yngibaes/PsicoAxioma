import { useState, useRef } from 'react';
import { Alert, TextInput } from 'react-native';
import axios from 'axios';
import UserNavigation from '../userNavigation';
import url from '../config/config';
import useAuth from '../useAuth';

// En este hook se podrá encontrar la función para crear un diario, en la cual se podrá encontrar el contenido del diario, el título del diario, el correo del usuario, la limpieza del formulario, la referencia del contenido del diario, la navegación, la salida, el envío del formulario y la referencia del contenido del diario.
const hookCreateDiary = () => {
    // Definición de los estados
    const [diaryContent, setdiaryContent] = useState('');
    const [diaryTitle, setdiaryTitle] = useState('');
    const { userEmail } = useAuth();
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    // Limpiar el formulario
    const clearForm = () => {
        setdiaryContent('')
        setdiaryTitle('')
    }

    const diaryContentRef = useRef<TextInput>(null)
    const diaryContentNext = () => diaryContentRef.current?.focus()

    // Navegación
    const { DiaryScreen } = UserNavigation()

    const handleExit = () => {
        Alert.alert(
            'Confirmación',
            '¿Estás seguro de que quieres salir?, Se perderá todo lo que has escrito.',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Salir',
                    onPress: () => {
                        setdiaryContent('');
                        setdiaryTitle('');
                        DiaryScreen();
                    },
                },
            ],
            { cancelable: false }
        );
    };

    // Enviar el formulario
    const handleSubmit = async () => {
        setIsButtonDisabled(true);
        if (!diaryContent || !diaryTitle) {
            Alert.alert('Error', 'Por favor, complete todos los campos.');
            setIsButtonDisabled(false);
            return;
        }
        try {
            const response = await axios.post(`${url}/insertsDiary`, {
                diaryContent,
                diaryTitle,
                userEmail
            });
            if (response.status === 200) {
                Alert.alert(
                    'Enviado',
                    'Diario enviado.',
                );
                DiaryScreen();
                clearForm();
            }
        } catch (error) {
            Alert.alert('Error', 'No pudo ser enviado el diario. Intentelo nuevamente.');
            console.log(error.message);
            setIsButtonDisabled(false); // Rehabilitar el botón si hay un error
        }
    }

    // Retornar los valores y funciones necesarios
    return {
        diaryContent,
        diaryTitle,
        setdiaryContent,
        setdiaryTitle,
        handleSubmit,
        diaryContentRef,
        diaryContentNext,
        handleExit,
        isButtonDisabled,
    }
}

export default hookCreateDiary
