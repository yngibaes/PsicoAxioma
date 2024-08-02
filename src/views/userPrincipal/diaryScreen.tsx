import React from 'react';
import { View, ScrollView } from 'react-native';
import Menu from '../../components/otherComponents/menu';
import ContentDiary from '../../components/otherComponents/diary';
import NavBar from '../../components/otherComponents/navBar';
import styles from './style/styleScreen';

// Definición del componente SignUp
const DiaryScreen = () => {
  return (
    <View style={styles.container}>
      <Menu />
      <ScrollView>
        <ContentDiary />
      </ScrollView>
      <NavBar />
    </View>
  )
}

export default DiaryScreen
