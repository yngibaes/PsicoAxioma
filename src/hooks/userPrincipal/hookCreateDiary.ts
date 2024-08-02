import { useState } from 'react';
import { Alert } from 'react-native';
import axios from 'axios';
import UserNavigation from '../userNavigation';
import url from '../config/config';

const hookCreateDiary = () => {
    // Definición de los estados
    const [diaryContent, setdiaryContent] = useState('')
    const [diaryTitle, setdiaryTitle] = useState('')

    // Limpiar el formulario
    const clearForm = () => {
        setdiaryContent('')
        setdiaryTitle('')
    }

    // Navegación
    const { goBack } = UserNavigation()

    // Enviar el formulario
    const handleSubmit = async () => {
        try {
            const response = await axios.post(`${url}/insertsDiary`, {
                diaryContent,
                diaryTitle,
            })
            if (response.status === 200) {
                Alert.alert(
                    'Enviado',
                    'Diario enviado.',
                )
                goBack()
                clearForm()
            }
        } catch (error) {
            Alert.alert('Error', 'No pudo ser enviado el diario. Intentelo nuevamente.')
            console.log(error.message)
        }
    }

    // Retornar los valores y funciones necesarios
    return {
        diaryContent,
        diaryTitle,
        setdiaryContent,
        setdiaryTitle,
        goBack,
        handleSubmit
    }
}

export default hookCreateDiary
