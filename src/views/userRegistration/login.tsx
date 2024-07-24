import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import TopBar from '../../components/userRegistration/topBar'
import UserNavigation from '../../hooks/userNavigation'
import ImageBear from '../../components/userRegistration/imageBear'
import FormLogIn from '../../components/userRegistration/formLogin'
import materialTheme from '../../assets/material-theme.json' // Ajusta la ruta según tu estructura de archivos

// Definición del componente LogInScreen
const LogInScreen = () => {
  const { goBack, forgetPassword } = UserNavigation()
  return (
    <View style={styles.parentAll}>
      <TopBar goBack={goBack} text="Iniciar Sesión" />
      <KeyboardAwareScrollView enableOnAndroid={true}
        scrollEnabled={false} // Deshabilita el scroll en la vista
        extraScrollHeight={10} // Ajusta este valor según sea necesario
        keyboardShouldPersistTaps="handled" // Mejora la interacción con los inputs cuando el teclado está visible
        resetScrollToCoords={{ x: 0, y: 0 }} // Esta línea asegura que el scroll vuelva a su posición original
      >
        <ImageBear sizeHeightD="28%" sizeHeightI="28%" sizeWidhtI="50%" />
        <View style={styles.divForm}>
          <FormLogIn forget={forgetPassword} />
        </View>
      </KeyboardAwareScrollView>
    </View>
  )
}

// Definición de los estilos
const styles = StyleSheet.create({
  divForm: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: materialTheme.palettes.tertiary[70],
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: hp('70%'),
    marginTop: hp('5%'),
    paddingTop: hp('2%'),
    overflow: 'hidden',
    width: wp('100%'),
  },
  parentAll: {
    alignItems: 'center',
    backgroundColor: materialTheme.schemes.darkhighcontrast.secondaryContainer,
    flex: 1,
    flexDirection: 'column', //	Orden de los elementos
    height: hp('100%'),
    overflow: 'hidden',
    paddingTop: wp('1%'),
    width: wp('100%'),
  },
})

export default LogInScreen
