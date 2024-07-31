import { StyleSheet } from 'react-native' // Importación de la librería react-native
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import materialTheme from '../../../assets/material-theme.json' // Ajusta la ruta según tu estructura de archivos

const styles = StyleSheet.create({
    date: {
        color: materialTheme.palettes.secondary[10],
        fontSize: 10,
        textAlign: "left",
    },
    description: {
        alignItems: "center",
        color: materialTheme.schemes.darkmediumcontrast.surfaceContainerHighest,
        fontFamily: "InterRegular",
        fontSize: 11,
        textAlign: "left",
    },
    parentAll: {
        alignItems: "center",
        backgroundColor: materialTheme.palettes.tertiary[100],
        borderRadius: 10,
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 9,
        paddingVertical: 10,
        width: wp('85%'),
    },
    parentDate: {
        alignSelf: 'stretch',
        marginLeft: hp('3%')
    },
    parentDescri: {
       height: hp('10%'),
       paddingLeft: wp('5.9%'),
       width: wp('80%'),
    },
    parentTitle: {
        alignItems: "center",
        alignSelf: "stretch",
        flexDirection: "row",
        paddingHorizontal: hp('0.5%'),
    },
    title: {
        color: materialTheme.palettes.tertiary[0],
        fontFamily: "InterBold",
        fontSize: 16,
        fontWeight: "400",
        marginLeft: wp('1.5%'),
        textAlign: "left",
    },
});

export default styles