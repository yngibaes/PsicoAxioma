import React from "react";
import { View, ScrollView } from "react-native";
import Menu from "../../components/otherComponents/menu";
import ContentDiary from "../../components/otherComponents/diary";
import CalendarHome from "../../components/otherComponents/calendarHome";
import styles from "./style/styleScreen";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Menu />
      <ScrollView>
        <CalendarHome />
        <ContentDiary />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
