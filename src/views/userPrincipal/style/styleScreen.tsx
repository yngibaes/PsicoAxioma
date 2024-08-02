import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import materialTheme from '../../../assets/material-theme.json';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: materialTheme.schemes.darkmediumcontrast.background,
    flex: 1, // Asegura que el contenedor use todo el espacio disponible
    justifyContent: 'center', // Centra verticalmente
    width: wp('100%'),
  },
  fixedContent: {
    alignItems: 'center',
    height: hp('7%'), // Ajusta la altura según sea necesario
    marginTop: hp('2%'),
    position: 'static',
    zIndex: 2, // Asegura que el topbar esté por encima del contenido scrollable
  },
  scrollableContent: {
    flexGrow: 1,
    marginBottom: hp('1%')
  },
  text: {
    color: materialTheme.palettes.primary[0], // Aplica el color al texto
    fontFamily: 'InterBold',
    fontWeight: '200',
    padding: 20,
  },
})

export default styles
