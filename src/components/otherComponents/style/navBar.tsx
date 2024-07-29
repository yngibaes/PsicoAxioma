import { StyleSheet } from 'react-native' // Importación de la librería react-native
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import materialTheme from '../../../assets/material-theme.json' // Ajusta la ruta según tu estructura de archivos

const style = StyleSheet.create({
    nav: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: materialTheme.schemes.darkhighcontrast.secondaryContainer,
        height: hp('10%'),
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        width: wp('100%')
    },
    option: {
        width: wp('16%'),
        height: hp('10%'),
        overflow: "hidden",
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1
    },
    icon: {
        width: wp('10%'),
        overflow: "hidden",
    },
    ellipse: {
		backgroundColor: materialTheme.schemes.darkhighcontrast.tertiaryFixed,
        borderRadius: 20,
        height: hp('5%'),
        width: wp('10%'),
        alignItems: 'center'
	},
})

export default style