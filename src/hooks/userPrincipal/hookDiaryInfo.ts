import { useState, useEffect } from 'react';
import url from '../config/config';
import useAuth from '../useAuth';

interface DiaryEntry {
    diaryId: string;
    diaryTitle: string;
    diaryContent: string;
    diaryDate: string;
}

const hookDiaryInfo = () => {
    const [data, setData] = useState<DiaryEntry[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const { userEmail } = useAuth()

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(userEmail)
                const response = await fetch(`${url}/diary?userEmail=${userEmail}`);
                if (!response.ok) {
                    throw new Error('Salió mal la conexión');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (userEmail) { // Asegúrate de que el email esté disponible antes de hacer la consulta
            fetchData();
        }
    }, [userEmail]);

    const formatDate = (date: any) => {
        return new Date(date).toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return { data, loading, error, formatDate };
};

export default hookDiaryInfo;