import React from 'react';
import {Image, Text, View, useWindowDimensions} from 'react-native';
import {OnboardingData} from '../../data/dataScroll';
import styles from './style/stylesAll';

type Props = {
  item: OnboardingData;
};

const RenderItem = ({item}: Props) => {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = useWindowDimensions();

  {
    /* Se hace la relación de aspecto de la iamgen es decir el valor que se modique entre 12/ 16 afectara unicmanete la 
  imagen, al modificar el primer valor este afectara el espacio de la imagen y el segundo valor afectara el tamaño de la imagen*/
  }
  const imageHeight = SCREEN_WIDTH * (10 / 14);

  return (
    <View
      style={[
        styles.itemContainer,
        {
          width: SCREEN_WIDTH,
          height: SCREEN_HEIGHT,
          backgroundColor: item.backgroundColor,
        },
      ]}>
      <Image
        source={item.image}
        style={[styles.imageStyle, {width: SCREEN_WIDTH, height: imageHeight}]}
        resizeMode="contain" // El componente resizMode es para ajustar la imagen en el tamaño de la pantalla
      />
      <View style={styles.textContainer}>
        <Text style={[styles.itemText, {color: item.textColor}]}>
          {item.text}
        </Text>
      </View>
    </View>
  );
};

export default RenderItem;
