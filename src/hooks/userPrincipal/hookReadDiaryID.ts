import { useState, useEffect } from 'react';
import url from '../config/config';
import UserNavigation from '../userNavigation';

// Definición de la interfaz
interface DiaryRead {
  diaryContent: string
  diaryDate: string
  diaryID: string
  diaryTitle: string
}

const hookReadDiaryID = (diaryID: string) => {
  const [data, setData] = useState<DiaryRead[]>([]); // Cambiado para asegurar que se registren los datos correctos
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDiary = async () => {
      try {
        const response = await fetch(`${url}/readDiaryById?diaryID=${diaryID}`);
        if (!response.ok) {
          throw new Error('Salió mal la conexión');
        }
        const result: DiaryRead[] = await response.json();
        setData(result);
        console.log(result); // Cambiado para asegurar que se registren los datos correctos
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchDiary();
  }, [diaryID]);

  const { goBack } = UserNavigation()

  return { data, loading, error, goBack };
};

export default hookReadDiaryID;