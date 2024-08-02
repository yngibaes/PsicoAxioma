import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import TopBar from '../../components/userRegistration/topBar';
import FormForget from '../../components/userRegistration/formForget';
import UserNavigation from '../../hooks/userNavigation';
import materialTheme from '../../assets/material-theme.json';

// Definición del componente ForgetPassword
const ForgetPassword = () => {
  const { goBack } = UserNavigation()
  return (
    <View style={styles.parentAll}>
      <TopBar goBack={goBack} text="Olvidaste tu contraseña" />
      <FormForget />
    </View>
  )
}

// Definición de los estilos
const styles = StyleSheet.create({
  parentAll: {
    alignItems: 'center',
    backgroundColor: materialTheme.schemes.darkhighcontrast.secondaryContainer,
    flex: 1,
    flexDirection: 'column', //	Orden de los elementos
    height: hp('100%'),
    justifyContent: 'flex-start',
    overflow: 'hidden', // Ocultar elementos que sobresalgan
    paddingTop: wp('1%'),
    width: wp('100%'), 
  },
})

export default ForgetPassword
