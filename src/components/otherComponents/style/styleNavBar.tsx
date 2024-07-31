import { StyleSheet } from 'react-native' // Importación de la librería react-native
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import materialTheme from '../../../assets/material-theme.json' // Ajusta la ruta según tu estructura de archivos

const styles = StyleSheet.create({
    ellipse: {
        alignItems: 'center',
        backgroundColor: materialTheme.schemes.darkmediumcontrast.secondaryContainer,
        borderRadius: 30,
        height: hp('5%'),
        justifyContent: 'center',
        width: wp('12%'),
    },
    nav: {
        alignItems: "center",
        backgroundColor: materialTheme.schemes.darkmediumcontrast.secondary,
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        flexDirection: "row",
        height: hp('6.5%'),
        width: wp('100%')
    },
    option: {
        alignItems: 'center',
        height: hp('5%'),
        justifyContent: 'center',
        marginHorizontal: wp('3.8%'),
        overflow: "hidden",
        width: wp('12%'),
        /*borderColor: 'black',
        borderWidth: 1 */
    },
})

export default styles