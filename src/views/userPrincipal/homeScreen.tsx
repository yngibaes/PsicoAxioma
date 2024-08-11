import React from 'react';
import { View, ScrollView } from 'react-native';
import Menu from '../../components/otherComponents/menu';
import ContentDiaryHome from '../../components/otherComponents/diaryHome';
import styles from './style/styleScreen';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Menu />
      <ScrollView>
        <ContentDiaryHome />
      </ScrollView>
    </View>
  )
}

export default HomeScreen
