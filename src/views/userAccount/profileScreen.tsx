import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Menu from '../../components/otherComponents/menu';
import styles from '../userPrincipal/style/styleScreen';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Menu />
      <ScrollView>
        <Text>Perfil</Text>
      </ScrollView>
    </View>
  )
}

export default ProfileScreen
