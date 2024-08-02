import { StyleSheet, View } from 'react-native';
import React from 'react';
import { OnboardingData } from '../../data/dataScroll';
import { SharedValue } from 'react-native-reanimated';
import Dot from './Dot';

type Props = {
  data: OnboardingData[]
  buttonVal: SharedValue<number>
}

const Pagination = ({ data, buttonVal }: Props) => {
  return (
    <View style={styles.PaginationContainer}>
      {data.map((_, index) => {
        return <Dot index={index} buttonVal={buttonVal} key={index} />
      })}
    </View>
  )
}

export default Pagination

{
  /*Este es el css que se le da a los botones que se le dan a la paginacion de los scroll */
}

const styles = StyleSheet.create({
  PaginationContainer: {
    bottom: 60,
    flexDirection: 'row',
    position: 'absolute',
  },
})
