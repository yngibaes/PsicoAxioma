import { useEffect, useState } from "react";
import hookDataUser from "../../../controller/hooks/userPrincipal/hookDataUser";
import url from "../../../controller/hooks/config/config";

type EmotionDiary = {
  score: number;
  diaryFK: number;
  name: string;
  diaryDate: Date;
};

type EmotionScanner = {
  score: number;
  scannerFK: number;
  name: string;
  scannerDate: Date;
};

const useStatisticsData = () => {
  const [emotionsDiary, setEmotionDiary] = useState<EmotionDiary[]>([]);
  const [emotionsScanner, setEmotionScanner] = useState<EmotionScanner[]>([]);
  const [loading, setLoading] = useState(true);
  const { userEmail } = hookDataUser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Primera consulta
        const responseDiary = await fetch(
          `${url}/resultDiary?userEmail=${userEmail}`,
        );
        if (!responseDiary.ok) {
          throw new Error(`Error fetching diary data: ${responseDiary.statusText}`);
        }
        const resultDiary = await responseDiary.json();
        console.log("Diary data fetched:", resultDiary);

        // Segunda consulta
        const responseScanner = await fetch(
          `${url}/resultScanner?userEmail=${userEmail}`,
        );
        if (!responseScanner.ok) {
          throw new Error(`Error fetching scanner data: ${responseScanner.statusText}`);
        }
        const resultScanner = await responseScanner.json();
        console.log("Scanner data fetched:", resultScanner);

        // Procesar los datos de resultDiary para extraer las emociones principales de cada diario
        const processedDiaryEmotions = resultDiary.map(
          (diary: {
            resultDiary: string;
            diaryFK: number;
            diaryDate: Date;
          }) => {
            const emotions = JSON.parse(diary.resultDiary);
            const topEmotion = emotions[0]; // Tomar la primera emoción
            return {
              ...topEmotion,
              diaryFK: diary.diaryFK,
              diaryDate: new Date(diary.diaryDate),
            };
          },
        );

        // Verificar si resultScanner es un array antes de mapear
        const processedScannerResults = Array.isArray(resultScanner)
          ? resultScanner.map(
              (scanner: {
                resultScanner: string;
                scannerFK: number;
                scannerDate: Date;
              }) => {
                const results = JSON.parse(scanner.resultScanner);
                const topResult = results[0]; // Tomar el primer resultado
                return {
                  ...topResult,
                  scannerFK: scanner.scannerFK,
                  scannerDate: new Date(scanner.scannerDate),
                };
              },
            )
          : [];

        // Ordenar las emociones por fecha de la más antigua a la más reciente
        processedDiaryEmotions.sort(
          (a: any, b: any) => a.diaryDate.getTime() - b.diaryDate.getTime(),
        );

        // Ordenar los resultados del escáner por fecha de la más antigua a la más reciente
        processedScannerResults.sort(
          (a: any, b: any) => a.scannerDate.getTime() - b.scannerDate.getTime(),
        );

        setEmotionDiary(processedDiaryEmotions);
        setEmotionScanner(processedScannerResults);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [userEmail]);

  return { emotionsDiary, emotionsScanner, loading };
};

export default useStatisticsData;