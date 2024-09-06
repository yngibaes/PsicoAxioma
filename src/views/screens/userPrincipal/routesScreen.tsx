import React from "react";
import { View, ScrollView } from "react-native";
import Menu from "../../components/otherComponents/menu";
import CardRoute from "../../components/otherComponents/cardRoute";
import dataCall from "../../../controller/data/dataCall";
import styles from "./style/styleScreen";

const RoutesScreen = () => {
  return (
    <View style={styles.container}>
      <Menu />
      <ScrollView>
        <View>
          {dataCall.map((card, index) => (
            <CardRoute
              key={index}
              imageSource={card.imageSource}
              cardTitle={card.cardTitle}
              cardText={card.cardText}
              phoneNumber={card.phoneNumber}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default RoutesScreen;
