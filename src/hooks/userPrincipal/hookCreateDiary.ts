import { useState, useRef } from 'react';
import { Alert, TextInput } from 'react-native';
import axios from 'axios';
import UserNavigation from '../userNavigation';
import url from '../config/config';
import useAuth from '../useAuth';

const hookCreateDiary = () => {
    // Definición de los estados
    const [diaryContent, setdiaryContent] = useState('');
    const [diaryTitle, setdiaryTitle] = useState('');
    const { userEmail } = useAuth();

    // Limpiar el formulario
    const clearForm = () => {
        setdiaryContent('')
        setdiaryTitle('')
    }

    const diaryContentRef = useRef<TextInput>(null)
    const diaryContentNext = () => diaryContentRef.current?.focus()

    // Navegación
    const { goBack } = UserNavigation()

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
                        goBack();
                    },
                },
            ],
            { cancelable: false }
        );
    };

    // Enviar el formulario
    const handleSubmit = async () => {
        if (!diaryContent || !diaryTitle) {
            Alert.alert('Error', 'Por favor, complete todos los campos.');
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
                goBack();
                clearForm();
            }
        } catch (error) {
            Alert.alert('Error', 'No pudo ser enviado el diario. Intentelo nuevamente.');
            console.log(error.message);
        }
    }

    // Retornar los valores y funciones necesarios
    return {
        diaryContent,
        diaryTitle,
        setdiaryContent,
        setdiaryTitle,
        goBack,
        handleSubmit,
        diaryContentRef,
        diaryContentNext,
        handleExit,
    }
}

export default hookCreateDiary
