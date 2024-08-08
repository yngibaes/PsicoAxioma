import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import NavBar from '../../components/otherComponents/navBar';
import styles from '../userPrincipal/style/styleScreen';

// Definición del componente SignUp
const StatisticsScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>Estadisticas</Text>
      </ScrollView>
      <NavBar />
    </View>
  )
}

export default StatisticsScreen
