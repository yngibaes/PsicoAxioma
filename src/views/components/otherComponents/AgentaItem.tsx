import React from "react";
import { View, Text } from "react-native";
import styles from "./style/styleCalendar";

interface AgendaItemProps {
  item: { name: string; date: string, nameEmotion: string; score: string };
}

const AgendaItem = ({ item }: AgendaItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.resultsContainer}>
        <View style={styles.resultItem}>
          <Text style={[styles.resultText, styles.resultName]}>{item.name}</Text>
          <Text style={[styles.resultText, styles.resultDate]}>{`${item.nameEmotion}: ${item.score}%`}</Text>
        </View>
      </View>
    </View>
  );
};

export default AgendaItem;