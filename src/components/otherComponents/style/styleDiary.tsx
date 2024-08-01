import { StyleSheet } from 'react-native' // Importación de la librería react-native
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import materialTheme from '../../../assets/material-theme.json' // Ajusta la ruta según tu estructura de archivos

const styles = StyleSheet.create({
    childText: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: hp('2.5%'),
        width: wp('80%'),
    },
    icon: {
        width: wp('10%')
    },
    parentDiary: {
        alignItems: "center",
        backgroundColor: materialTheme.schemes.darkmediumcontrast.tertiary,
        borderRadius: 10,
        justifyContent: "center",
        marginTop: hp('2%'),
        overflow: "hidden",
        paddingBottom: hp('2%'),
        width: wp('100%')
    },
    text: {
        alignItems: "center",
        color: materialTheme.palettes.tertiary[0],
        fontFamily: "InterBold",
        fontSize: 32,
        fontWeight: "200",
        textAlign: "left",
    },
});

export default styles