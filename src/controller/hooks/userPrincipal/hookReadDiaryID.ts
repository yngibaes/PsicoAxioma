import { useState, useEffect } from "react";
import url from "../config/config";
import UserNavigation from "../userNavigation";

// Definición de la interfaz
interface DiaryRead {
  diaryContent: string;
  diaryDate: string;
  diaryID: string;
  diaryTitle: string;
}

// Hook para leer un diario por ID
const hookReadDiaryID = (diaryID: string) => {
  const [data, setData] = useState<DiaryRead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDiary = async () => {
      try {
        const response = await fetch(`${url}/readDiaryById?diaryID=${diaryID}`);
        if (!response.ok) {
          throw new Error("Salió mal la conexión");
        }
        const result: DiaryRead[] = await response.json();
        setData(result);
        console.log("Datos por ID:", result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchDiary();
  }, [diaryID]);

  const { DiaryScreen } = UserNavigation();

  return { data, loading, error, DiaryScreen };
};

export default hookReadDiaryID;
