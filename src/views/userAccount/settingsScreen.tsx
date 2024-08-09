import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import NavBar from '../../components/otherComponents/navBar';
import styles from '../userPrincipal/style/styleScreen';
import Menu from '../../components/otherComponents/menu';

// Definición del componente SignUp
const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Menu/>
      <ScrollView>
        <Text style={styles.text}>Configuración</Text>
      </ScrollView>
      <NavBar />
    </View>
  )
}

export default SettingsScreen
