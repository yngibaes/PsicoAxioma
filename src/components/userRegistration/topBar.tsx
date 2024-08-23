import React from 'react';
import {View, Pressable, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style/stylesAll';

// Definición de las props usando TypeScript
interface propsTopBar {
  goBack: () => void
  text: string
}

// Definición del componente TopBar
const TopBar = (props: propsTopBar) => {
  return (
    <View style={styles.gobackParent}>
      <Pressable style={styles.gobackChildLayout} onPress={props.goBack}>
        <View style={[styles.gobackChild, styles.gobackChildLayout]}>
          <Ionicons name="arrow-back" size={28} color="#FFF" />
        </View>
      </Pressable>
      <Text style={styles.gobackText}>{props.text}</Text>
    </View>
  );
};

export default TopBar;
