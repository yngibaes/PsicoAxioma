import React from "react";
import { Text, View } from "react-native";
import CardDiary from "./cardDiary";
import UserNavigation from "../../../controller/hooks/userNavigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./style/styleDiary";
import { useNavigationState } from "@react-navigation/native";

const ContentDiary = () => {
  const { CreateDiaryScreen } = UserNavigation();
  const routeName = useNavigationState(state => state.routes[state.index].name);

  const limit = routeName === "Home" ? 1 : undefined;
  return (
    <View style={styles.parentDiary}>
      <View style={styles.childText}>
        <Text style={styles.text}>Diario</Text>
        <View style={styles.icon}>
          <Ionicons
            name="add-circle-outline"
            color="#000"
            onPress={CreateDiaryScreen}
            size={40}
          />
        </View>
      </View>
      <CardDiary limit={limit} />
    </View>
  );
};

export default ContentDiary;
