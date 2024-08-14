import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import materialTheme from '../../../assets/material-theme.json';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: materialTheme.schemes.darkmediumcontrast.inverseSurface,
    borderRadius: 50,
    height: hp('10%'),
    justifyContent: 'center',
    width: wp('20%')
  },
  capturePhoto: {
    alignItems: 'center',
    backgroundColor: materialTheme.schemes.darkmediumcontrast.inverseOnSurface,
    bottom: 0,
    display: 'flex',
    height: hp('15%'),
    justifyContent: 'center',
    position: 'absolute',
    width: wp('100%'),
  },
  container: {
    alignItems: 'center',
    backgroundColor: materialTheme.schemes.darkmediumcontrast.background,
    flex: 1, // Asegura que el contenedor use todo el espacio disponible
    height: hp('100%'),
    justifyContent: 'center', // Centra verticalmente,
    width: wp('100%'),
  },
  photo: {
    borderRadius: 20,
    height: hp('80%'),
    width: wp('90%'),
  },
  text: {
    color: materialTheme.palettes.primary[0],
    fontFamily: 'InterBold',
    fontSize: wp('4.2%'),
  },
});

export default styles;
