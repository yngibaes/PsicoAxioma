import React from 'react';
import { View, ScrollView } from 'react-native';
import ContentDiaryHome from '../../components/otherComponents/diaryHome';
import NavBar from '../../components/otherComponents/navBar';
import styles from './style/styleScreen';
import Menu from '../../components/otherComponents/menu';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Menu/>
      <ScrollView>
        <ContentDiaryHome />
      </ScrollView>
      <NavBar />
    </View>
  )
}

export default HomeScreen
