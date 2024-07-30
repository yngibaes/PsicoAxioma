import { StyleSheet } from 'react-native' // Importación de la librería react-native
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import materialTheme from '../../../assets/material-theme.json' // Ajusta la ruta según tu estructura de archivos

const styles = StyleSheet.create({
    cardImage: {
        borderRadius: 8,
        height: hp('100%'),
        width: wp('100%'),
    },
    cardInfo: {
        backgroundColor: materialTheme.schemes.darkmediumcontrast.surfaceContainerHighest,
        borderRadius: 8,
        elevation: 1,
        margin: 10,
        padding: 10,
        shadowOpacity: 0.25,
        shadowRadius: 5,
    },
    cardText: {
        fontSize: 14,
        marginTop: 5,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
});

export default styles