import React from 'react';
import { View } from 'react-native';
import styles from './style/styleScreen';
import TopBarDiary from '../../components/otherComponents/formBarDiary';

// Definición del componente SignUp
const CreateDiaryScreen = () => {
  return (
    <View style={styles.container} >
      <TopBarDiary />
    </View>
  )
}

export default CreateDiaryScreen
