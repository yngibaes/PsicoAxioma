import * as React from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './style/styleDiary';
import CardDiary from './cardDiary';
import UserNavigation from '../../hooks/userNavigation';

const ContentDiary = () => {
  const { CreateDiaryScreen } = UserNavigation();
  return (
    <View style={styles.parentDiary}>
      <View style={styles.childText}>
        <Text style={styles.text}>Diario</Text>
        <View style={styles.icon}>
          <Icon
            name="add-circle-outline"
            type="ionicon"
            color="#000"
            onPress={CreateDiaryScreen}
            size={40}
          />
        </View>
      </View>
      <CardDiary />
    </View>
  )
}

export default ContentDiary
