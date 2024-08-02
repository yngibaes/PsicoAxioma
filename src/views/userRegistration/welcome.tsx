import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TitleWelcome from '../../components/userRegistration/tittleWelcome';
import ImageBear from '../../components/userRegistration/imageBear';
import ButtonLogin from '../../components/userRegistration/buttonLogIn';
import UserNavigation from '../../hooks/userNavigation';
import materialTheme from '../../assets/material-theme.json';

// Definición del componente WelcomeScreen
const WelcomeScreen = () => {
  const { logIn, signUp } = UserNavigation()
  return (
    <View style={styles.parentAll}>
      <TitleWelcome />
      <ImageBear sizeHeightD="45%" sizeHeightI="42%" sizeWidhtI="80%" />
      <ButtonLogin LogIn={logIn} SignUp={signUp} />
    </View>
  )
}

// Definición de los estilos
const styles = StyleSheet.create({
  parentAll: {
    alignItems: 'center',
    backgroundColor: materialTheme.palettes.tertiary[70],
    flex: 1,
    flexDirection: 'column',
    height: hp('100%'),
    justifyContent: 'space-evenly',
    overflow: 'hidden', // Ocultar elementos que sobresalgan
    paddingBottom: hp('6%'), // Espaciado inferior
    paddingHorizontal: wp('6%'), // Espaciado horizontal
    width: wp('100%'),
  },
})

export default WelcomeScreen
