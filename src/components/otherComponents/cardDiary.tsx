import * as React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './style/styleCardDiary';
import hookDiaryInfo from '../../hooks/userPrincipal/hookDiaryInfo';

// Definición de la interfaz CardDiaryProps
interface CardDiaryProps {
  limit?: number
}

const CardDiary: React.FC<CardDiaryProps> = ({ limit }) => {
  const { data, loading, error, formatDate } = hookDiaryInfo()

  if (loading) return <ActivityIndicator size="large" color="#479E9C" /> // Si loading es true, se muestra un ActivityIndicator
  if (error) return <Text style={styles.error}>Error: {error}</Text> // Si error es true, se muestra un mensaje de error

  // Se ordena la data por fecha de manera descendente
  const sortedData = data.sort(
    (a, b) => new Date(b.diaryDate).getTime() - new Date(a.diaryDate).getTime(),
  )

  // Se limita la cantidad de datos a mostrar
  const limitedData = limit ? sortedData.slice(0, limit) : sortedData

  return (
    <View style={styles.container}>
      {limitedData.length > 0 ? (
        limitedData.map(item => (
          <View key={item.diaryID} style={styles.parentAll}>
            <View style={styles.parentTitle}>
              <Icon name="ellipse" type="ionicon" color="#47708D" size={15} />
              <Text style={styles.title}>{item.diaryTitle}</Text>
            </View>
            <View style={styles.parentDate}>
              <Text style={styles.date}>{formatDate(item.diaryDate)}</Text>
            </View>
            <View style={styles.parentDescri}>
              <Text style={styles.description} numberOfLines={4}>
                {item.diaryContent}
              </Text>
            </View>
          </View>
        ))
      ) : (
        <Text style={styles.title}>No hay entradas.</Text>
      )}
    </View>
  )
}

export default CardDiary
