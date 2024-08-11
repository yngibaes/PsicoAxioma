import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Menu from '../../components/otherComponents/menu';
import styles from './style/styleScreen';

const CalendaryScreen = () => {
  return (
    <View style={styles.container}>
      <Menu />
      <ScrollView>
        <Text>Calendario</Text>
      </ScrollView>
    </View>
  )
}

export default CalendaryScreen
