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
  containerResult: {
    alignItems: 'center',
    backgroundColor: materialTheme.schemes.darkmediumcontrast.background,
    flex: 1,
    flexDirection: 'column',
    height: hp('100%'),
    overflow: 'hidden',
    paddingTop: wp('1%'),
    width: wp('100%'),
  },
  parentUpdate: {
    alignItems: 'center',
    backgroundColor: materialTheme.schemes.darkmediumcontrast.background,
    flex: 1,
    flexDirection: 'column', //	Orden de los elementos
    height: hp('100%'),
    justifyContent: 'flex-start',
    overflow: 'hidden', // Ocultar elementos que sobresalgan
    paddingTop: wp('1%'),
    width: wp('100%'),
  },
  photo: {
    borderRadius: 20,
    height: hp('60%'),
    width: wp('90%'),
  },
  resultsContainer: {
    alignItems: 'center',
    backgroundColor: materialTheme.schemes.darkmediumcontrast.tertiary,
    borderRadius: wp('2%'),
    height: hp('20%'),
    marginTop: hp('1.5%'),
    width: wp('90%'),
  },
  text: {
    color: materialTheme.palettes.primary[0],
    fontFamily: 'InterBold',
    fontSize: wp('4.2%'),
  },
  textResult: {
    color: materialTheme.palettes.primary[0],
    fontFamily: 'InterBold',
    fontSize: wp('4%'),
    fontWeight: '200'
  },
});

export default styles;
