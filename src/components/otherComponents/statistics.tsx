import React, {useEffect, useState} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import hookDataUser from '../../hooks/userPrincipal/hookDataUser';
import url from '../../hooks/config/config';
import {PieChart} from 'react-native-gifted-charts';
import styles from './style/stylestatics';

// Estrucutra de los datos para la gráfica de línea
type lineDataItem = {
  value: number;
  text: string | undefined; // Update the type to be string | undefined
};

const Statistics = () => {
  const [emotions, setEmotion] = useState<
    {score: number; diaryFK: number; name: string; diaryDate: Date}[]
  >([]);
  const [loading, setLoading] = useState(true);
  const {userEmail} = hookDataUser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${url}/resultDiary?userEmail=${userEmail}`,
        );
        const result = await response.json();
        //console.log(result);
        // Procesar los datos para extraer las emociones principales de cada diario
        const processedEmotions = result.map(
          (diary: {resultDiary: string; diaryFK: number; diaryDate: Date}) => {
            const emotions = JSON.parse(diary.resultDiary);
            const topEmotion = emotions[0]; // Tomar la primera emoción
            return {
              ...topEmotion,
              diaryFK: diary.diaryFK,
              diaryDate: new Date(diary.diaryDate),
            };
          },
        );

        // Ordenar las emociones por fecha de la más antigua a la más reciente
        processedEmotions.sort(
          (a: any, b: any) => a.diaryDate.getTime() - b.diaryDate.getTime(),
        );
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

  // Crear la estructura de datos para la gráfica de línea
  const lineData: lineDataItem[] = emotions.map(item => ({
    value: item.score,
    text: `${item.score}`,
    pressText: `${item.name}`
  }));
  //console.log(lineData);

  const renderLegend = (text: any, color: any) => {
    return (
      <View style={{flexDirection: 'row', marginBottom: 12}}>
        <View
          style={{
            height: 18,
            width: 18,
            marginRight: 10,
            borderRadius: 4,
            backgroundColor: color || 'white',
          }}
        />
        <Text style={{color: 'white', fontSize: 16}}>{text || ''}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#213751" />
      ) : (
        <>
          <View style={styles.child}>
            <Text style={styles.textTitle}>
              Emociones detectadas del diario semanalmente:
            </Text>
            {emotions.length > 0 ? (
              <>
                <PieChart
                  data={lineData}
                  textSize={20}
                  showText
                  textColor="black"
                  focusOnPress
                  showValuesAsLabels
                />
                <View>
                  {emotions.map((emotion, index) => (
                    <View key={index}>
                      <View
                        style={{
                          width: '100%',
                          flexDirection: 'row',
                          justifyContent: 'space-evenly',
                          marginTop: 20,
                        }}>
                        {renderLegend(emotion.diaryDate.toLocaleDateString(), 'rgb(84,219,234)')}
                      </View>
                    </View>
                  ))}
                </View>
              </>
            ) : (
              <ActivityIndicator size="small" color="#213751" />
            )}
          </View>
          {emotions.map((emotion, index) => (
            <Text key={index}>
              {emotion.diaryFK} Emoción: {emotion.name} - Puntuación:{' '}
              {emotion.score}, Fecha: {emotion.diaryDate.toString()}
            </Text>
          ))}
        </>
      )}
    </View>
  );
};

export default Statistics;
