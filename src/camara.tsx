import React, { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

// Aqui va el key
const HUME_AI_API_KEY = 'V7VtoAQ0cAUQALDDjTZAWnqnUnM6mWvRINuB9bqxe7XQGA8I';

interface EmotionResult {
  emotion: string;
  score: number;
}

const HumeAIIntegration: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [emotions, setEmotions] = useState<EmotionResult[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImage(result.assets[0].uri);
      analyzeEmotion(result.assets[0].uri);
    }
  };

  const analyzeEmotion = async (imageUri: string) => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', {
        uri: imageUri,
        type: 'image/jpeg',
        name: 'image.jpg',
      } as any);

      const response = await axios.post(
        'https://api.hume.ai/v0/batch/jobs',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'X-Hume-Api-Key': HUME_AI_API_KEY,
          },
        }
      );

      // Aquí deberías manejar la respuesta de HumeAI
      // Este es un ejemplo simplificado, ajusta según la estructura real de la respuesta
      const emotionResults = response.data.results[0].predictions[0].emotions;
      setEmotions(emotionResults);
    } catch (error) {
      console.error('Error analyzing emotion:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      {isLoading && <Text>Analyzing...</Text>}
      {emotions.length > 0 && (
        <View>
          <Text>Detected Emotions:</Text>
          {emotions.map((emotion: EmotionResult, index: number) => (
            <Text key={index}>
              {emotion.emotion}: {emotion.score.toFixed(2)}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default HumeAIIntegration;