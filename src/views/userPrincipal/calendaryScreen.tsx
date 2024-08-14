import React from 'react';
import { View, ScrollView } from 'react-native';
import Menu from '../../components/otherComponents/menu';
import styles from './style/styleScreen';
import Calendary from '../../components/otherComponents/calendary';

const CalendaryScreen = () => {
  return (
    <View style={styles.container}>
      <Menu />
      <ScrollView>
        <Calendary />
      </ScrollView>
    </View>
  );
};

export default CalendaryScreen;
