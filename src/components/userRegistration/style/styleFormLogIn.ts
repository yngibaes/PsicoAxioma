import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import materialTheme from '../../../assets/material-theme.json';

// Definición de los estilos
const styles = StyleSheet.create({
  divForget: {
    height: hp('3%'),
    marginBottom: hp('5.5%'),
    marginTop: hp('0.9%'),
    width: wp('80%'),
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
  input: {
    // Estilos del input
    backgroundColor: materialTheme.palettes.primary[100], // Color de fondo
    borderColor: materialTheme.schemes.darkhighcontrast.secondaryContainer, // Color del borde
    borderRadius: 15, // Radio del borde
    borderStyle: 'solid', // Estilo del borde
    borderWidth: 1, // Ancho del border
    color: materialTheme.palettes.primary[0], // Color del texto
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
    color: materialTheme.palettes.primary[0], // Color del texto
    fontFamily: 'InterMedium', // Tipo de fuente
    fontSize: wp('3.9%'), // Tamaño de la fuente
    fontWeight: '200', // Grosor del texto
    lineHeight: 19, // Altura de la línea
    marginLeft: wp('1%'), // Margen izquierdo
    textAlign: 'left', // Alineación del texto
  },
  parentForm: {
    // Estilos del contenedor del formulario
    alignItems: 'center', // Alineación de los elementos
    alignSelf: 'stretch', // Ajuste del contenedor
    height: hp('60%'), // Altura del contenedor
    marginTop: hp('3%'), // Margen superior
    overflow: 'hidden', // Ocultar elementos que sobresalgan
  },
  parentInput: {
    // Estilos del contenedor del input
    alignItems: 'center', // Alineación de los elementos
    flexDirection: 'column', // Orden de los elementos
    width: wp('100%'), // Ancho del contenedor
  },
  sizeInput: {
    // Estilos del tamaño del input
    height: hp('8%'), // Altura del input
  },
  text: {
    color: materialTheme.palettes.primary[0], // Color del texto
    fontFamily: 'InterSemiBold',
    fontSize: wp('3.5%'),
    fontWeight: '600',
    textAlign: 'right',
  },
})

export default styles // Exporta los estilos
