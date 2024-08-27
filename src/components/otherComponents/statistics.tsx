import React, {useEffect, useState} from "react";
import { Text, View } from 'react-native';
import hookDataUser from "../../hooks/userPrincipal/hookDataUser";
import url from "../../hooks/config/config";
import {LineChart} from 'react-native-gifted-charts';

const Statistics = () => {
    const [emotions, setEmotion] = useState<{ resultDiary: string, diaryFK: number }[]>([]);
    const {userEmail} = hookDataUser();
    useEffect(() => {
        const fetchData = async () => { //if si lo que hay en el userphone esta vacio si no que no lo ejecute. 
            try {
              const response = await fetch(`${url}/resultDiary?userEmail=${userEmail}`);
              if (!response.ok) {
                throw new Error('Salió mal la conexión');
              }
              const result = await response.json();
              if (!result || result.length === 0) {
                console.error('No hay datos disponibles');
                return;
              }
              console.log(result[0][1]);
              setEmotion(result);
            } catch (error) {
              console.log(error);
            }
        };
        fetchData();
      },[userEmail]);
    return (
        <View>
      <Text>Emociones detectadas:</Text>
      {emotions.map((emotion, index) => (
        <Text key={index} style={{color: '#000', marginVertical: 20}}>
          {index}, {emotion.resultDiary}, {emotion.diaryFK}
        </Text>
      ))}
{/*       {emotions.map((emotion, index) => (
        <View key={index}>
          <LineChart data={[{ value: Number(emotion.resultDiary) }]}/>
        </View>
      ))} */}
    </View>
    );
};

export default Statistics;