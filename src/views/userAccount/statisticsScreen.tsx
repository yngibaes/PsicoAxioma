import React from 'react';
import { View, ScrollView } from 'react-native';
import Menu from '../../components/otherComponents/menu';
import styles from '../userPrincipal/style/styleScreen';
import Statistics from '../../components/otherComponents/statistics';

const StatisticsScreen = () => {
  return (
    <View style={styles.container}>
      <Menu />
      <ScrollView>
        <Statistics />
      </ScrollView>
    </View>
  );
};

export default StatisticsScreen;
