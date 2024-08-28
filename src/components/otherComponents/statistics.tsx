import React, { useEffect, useState } from "react";
import { Text, View, ActivityIndicator } from 'react-native';
import hookDataUser from "../../hooks/userPrincipal/hookDataUser";
import url from "../../hooks/config/config";
import { LineChart } from 'react-native-gifted-charts';

const Statistics = () => {
  const [emotions, setEmotion] = useState<{ score: number, diaryFK: number, name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const { userEmail } = hookDataUser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/resultDiary?userEmail=${userEmail}`);
        const result = await response.json();
        // Procesar los datos para extraer las emociones principales de cada diario
        const processedEmotions = result.map((diary: { resultDiary: string, diaryFK: number }) => {
          const emotions = JSON.parse(diary.resultDiary);
          const topEmotion = emotions[0]; // Tomar la primera emoción
          return { ...topEmotion, diaryFK: diary.diaryFK };
        });
        setEmotion(processedEmotions);
        console.log(processedEmotions);
        console.log(typeof processedEmotions);
        console.log(Array.isArray(processedEmotions));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [userEmail]);

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
{/*           <LineChart 
            data={validData}
            color={'#177AD5'}
            thickness={3}
            dataPointsColor={'red'}
          />  */}
          {emotions.map((emotion, index) => (
            <Text key={index} style={{ color: '#000', marginVertical: 20 }}>
              Diario ID: {emotion.diaryFK} - Emoción: {emotion.name} - Puntuación: {emotion.score}
            </Text>
          ))}
        </>
      )}
    </View>
  );
};

export default Statistics;