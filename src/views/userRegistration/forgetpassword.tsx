import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import TopBar from '../../components/userRegistration/topBar'
import UserNavigation from '../../hooks/userNavigation'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import FormForget from '../../components/userRegistration/formForget'
import materialTheme from '../../assets/material-theme.json' // Ajusta la ruta según tu estructura de archivos

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
    backgroundColor: materialTheme.schemes.darkhighcontrast.secondaryContainer, // Color del borde
    flex: 1, // Flexibilidad
    flexDirection: 'column', //	Orden de los elementos
    height: hp('100%'), // Altura del contenedor
    justifyContent: 'flex-start', // Alineación de los elementos
    overflow: 'hidden', // Ocultar elementos que sobresalgan
    paddingTop: wp('1%'),
    width: wp('100%'), // Ancho del contenedor
  },
})

export default ForgetPassword
