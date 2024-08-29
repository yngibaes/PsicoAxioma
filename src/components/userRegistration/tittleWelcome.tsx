import React from 'react';
import {Text, View} from 'react-native';
import styles from './style/stylesAll';

const welcome = '¡Bienvenido a PsicoAxioma!';

const TitleWelcome = () => {
  return (
    <View style={styles.divTitle}>
      <Text style={[styles.sizeTitle, styles.title]}>{welcome}</Text>
    </View>
  );
};

export default TitleWelcome;
