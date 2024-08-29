import React, { useEffect, useState } from "react";
import { Text, View, ActivityIndicator } from 'react-native';
import hookDataUser from "../../hooks/userPrincipal/hookDataUser";
import url from "../../hooks/config/config";
import { LineChart } from 'react-native-gifted-charts';

// Estrucutra de los datos para la gráfica de línea
type lineDataItem = {
  value: number;
  dataPointText: number | string; // Change the type to allow both number and string
  labelComponent: () => JSX.Element;
};

const Statistics = () => {


  const [emotions, setEmotion] = useState<{ score: number, diaryFK: number, name: string, diaryDate: Date }[]>([]);
  const [loading, setLoading] = useState(true);
  const { userEmail } = hookDataUser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/resultDiary?userEmail=${userEmail}`);
        const result = await response.json();
        // Procesar los datos para extraer las emociones principales de cada diario
        const processedEmotions = result.map((diary: { resultDiary: string, diaryFK: number, diaryDate: Date }) => {
          const emotions = JSON.parse(diary.resultDiary);
          const topEmotion = emotions[0]; // Tomar la primera emoción
          return { ...topEmotion, diaryFK: diary.diaryFK, diaryDate: new Date(diary.diaryDate) };
        });

        // Ordenar las emociones por fecha de la más antigua a la más reciente
        processedEmotions.sort((a: any, b: any) => a.diaryDate.getTime() - b.diaryDate.getTime());
        setEmotion(processedEmotions);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [userEmail]);

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
    });
  };

  const customLabel = (val: any) => {
    return (
      <Text style>{val}</Text>
    );
  };

  // Crear la estructura de datos para la gráfica de línea
  const lineData: lineDataItem[] = emotions.map(item => ({
    value: item.score, dataPointText: item.score, labelComponent: () => customLabel(`${item.name} - ${formatDate(item.diaryDate)}`),
  }));
  //console.log(lineData);

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color="#213751" />
      ) : (
        <>
          <Text>Emociones detectadas del diario semanalmente:</Text>
          {emotions.length > 0 ? (
            <LineChart
              data={lineData}
              initialSpacing={20}
              hideRules={true}
              spacing={45}
              color={'#213751'}
              thickness={3}
              dataPointsColor={'purple'}
              isAnimated={true}
              curved={true}
              textColor={'#000'}
              textFontSize={10}
              textColor1="red"
              textShiftY={-6}
              yAxisTextStyle={{ color: 'black' }}
              maxValue={100}
              startFillColor={'rgb(84,219,234)'}
              endFillColor={'rgb(84,219,234)'}
              startOpacity={0.4}
              endOpacity={0.4}
              backgroundColor="#FFF"
              rulesColor="gray"
              rulesType="solid"
            />
          ) : (
            <Text>No hay datos disponibles para mostrar la gráfica.</Text>
          )}
          {emotions.map((emotion, index) => (
            <Text key={index}>
              {emotion.diaryFK} Emoción: {emotion.name} - Puntuación: {emotion.score}, Fecha: {emotion.diaryDate.toString()}
            </Text>
          ))}
        </>
      )}
    </View>
  );
};

export default Statistics;