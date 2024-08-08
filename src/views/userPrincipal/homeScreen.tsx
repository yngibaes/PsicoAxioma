import React from 'react';
import { View, ScrollView } from 'react-native';
import ContentDiaryHome from '../../components/otherComponents/diaryHome';
import NavBar from '../../components/otherComponents/navBar';
import styles from './style/styleScreen';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <ContentDiaryHome />
      </ScrollView>
      <NavBar />
    </View>
  )
}

export default HomeScreen
