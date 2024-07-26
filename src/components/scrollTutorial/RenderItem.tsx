import { Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import React from 'react';
import { OnboardingData } from '../../data/dataScroll';

type Props = {
  item: OnboardingData;
};

const RenderItem = ({ item }: Props) => {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();

  { /* Se hace la relación de aspecto de la iamgen es decir el valor que se modique entre 12/ 16 afectara unicmanete la 
  imagen, al modificar el primer valor este afectara el espacio de la imagen y el segundo valor afectara el tamaño de la imagen*/}
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
        style={[styles.imageStyle, { width: SCREEN_WIDTH, height: imageHeight }]}
        resizeMode="contain" // El componente resizMode es para ajustar la imagen en el tamaño de la pantalla
      />
      <Text style={[styles.itemText, { color: item.textColor, marginTop: item.margintop }]}>
        {item.text}
      </Text>
    </View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  imageStyle: {
    // Puedes ajustar estos estilos según sea necesario
    marginBottom: 30, // Ajusta el espacio entre la imagen y el texto
  },
  itemContainer: {//apartado especial para la imgen y texto 
    alignItems: 'center',
    flex: 1, // Cambiado a 1 para ocupar todo el espacio disponible
    paddingTop: 110, //posocion de la imagen junto al texto 
  },
  itemText: { //Apartado especial para el texto 
    fontFamily: 'InterBold',
    fontSize: 35,//Tamaño del texto
    fontWeight: '600', //Tipo de fuente
    marginHorizontal: 35,
    textAlign: 'center',
  },
});