import { useEffect, useState } from "react";
import url from '../config/config';
import hookDataUser from "../../../controller/hooks/userPrincipal/hookDataUser";

const hooksCalendar = () => {
    const [loading, setLoading] = useState(true);
    const { userEmail } = hookDataUser();
    const [resultDiary, setResultDiary] = useState<{ name: string, date: string }[]>([]);
    const [resultScanner, setResultScanner] = useState<{ name: string, date: string }[]>([]);

    useEffect(() => {
        const fetchDataDiary = async () => {
            try {
                const response = await fetch(
                    `${url}/calendaryDiary?userEmail=${userEmail}`,
                );
                const result = await response.json();
                console.log(result);
                if (Array.isArray(result)) {
                    const dates = result.map((entry: { diaryDate: string, resultDiary: string }) => {
                        const date = new Date(entry.diaryDate);
                        const formattedDate = date.toISOString().split('T')[0]; // Formatea la fecha a 'YYYY-MM-DD'


                        // Extraer el primer elemento de resultDiary
                        const resultDiaryArray = JSON.parse(entry.resultDiary);
                        const firstResultDiary = resultDiaryArray[0];

                        return {
                            name: `Diario Emocional`, // Nombre del marcador
                            nameEmotion: firstResultDiary.name, // Nombre de la emoción
                            date: `${formattedDate}`, // Combina la fecha y la hora
                            score: firstResultDiary.score, // Puntuación de la emoción
                        };
                    });
                    setResultDiary(dates);
                } else {
                    console.error("Unexpected response format for diary data:", result);
                }
            } catch (error) {
                console.log(error);
            }
        };

        const fetchDataScanner = async () => {
            try {
                const response = await fetch(
                    `${url}/calendaryScanner?userEmail=${userEmail}`,
                );
                const result = await response.json();
                console.log(result);
                if (Array.isArray(result)) {
                    const dates = result.map((entry: { resultScannerDate: string, resultScanner: string }) => {
                        const date = new Date(entry.resultScannerDate);
                        const formattedDate = date.toISOString().split('T')[0]; // Formatea la fecha a 'YYYY-MM-DD'

                        // Extraer el primer elemento de resultDiary
                        const resultDiaryArray = JSON.parse(entry.resultScanner);
                        const firstResultDiary = resultDiaryArray[0];

                        return {
                            name: `Escáner Emocional`, // Nombre del marcador
                            nameEmotion: firstResultDiary.name,
                            date: `${formattedDate}`, // Combina la fecha y la hora
                            score: firstResultDiary.score,
                        };
                    });
                    setResultScanner(dates);
                } else {
                    console.error("Unexpected response format for scanner data:", result);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchDataDiary();
        fetchDataScanner();
        setLoading(false);
    }, [userEmail]);

    // Define los tipos de marcadores
    const diarioMarker = { key: 'diario', color: '#B6CCEC', selectedDotColor: '#B6CCEC' };
    const scannerMarker = { key: 'scanner', color: '#233333', selectedDotColor: '#7B9694' };

    const combinedResults = [...resultDiary, ...resultScanner]; // Combina los resultados de diario y scanner

    // Define el tipo de acc y usa las fechas formateadas
    const markedDates = combinedResults.reduce((acc: { [key: string]: { dots: { key: string, color: string, selectedDotColor: string }[] } }, { date, name }) => {
        if (!acc[date]) {
            acc[date] = { dots: [] };
        }
        const dotKeys = new Set(acc[date].dots.map(dot => dot.key));
        if (name === 'Diario Emocional' && !dotKeys.has(diarioMarker.key)) {
            acc[date].dots.push(diarioMarker);
        } else if (name === 'Escáner Emocional' && !dotKeys.has(scannerMarker.key)) {
            acc[date].dots.push(scannerMarker);
        }
        return acc;
    }, {});

    //console.log(combinedResults);

    //Calendario Agenda

    const markedDatesCalendar = combinedResults.reduce((acc: { [key: string]: { dots: { key: string, color: string, selectedDotColor: string }[] } }, { date, name }) => {
        if (!acc[date]) {
            acc[date] = { dots: [] };
        }
        const dotKeys = new Set(acc[date].dots.map(dot => dot.key));
        if (name === 'Diario Emocional' && !dotKeys.has(diarioMarker.key)) {
            acc[date].dots.push(diarioMarker);
        } else if (name === 'Escáner Emocional' && !dotKeys.has(scannerMarker.key)) {
            acc[date].dots.push(scannerMarker);
        }
        return acc;
    }, {});

    return { resultDiary, markedDates, markedDatesCalendar, combinedResults, loading };
};

export default hooksCalendar;