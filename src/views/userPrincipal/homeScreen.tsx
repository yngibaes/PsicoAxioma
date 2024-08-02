import React from 'react';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import ContentDiaryHome from '../../components/otherComponents/diaryHome';
import NavBar from '../../components/otherComponents/navBar';
import Menu from '../../components/otherComponents/menu';
import styles from './style/styleScreen';


import { signOut } from 'firebase/auth';
import { auth } from '../../hooks/config/firebase';
import materialTheme from '../../assets/material-theme.json';

const HomeScreen = () => {
  const handleLogout = async () => {
    await signOut(auth)
  }
  return (
    <View style={styles.container}>
      <Menu />
      <TouchableOpacity onPress={handleLogout}>
        <Text
          style={[
            styles.text,
            { backgroundColor: materialTheme.schemes.darkmediumcontrast.error },
          ]}>
          Cierra sesión
        </Text>
      </TouchableOpacity>
      <ScrollView>
        <ContentDiaryHome />
      </ScrollView>
      <NavBar />
    </View>
  )
}

export default HomeScreen
