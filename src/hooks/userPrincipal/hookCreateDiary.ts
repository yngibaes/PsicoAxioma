import { useState, useRef } from 'react';
import { Alert, DevSettings, TextInput } from 'react-native';
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
        setdiaryContent('');
        setdiaryTitle('');
    };

    const diaryContentRef = useRef<TextInput>(null);
    const diaryContentNext = () => diaryContentRef.current?.focus();

    // Navegación
    const { DiaryScreen } = UserNavigation();

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
                console.log('Diario enviado:', response.data);
                const diaryID = response.data.diaryID; // Capturar el ID del diario desde la respuesta
                console.log('Diario enviado:', diaryID);
                setupWebSocket(diaryID);
                Alert.alert(
                    'Enviado',
                    'Diario enviado.',
                );
                DiaryScreen();
                clearForm();
                DevSettings.reload();
            }
        } catch (error) {
            Alert.alert('Error', 'No pudo ser enviado el diario. Intentelo nuevamente.');
            console.log(error.message);
            setIsButtonDisabled(false); // Rehabilitar el botón si hay un error
        }
    };

    const setupWebSocket = (diaryID: string) => {
        const apiKey = 'ihQLg5EVtVEJEK1SGjqG40EAknf8mwM2qEreZNBxEd954lbU';
        const humeai = `wss://api.hume.ai/v0/stream/models?api_key=${apiKey}`;
        const ws = new WebSocket(humeai);

        ws.onopen = () => {
            console.log('conectado');
            const postData = {
                data: JSON.stringify(diaryContent),
                models: { language: { granularity: 'passage' } },
                raw_text: true,
            };
            ws.send(JSON.stringify(postData));
        };

        ws.onmessage = async (event: any) => {
            const data = JSON.parse(event.data);
            const detectedEmotions = data.language.predictions[0].emotions;
            detectedEmotions.sort((a: any, b: any) => b.score - a.score);
            const top = detectedEmotions.slice(0, 5);
            console.log('Emociones mas fuertes detectadas:', top);
            const ResultDiary = JSON.stringify(top);
            const response = await axios.post(`${url}/insertsResultsDiary`, {
                ResultDiary, diaryID
            });
            if (response.status === 200) {
                console.log('Emociones enviadas.');
            }
            ws.close();
        };

        ws.onerror = (error: Event) => {
            console.error('WebSocket error:', error);
        };

        ws.onclose = () => {
            console.log('WebSocket connection closed.');
        };

        return () => {
            ws.close();
        };
    };

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
    };
};

export default hookCreateDiary;
