import * as React from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './style/styleDiary';
import CardDiary from './cardDiary';

const ContentDiaryHome = () => {
  return (
    <View style={styles.parentDiary}>
      <View style={styles.childText}>
        <Text style={styles.text}>Diario</Text>
        <View style={styles.icon}>
          <Icon
            name="add-circle-outline"
            type="ionicon"
            color="#000"
            onPress={() => console.log('ola')}
            size={40}
          />
        </View>
      </View>
      <CardDiary limit={3} />
    </View>
  )
}

export default ContentDiaryHome
