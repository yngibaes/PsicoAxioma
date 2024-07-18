import React from 'react';
import { StyleSheet, View } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import TopBar from '../../components/userRegistration/topBar'
import UserNavigation from '../../hooks/userNavigation'
import FormSignUp from '../../components/userRegistration/formSignUp'
import ImageBear from '../../components/userRegistration/imageBear'
import materialTheme from '../../assets/material-theme.json' // Ajusta la ruta según tu estructura de archivos


// Definición del componente SignUp
const SignUp = () => {
  const { goBack } = UserNavigation()

  return (
    <View style={styles.parentAll}>
      <TopBar goBack={goBack} text="Regístrate" />
      <KeyboardAwareScrollView enableOnAndroid={true} scrollEnabled={false}>
        <View style={styles.parentForm}>
          <View style={styles.childForm}>
            <View style={styles.ellipseForm}>
              <ImageBear sizeHeightD="19%" sizeHeightI="19%" sizeWidhtI="50%" />
            </View>
            <View style={styles.backgroundForm}>
              <FormSignUp/>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  )
}

// Definición de los estilos
const styles = StyleSheet.create({
  backgroundForm: {
    alignItems: 'center',
    backgroundColor: materialTheme.palettes.tertiary[70],
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: hp('80%'),
    marginTop: hp('-10%'),
    width: wp('100%'),
  },
  childForm: {
    alignItems: 'center',
    height: hp('100%'),
    overflow: 'hidden',
    position: 'absolute',
  },
  ellipseForm: {
    backgroundColor: materialTheme.palettes.tertiary[70],
    borderRadius: 100,
    height: hp('23%'),
    padding: 15,
    width: wp('51%'),
    zIndex: 1,
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
    //justifyContent: 'space-evenly', // Alineación de los elementos
  },
  parentForm: {
    height: hp('100%'),
    overflow: 'hidden',
    width: wp('100%'),
  },
  errorText: {
    fontSize: 10,
    color: 'red',
  },
})

export default SignUp
