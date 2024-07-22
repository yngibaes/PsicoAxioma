import * as React from 'react'
import {StyleSheet, View} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import TopBar from '../../components/userRegistration/topBar'
import UserNavigation from '../../hooks/userNavigation'
import ImageBear from '../../components/userRegistration/imageBear'
import {FormLogIn} from '../../components/userRegistration/formLogin'
import ButtonLogin from '../../components/userRegistration/buttonLogIn'
import materialTheme from '../../assets/material-theme.json' // Ajusta la ruta según tu estructura de archivos
import hookLogin from '../../hooks/hookLogin'

// Definición del componente LogInScreen
const LogInScreen = () => {
  const {goBack, signUp, forgetPassword} = UserNavigation()
  const { handleSubmit } = hookLogin()
  return (
    <View style={styles.parentAll}>
      <TopBar goBack={goBack} text="Iniciar Sesión" />
      <KeyboardAwareScrollView enableOnAndroid={true} scrollEnabled={false}>
        <ImageBear sizeHeightD="28%" sizeHeightI="28%" sizeWidhtI="50%" />
        <View style={styles.divForm}>
          <FormLogIn forget={forgetPassword} />
          <ButtonLogin LogIn={handleSubmit} SignUp={signUp} />
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
    height: hp('56%'),
    marginTop: hp('5%'),
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
    paddingTop: wp('5%'),
    width: wp('100%'),
  },
})

export default LogInScreen
