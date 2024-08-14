import React from 'react';
import { View } from 'react-native';
import FormDiary from '../../components/otherComponents/formBarDiary';
import styles from './style/styleScreen';

const CreateDiaryScreen = () => {
  return (
    <View style={styles.container} >
      <FormDiary />
    </View>
  );
};

export default CreateDiaryScreen;
