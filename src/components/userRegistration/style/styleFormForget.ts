import { StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import materialTheme from '../../../assets/material-theme.json' // Ajusta la ruta según tu estructura de archivos

// Definición de los estilos
const styles = StyleSheet.create({
  Input: {
    // Estilos del input
    backgroundColor: materialTheme.palettes.primary[100], // Color de fondo
    borderColor: materialTheme.schemes.darkhighcontrast.secondaryContainer, // Color del borde
    borderRadius: 15, // Radio del borde
    borderStyle: 'solid', // Estilo del borde
    borderWidth: 1, // Ancho del border
    color: materialTheme.palettes.primary[0], // Color del texto
    elevation: 2, // Elevación
    flexDirection: 'row', // Orden de los elementos
    marginTop: hp('1%'), // Margen superior
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
  childEmail: {
    borderRadius: 30,
    paddingHorizontal: wp('0.5%'), // Relleno horizontal
    paddingTop: hp('0.5%'), // Relleno superior 
  },
  divLabel: {
    color: materialTheme.palettes.primary[0], // Color del texto
    width: wp('80%'), // Ancho de la etiqueta 
  },
  label: {
    color: materialTheme.palettes.primary[0], // Color del texto
    fontFamily: 'InterMedium', // Tipo de fuente
    fontSize: wp('3.5%'), // Tamaño de la fuente
    fontWeight: '200', // Grosor del texto
    textAlign: 'left', // Alineación del texto
    width: wp('90%'), // Ancho de la etiqueta
  },
  labelText: {
    fontFamily: 'InterMedium',
    fontSize: wp('3.8%'),
    fontWeight: '200',
    textAlign: 'left',
  },
  parentEmail: {
    height: hp('30%'), // Altura del contenedor 
    overflow: 'hidden', // Ocultar elementos que sobresalen
    width: wp('80%'), // Ancho del contenedor
    alignItems: 'center', // Alineación de los elementos
  },
  sizeInput: {
    height: hp('7%'), // Altura del input
  },
  button: {
    // Estilos del botón
    fontSize: wp('8%'), // Tamaño de la fuente, 15% del ancho de la pantalla
    textAlign: 'center',
  },
  divButton: {
    marginTop: hp('2%'), // Margen superior
    // Estilos del contenedor de los botones
    alignItems: 'center',
    width: wp('94%'), // Ancho del contenedor
  },
  parentButton: {
    // Estilos del contenedor del botón de inicio de sesión
    alignItems: 'center',
    borderRadius: 10, // Radio de las esquinas del botón
    justifyContent: 'center',
    overflow: 'hidden', // Ocultar elementos que sobresalgan
    backgroundColor: materialTheme.palettes.secondary[20], // Color de fondo
    width: wp('26%'), // Ancho del contenedor
    height: hp('7%'), // Altura del contenedor
  },
  title: {
    // Estilos del título
    color: materialTheme.palettes.primary[100], // Color del texto
    fontSize: wp('5.6%'), // Tamaño de la fuente
    fontFamily: 'InterBold',
    fontWeight: '300', // Grosor del texto
  },
})

export default styles
