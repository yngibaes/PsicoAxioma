import React from 'react';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style/styleDiary';
import CardDiary from './cardDiary';
import UserNavigation from '../../hooks/userNavigation';

const ContentDiaryHome = () => {
  const {CreateDiaryScreen} = UserNavigation();
  return (
    <View style={styles.parentDiary}>
      <View style={styles.childText}>
        <Text style={styles.text}>Diario</Text>
        <View style={styles.icon}>
          <Ionicons
            name="add-circle-outline"
            color="#000"
            onPress={CreateDiaryScreen}
            size={40}
          />
        </View>
      </View>
      <CardDiary limit={1} />
    </View>
  );
};

export default ContentDiaryHome;
