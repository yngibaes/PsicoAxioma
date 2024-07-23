import * as React from 'react'
import {StyleSheet, View} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import TitleWelcome from '../../components/userRegistration/tittleWelcome'
import ImageBear from '../../components/userRegistration/imageBear'
import ButtonLogin from '../../components/userRegistration/buttonLogIn'
import UserNavigation from '../../hooks/userNavigation'
import materialTheme from '../../assets/material-theme.json' // Ajusta la ruta según tu estructura de archivos

// Definición del componente WelcomeScreen
const WelcomeScreen = () => {
  const {logIn, signUp} = UserNavigation()
  return (
    <View style={styles.parentEll}>
      <TitleWelcome />
      <ImageBear sizeHeightD="45%" sizeHeightI="42%" sizeWidhtI="80%" />
      <ButtonLogin LogIn={logIn} SignUp={signUp} />
    </View>
  )
}

// Definición de los estilos
const styles = StyleSheet.create({
  parentEll: {
    // Estilos del contenedor principal
    alignItems: 'center', // Alineación de los elementos
    backgroundColor: materialTheme.palettes.tertiary[70], // Color de fondo
    flex: 1, // Tamaño del contenedor
    flexDirection: 'column', //	Orden de los elementos
    height: hp('100%'), // Altura del contenedor
    justifyContent: 'space-evenly', // Alineación de los elementos
    overflow: 'hidden', // Ocultar elementos que sobresalgan
    paddingBottom: hp('6%'), // Espaciado inferior
    paddingHorizontal: wp('6%'), // Espaciado horizontal
    width: wp('100%'), // Ancho del contenedor
  },
})

export default WelcomeScreen
