const WebSocket = require('ws');
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

const EmotionAnalyzer = () => {
  const [emotions, setEmotions] = useState([]);

  useEffect(() => {
    const apiKey = 'ihQLg5EVtVEJEK1SGjqG40EAknf8mwM2qEreZNBxEd954lbU';
    const humeai = `wss://api.hume.ai/v0/stream/models?api_key=${apiKey}`;
    const ws = new WebSocket(humeai);

    ws.onopen = () => {
      console.log('conectado');
      const postData = {
        data: "I'm very glad to be your friend. Here’s to many more laughs and great times ahead!",
        models: {
          language: {
            granularity: 'passage',
          },
        },
        raw_text: true,
      };
      ws.send(JSON.stringify(postData));
    };

    ws.onmessage = (event:any) => {
      const data = JSON.parse(event.data);
      const detectedEmotions = data.language.predictions[0].emotions;

      detectedEmotions.sort((a:any, b:any) => b.score - a.score);
      const top = detectedEmotions.slice(0, 5);

      console.log('Emociones mas fuertes detectadas:', top);

      ws.close();
    };

    ws.onerror = (error:any) => {
      console.error('WebSocket error:', error);
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed.');
    };

    // Cerrar la conexión WebSocket cuando se desmonta el componente
    return () => {
      ws.close();
    };
  }, []);

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
