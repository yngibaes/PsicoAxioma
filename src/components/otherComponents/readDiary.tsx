import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import hookDiaryInfo from '../../hooks/userPrincipal/hookDiaryInfo';

const EmotionAnalyzer = () => {
  const [emotions, setEmotions] = useState<{name: string; score: number}[]>([]);
  const {data} = hookDiaryInfo();

  useEffect(() => {
    if (!data || data.length === 0) {
      console.error('No hay datos disponibles');
      return;
    }

    const apiKey = 'ihQLg5EVtVEJEK1SGjqG40EAknf8mwM2qEreZNBxEd954lbU';
    const humeai = `wss://api.hume.ai/v0/stream/models?api_key=${apiKey}`;
    const ws = new WebSocket(humeai);

    ws.onopen = () => {
      console.log('conectado');
      const postData = {
        data: JSON.stringify(data[0].diaryContent),
        models: {
          language: {
            granularity: 'passage',
          },
        },
        raw_text: true,
      };
      ws.send(JSON.stringify(postData));
    };

    ws.onmessage = (event: any) => {
      const data = JSON.parse(event.data);
      const detectedEmotions = data.language.predictions[0].emotions;

      detectedEmotions.sort((a: any, b: any) => b.score - a.score);
      const top = detectedEmotions.slice(0, 5);

      console.log('Emociones mas fuertes detectadas:', top);
      setEmotions(top);

      ws.close();
    };

    ws.onerror = (error: Event) => {
      console.error('WebSocket error:', error);
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed.');
    };

    return () => {
      ws.close();
    };
  }, [data]);

  return (
    <View>
      <Text>Emociones detectadas:</Text>
      {emotions.map((emotion, index) => (
        <Text key={index}>
          {emotion.name}: {emotion.score}
        </Text>
      ))}
    </View>
  );
};

export default EmotionAnalyzer;
