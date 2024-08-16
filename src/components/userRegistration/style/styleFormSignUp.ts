import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import materialTheme from '../../../assets/material-theme.json';

// Definición de los estilos
const styles = StyleSheet.create({
  Input: {
    // Estilos del input
    backgroundColor: materialTheme.palettes.primary[100], // Color de fondo
    borderColor: materialTheme.schemes.darkhighcontrast.secondaryContainer, // Color del borde
    borderRadius: 15, // Radio del borde
    borderStyle: 'solid', // Estilo del borde
    borderWidth: 1, // Ancho del border
    color: materialTheme.palettes.secondary[0], // Color del texto
    elevation: 2, // Elevación
    flexDirection: 'row', // Orden de los elementos
    marginTop: hp('0.5%'), // Margen superior
    paddingHorizontal: '4%', // Relleno horizontal
    shadowOffset: {
      // Desplazamiento de la sombra
      width: 0, // Ancho
      height: 1, // Altura
    },
    shadowOpacity: 1, // Opacidad de la sombra
    shadowRadius: 2, // Radio de la sombra
    width: wp('80%'), // Ancho
  },
  button: {
    // Estilos del botón
    fontSize: wp('8%'), // Tamaño de la fuente, 15% del ancho de la pantalla
    textAlign: 'center',
  },
  divButton: {
    // Estilos del contenedor de los botones
    alignItems: 'center',
    marginTop: hp('2%'),
    width: wp('94%'), // Ancho del contenedor
  },
  divInput: {
    // Estilos del contenedor del input del formulario
    marginTop: hp('1.5%'), // Margen superior
    paddingHorizontal: wp('5%'), // Relleno horizontal
    width: wp('90%'), // Ancho del contenedor
  },
  divLabel: {
    alignItems: 'center', // Alinea los elementos hijos al centro
    flexDirection: 'row', // Alinea los elementos hijos en fila
    width: wp('59%'), // Ancho del contenedor
  },
  error: {
    color: materialTheme.schemes.dark.errorContainer,
    fontSize: wp('2.6%'),
    fontWeight: 'bold',
    paddingHorizontal: wp('1.5%'),
  },
  label: {
    // Estilos de la etiqueta
    color: materialTheme.palettes.primary[0], // Color del texto
    fontFamily: 'InterMedium', // Tipo de fuente
    fontSize: wp('3.5%'), // Tamaño de la fuente
    fontWeight: '200', // Grosor del texto
    textAlign: 'left', // Alineación del texto
    width: wp('90%'), // Ancho de la etiqueta
  },
  labelForm: {
    // Estilos de la etiqueta del formulario
    color: materialTheme.palettes.primary[20], // Color del texto
    fontFamily: 'InterMedium', // Tipo de fuente
    fontSize: wp('3.9%'), // Tamaño de la fuente
    fontWeight: '500', // Grosor del texto
    lineHeight: 19, // Altura de la línea
    marginLeft: wp('1%'), // Margen izquierdo
    textAlign: 'left', // Alineación del texto
  },
  parentButton: {
    // Estilos del contenedor del botón de inicio de sesión
    alignItems: 'center',
    backgroundColor: materialTheme.palettes.secondary[20],
    borderRadius: 10, // Radio de las esquinas del botón
    height: hp('8%'),
    justifyContent: 'center',
    marginTop: hp('0.5%'), // Margen superior
    overflow: 'hidden', //Ocultar elementos que sobresalgan
    width: wp('32%'), // Ancho del botón
  },
  parentForm: {
    alignItems: 'center',
    height: hp('70%'),
    marginBottom: hp('2.5%'), // Margen inferior
    marginTop: hp('8.1%'), // Margen superior
    overflow: 'hidden',
    paddingHorizontal: 5,
    paddingVertical: 9,
    width: wp('100%'),
  },
  parentInput: {
    // Estilos del contenedor del input
    alignItems: 'center', // Alineación de los elementos
    flexDirection: 'column', // Orden de los elementos
    width: wp('100%'), // Ancho del contenedor
  },
  sizeInput: {
    // Estilos del tamaño del input
    height: hp('6%'), // Altura del input
  },
  title: {
    // Estilos del título
    color: materialTheme.palettes.primary[100], // Color del texto
    fontFamily: 'InterBold',
    fontSize: wp('6.6%'),
    fontWeight: '300', // Grosor del texto
  },
});

export default styles;
