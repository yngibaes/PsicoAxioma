import React from "react";
import { Text, View, ActivityIndicator, TouchableOpacity } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../../controller/hooks/type/type";
import hookDiaryInfo from "../../../controller/hooks/userPrincipal/hookDiaryInfo";
import styles from "./style/styleCardDiary";
import Ionicons from "react-native-vector-icons/Ionicons";

// Definición de la interfaz CardDiaryProps
interface CardDiaryProps {
  limit?: number;
}

const CardDiary: React.FC<CardDiaryProps> = ({ limit }) => {
  const { data, loading, error, formatDate } = hookDiaryInfo();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  if (loading) return <ActivityIndicator size="large" color="#479E9C" />; // Si loading es true, se muestra un ActivityIndicator
  if (error) return <Text style={styles.error}>Error: Conexión fallida</Text>; // Si error es true, se muestra un mensaje de error

  // Se ordena la data por fecha de manera descendente
  const sortedData = data.sort(
    (a, b) => new Date(b.diaryDate).getTime() - new Date(a.diaryDate).getTime(),
  );

  // Se limita la cantidad de datos a mostrar
  const limitedData = limit ? sortedData.slice(0, limit) : sortedData;

  return (
    <View style={styles.container}>
      {limitedData.length > 0 ? (
        limitedData.map(item => (
          <TouchableOpacity
            key={item.diaryID}
            style={styles.parentAll}
            onPress={() =>
              navigation.navigate("ReadDiaryIDScreen", {
                diaryID: item.diaryID,
              })
            }
          >
            <View style={styles.parentTitle}>
              <Ionicons name="ellipse" color="#47708D" size={15} />
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
          </TouchableOpacity>
        ))
      ) : (
        <Text style={styles.title}>No hay entradas.</Text>
      )}
    </View>
  );
};

export default CardDiary;
