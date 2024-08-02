import React from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity, Linking, } from 'react-native';
import styles from './style/styleCard';

//El llamado que se va a realizar en las tarjetas para que sean despues llamados y modificados en el partado de abajo
interface CardProps {
  imageSource: any //Aca se indica que es donde se van a llamar las imagenes que se van a utilizar
  cardTitle: string //Aca se indica que es el apartado para el titulo de las cards
  cardText: string //Aca se indica que es el apartado para la información de las líneas de atención que contiene las cards
  phoneNumber: string // Nueva propiedad para el número de teléfono
}
const Card = (props: CardProps) => {

  // Función para abrir el marcador con el número de teléfono
  const handlePress = () => {
    Linking.openURL(`tel:${props.phoneNumber}`) //Acá es donde se define la funcion de LinKing que es una liberia de React-Native para poder interactuar con enlaces de aplicaciones entrantes y salientes
  }
  return (
    <TouchableOpacity style={styles.cardInfo} onPress={handlePress}>
      <ScrollView style={styles.cardInfo}>
        <View style={styles.layout}>
          <Image
            style={styles.cardImage}
            source={props.imageSource}
            resizeMode="contain"
          />
          <Text style={styles.cardTitle}>{props.cardTitle}</Text>
          <Text style={styles.cardText}>{props.cardText}</Text>
        </View>
      </ScrollView>
    </TouchableOpacity>
  )
}

export default Card
