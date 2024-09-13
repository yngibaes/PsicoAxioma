import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface AgendaItemProps {
  item: { name: string; date: string };
}

const AgendaItem = ({ item }: AgendaItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.resultsContainer}>
        <View style={styles.resultItem}>
          <Text style={styles.resultText}>{item.name}</Text>
          <Text style={styles.resultText}>{item.date}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  resultsContainer: {
    marginTop: 10,
  },
  resultItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  resultText: {
    color: "black",
    fontSize: 14,
  },
});

export default AgendaItem;