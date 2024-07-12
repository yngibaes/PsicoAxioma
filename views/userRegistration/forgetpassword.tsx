import * as React from 'react'
import {StyleSheet, View} from 'react-native'
import TopBar from '../../components/userRegistration/topBar'
import UserNavigation from '../../hooks/userNavigation'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import FormForget from '../../components/userRegistration/formForget'
import Button from '../../components/otherComponents/button'
import materialTheme from '../../assets/material-theme.json' // Ajusta la ruta según tu estructura de archivos

// Definición del componente ForgetPassword
const ForgetPassword = () => {
  const {goBack, logIn} = UserNavigation()
  return (
    <View style={styles.parentAll}>
      <TopBar goBack={goBack} text="Olvidaste tu contraseña" />
      <FormForget />
      <Button
        function={logIn}
        colorButton="#233333" //materialTheme.palettes.secondary[20]
        colorText="#FFF"
        text="Enviar"
        width="28%"
        height="7%"
        size="5.6%"
      />
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
    paddingTop: wp('5%'),
    width: wp('100%'), // Ancho del contenedor
  },
})

export default ForgetPassword
