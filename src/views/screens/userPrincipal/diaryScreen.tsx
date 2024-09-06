import React from "react";
import { View, ScrollView } from "react-native";
import Menu from "../../components/otherComponents/menu";
import ContentDiary from "../../components/otherComponents/diary";
import styles from "./style/styleScreen";

const DiaryScreen = () => {
  return (
    <View style={styles.container}>
      <Menu />
      <ScrollView>
        <ContentDiary />
      </ScrollView>
    </View>
  );
};

export default DiaryScreen;
