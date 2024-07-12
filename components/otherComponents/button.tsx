// Objetivo: Componente de botón para la aplicación móvil de React Native.
import * as React from 'react'
import {StyleSheet, Pressable, Text, View} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

// Definición de las props usando TypeScript
interface PropsButton {
  function: () => void // Función que ejecuta el botón
  colorButton: string
  colorText: string
  text: string
  width: string
  height: string
  size: string
}

// Definición del componente Button
const Button = (props: PropsButton) => {
  return (
    <View style={styles.divButton}>
      <Pressable
        style={[
          styles.parentButton,
          {
            backgroundColor: props.colorButton,
            width: wp(`${props.width}`),
            height: hp(`${props.height}`),
          },
        ]}
        onPress={props.function}>
        <Text
          style={[
            styles.button,
            styles.title,
            {color: props.colorText, fontSize: wp(`${props.size}`)},
          ]}>
          {props.text}
        </Text>
      </Pressable>
    </View>
  )
}

// Definición de los estilos
const styles = StyleSheet.create({
  button: {
    // Estilos del botón
    fontSize: wp('8%'), // Tamaño de la fuente, 15% del ancho de la pantalla
    textAlign: 'center',
  },
  divButton: {
    // Estilos del contenedor de los botones
    alignItems: 'center',
    width: wp('94%'), // Ancho del contenedor
  },
  parentButton: {
    // Estilos del contenedor del botón de inicio de sesión
    alignItems: 'center',
    borderRadius: 10, // Radio de las esquinas del botón
    justifyContent: 'center',
    overflow: 'hidden', // Ocultar elementos que sobresalgan
  },
  title: {
    // Estilos del título
    fontFamily: 'InterBold',
    fontWeight: '300', // Grosor del texto
  },
})

export default Button
