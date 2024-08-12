import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import materialTheme from '../../../assets/material-theme.json';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: materialTheme.schemes.darkmediumcontrast.background,
    flex: 1, // Asegura que el contenedor use todo el espacio disponible
    height: hp('100%'),
    justifyContent: 'center', // Centra verticalmente,
    width: wp('100%'),
  },
  text: {
    color: materialTheme.palettes.primary[0],
    fontFamily: 'InterBold',
    fontSize: wp('4.2%'),
  },
})

export default styles
