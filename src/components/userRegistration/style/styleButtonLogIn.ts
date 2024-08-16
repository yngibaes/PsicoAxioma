import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import materialTheme from '../../../assets/material-theme.json';

// Definición de los estilos
const styles = StyleSheet.create({
  button: {
    // Estilos del botón
    fontSize: wp('8%'), // Tamaño de la fuente, 15% del ancho de la pantalla
    textAlign: 'center', // Alineación del texto
  },
  divButton: {
    // Estilos del contenedor de los botones
    alignItems: 'center', // Alineación de los elementos
    flexDirection: 'column', // Orden de los elementos
    height: hp('13.3%'), // Altura del contenedor
    width: wp('94%'), // Ancho del contenedor
  },
  divQuestion: {
    // Estilos del contenedor de la pregunta
    alignItems: 'center', // Alineación de los elementos
    flexDirection: 'row', // Orden de los elementos
    justifyContent: 'center', // Alineación de los elementos
    marginTop: hp('0.7%'), // Margen superior
    paddingHorizontal: wp('1.25%'), // Espaciado horizontal
    width: '100%', // Ancho del contenedor
  },
  error: {
    color: materialTheme.schemes.dark.errorContainer,
    fontSize: wp('2.6%'),
    fontWeight: 'bold',
    paddingHorizontal: wp('1.5%'),
  },
  marginText: {
    // Estilos del margen del texto
    marginLeft: wp('1%'), // Margen izquierdo
  },
  optionsText: {
    // Estilos del texto de las opciones
    color: materialTheme.palettes.primary[0], // Color del texto
    fontFamily: 'InterBold', // Tipo de fuente
    fontSize: hp('2.25%'), // Tamaño de la fuente
    fontWeight: '600', // Grosor del texto
    textDecorationLine: 'underline', // Línea de subrayado
  },
  parentButton: {
    // Estilos del contenedor del botón de inicio de sesión
    alignItems: 'center', // Alineación de los elementos
    backgroundColor: materialTheme.palettes.secondary[20], // Color de fondo del botón
    borderRadius: 10, // Radio de las esquinas del botón
    height: hp('9.5%'), // Altura del botón
    justifyContent: 'center', // Alineación de los elementos
    overflow: 'hidden', // Ocultar elementos que sobresalgan
    width: wp('75%'), // Ancho del botón
  },
  sizeText: {
    // Estilos del tamaño del texto
    color: materialTheme.palettes.primary[100], // Color del texto
    fontFamily: 'InterSemiBold', // Tipo de fuente
    fontWeight: '600', // Grosor del texto
  },
  text: {
    // Estilos del texto
    fontSize: hp('2.1%'), // Tamaño de la fuente
    textAlign: 'center', // Alineación del texto
  },
  title: {
    // Estilos del título
    color: materialTheme.palettes.primary[100], // Color del texto
    fontFamily: 'InterBold', // Tipo de fuente
    fontWeight: '300', // Grosor del texto
  },
});

export default styles; // Exporta los estilos
