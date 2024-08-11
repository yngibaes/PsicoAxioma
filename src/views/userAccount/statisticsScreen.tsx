import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Menu from '../../components/otherComponents/menu';
import styles from '../userPrincipal/style/styleScreen';

const StatisticsScreen = () => {
  return (
    <View style={styles.container}>
      <Menu />
      <ScrollView>
        <Text>Estadisticas</Text>
      </ScrollView>
    </View>
  )
}

export default StatisticsScreen
