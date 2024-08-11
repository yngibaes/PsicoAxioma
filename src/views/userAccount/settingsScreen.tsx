import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Menu from '../../components/otherComponents/menu';
import styles from '../userPrincipal/style/styleScreen';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Menu />
      <ScrollView>
        <Text>Configuración</Text>
      </ScrollView>
    </View>
  )
}

export default SettingsScreen
