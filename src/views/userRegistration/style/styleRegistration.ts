import { StyleSheet } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import materialTheme from '../../../assets/material-theme.json' // Ajusta la ruta según tu estructura de archivos

// Definición de los estilos
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
    divForm: {
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: materialTheme.palettes.tertiary[70],
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: hp('56%'),
        marginTop: hp('5%'),
        overflow: 'hidden',
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
    parentEll: {
        // Estilos del contenedor principal
        alignItems: 'center', // Alineación de los elementos
        backgroundColor: materialTheme.palettes.tertiary[70], // Color de fondo
        flex: 1, // Tamaño del contenedor
        flexDirection: 'column', //	Orden de los elementos
        height: hp('100%'), // Altura del contenedor
        justifyContent: 'space-evenly', // Alineación de los elementos
        overflow: 'hidden', // Ocultar elementos que sobresalgan
        width: wp('100%'), // Ancho del contenedor
    },
    parentForm: {
        height: hp('100%'),
        overflow: 'hidden',
        width: wp('100%'),
    },
})

export default styles
