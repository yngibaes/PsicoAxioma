import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import materialTheme from '../../../assets/material-theme.json';

const styles = StyleSheet.create({
  backgroundForm: {
    alignItems: 'center',
    backgroundColor: materialTheme.palettes.tertiary[70],
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: hp('100%'),
    marginTop: hp('-10%'),
    width: wp('100%'),
  },
  childForm: {
    alignItems: 'center',
    height: hp('100%'),
    overflow: 'hidden',
    position: 'absolute',
  },
  container: {
    alignItems: 'center',
    flex: 1,
  },
  credit: {
    bottom: 12,
    color: materialTheme.palettes.primary[0],
    fontSize: 14,
    position: 'absolute',
  },
  divForm: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: materialTheme.palettes.tertiary[70],
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: hp('70%'),
    marginTop: hp('5%'),
    overflow: 'hidden',
    paddingTop: hp('2%'),
    width: wp('100%'),
  },
  ellipseForm: {
    backgroundColor: materialTheme.palettes.tertiary[70],
    borderRadius: 100,
    height: hp('23%'),
    padding: 15,
    width: wp('51%'),
    zIndex: 1,
  },
  parentForget: {
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
  parentForm: {
    height: hp('100%'),
    overflow: 'hidden',
    width: wp('100%'),
  },
  parentLogIn: {
    alignItems: 'center',
    backgroundColor: materialTheme.schemes.darkhighcontrast.secondaryContainer,
    flex: 1,
    flexDirection: 'column',
    height: hp('100%'),
    overflow: 'hidden',
    paddingTop: wp('1%'),
    width: wp('100%'),
  },
  parentSignUp: {
    alignItems: 'center',
    backgroundColor: materialTheme.schemes.darkhighcontrast.secondaryContainer,
    flex: 1,
    flexDirection: 'column', //	Orden de los elementos
    height: hp('100%'),
    overflow: 'hidden',
    paddingTop: wp('1%'),
    width: wp('100%'),
    //justifyContent: 'space-evenly', // Alineación de los elementos
  },
  parentWelcome: {
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
});

export default styles;
