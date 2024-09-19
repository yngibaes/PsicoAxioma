import { useEffect, useState } from "react";
import url from '../config/config';
import hookDataUser from "../../../controller/hooks/userPrincipal/hookDataUser";

type DiaryEntry = {
  diaryDate: string;
  resultDiary: string;
};

type ScannerEntry = {
  resultScannerDate: string;
  resultScanner: string;
};

type EmotionEntry = {
  name: string;
  nameEmotion: string;
  date: string;
  score: number;
};

const hooksCalendar = () => {
  const [loading, setLoading] = useState(true);
  const { userEmail } = hookDataUser();
  const [resultDiary, setResultDiary] = useState<EmotionEntry[]>([]);
  const [resultScanner, setResultScanner] = useState<EmotionEntry[]>([]);

  const fetchDataDiary = async () => {
    try {
      const response = await fetch(`${url}/calendaryDiary?userEmail=${userEmail}`);
      const result = await response.json();
      if (Array.isArray(result)) {
        const dates = result.map((entry: DiaryEntry) => {
          const date = new Date(entry.diaryDate);
          const formattedDate = date.toISOString().split('T')[0]; // Formatea la fecha a 'YYYY-MM-DD'
          const resultDiaryArray = JSON.parse(entry.resultDiary);
          const firstResultDiary = resultDiaryArray[0];
          return {
            name: `Diario Emocional`,
            nameEmotion: firstResultDiary.name,
            date: `${formattedDate}`,
            score: firstResultDiary.score,
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
      const response = await fetch(`${url}/calendaryScanner?userEmail=${userEmail}`);
      const result = await response.json();
      if (Array.isArray(result)) {
        const dates = result.map((entry: ScannerEntry) => {
          const date = new Date(entry.resultScannerDate);
          const formattedDate = date.toISOString().split('T')[0]; // Formatea la fecha a 'YYYY-MM-DD'
          const resultScannerArray = JSON.parse(entry.resultScanner);
          const firstResultScanner = resultScannerArray[0];
          return {
            name: `Escáner Emocional`,
            nameEmotion: firstResultScanner.name,
            date: `${formattedDate}`,
            score: firstResultScanner.score,
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

  useEffect(() => {
    const fetchData = async () => {
      await fetchDataDiary();
      await fetchDataScanner();
      setLoading(false);
    };
    fetchData();
  }, [userEmail]);

  const diarioMarker = { key: 'diario', color: '#B6CCEC', selectedDotColor: '#B6CCEC' };
  const scannerMarker = { key: 'scanner', color: '#233333', selectedDotColor: '#7B9694' };

  const combinedResults = [...resultDiary, ...resultScanner];

  const createMarkedDates = (results: EmotionEntry[]) => {
    return results.reduce((acc: { [key: string]: { dots: { key: string, color: string, selectedDotColor: string }[] } }, { date, name }) => {
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
  };

  const markedDates = createMarkedDates(combinedResults);
  const markedDatesCalendar = createMarkedDates(combinedResults);

  return { resultDiary, markedDates, markedDatesCalendar, combinedResults, loading };
};

export default hooksCalendar;