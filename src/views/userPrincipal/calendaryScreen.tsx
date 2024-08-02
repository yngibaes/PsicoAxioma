import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import NavBar from '../../components/otherComponents/navBar';
import styles from './style/styleScreen';

// Definición del componente SignUp
const CalendaryScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>Calendario</Text>
      </ScrollView>
      <NavBar />
    </View>
  )
}

export default CalendaryScreen
