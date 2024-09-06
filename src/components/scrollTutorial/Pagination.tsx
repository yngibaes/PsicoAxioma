import React from "react";
import { View } from "react-native";
import { OnboardingData } from "../../controller/data/dataScroll";
import { SharedValue } from "react-native-reanimated";
import Dot from "./Dot";
import styles from "./style/stylesAll"; /*Este es el css que se le da a los botones que se le dan a la paginacion de los scroll */

type Props = {
  data: OnboardingData[];
  buttonVal: SharedValue<number>;
};

const Pagination = ({ data, buttonVal }: Props) => {
  return (
    <View style={styles.paginationContainer}>
      {data.map((_, index) => {
        return <Dot index={index} buttonVal={buttonVal} key={index} />;
      })}
    </View>
  );
};

export default Pagination;
