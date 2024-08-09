import React from 'react';
import { View, ScrollView } from 'react-native';
import ContentDiary from '../../components/otherComponents/diary';
import NavBar from '../../components/otherComponents/navBar';
import styles from './style/styleScreen';
import Menu from '../../components/otherComponents/menu';

const DiaryScreen = () => {
  return (
    <View style={styles.container}>
      <Menu/>
      <ScrollView>
        <ContentDiary />
      </ScrollView>
      <NavBar />
    </View>
  )
}

export default DiaryScreen
