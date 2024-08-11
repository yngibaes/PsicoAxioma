import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import materialTheme from '../../../assets/material-theme.json';

const styles = StyleSheet.create({
    buttonLogOut: {
        borderTopColor: materialTheme.schemes.dark.errorContainer,
        borderTopWidth: 2,
        height: hp('6.5%'),
        paddingVertical: wp('1%'),
    },
    icon: {
        borderColor: materialTheme.schemes.darkmediumcontrast.background,
        borderRadius: 60,
        borderWidth: 3,
        height: hp('15.5%'),
        width: wp('30%'),
    },
    iconChild: {
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: hp('2%'),
    },
    iconContainer: {
        backgroundColor: materialTheme.schemes.darkmediumcontrast.secondaryContainer,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        height: hp('25%'), // La mitad de la altura del contenedor
        marginTop: hp('-0.5%'),
    },
    logoutContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: wp('10%'),
        marginTop: hp('1%'),
    },
    parentAll: {
        flex: 1,
        width: wp('68.1%'), // Ancho total del contenedor
    },
    spaces: {
        backgroundColor: materialTheme.palettes.secondary[100],
        flex: 1,
        padding: wp('1%')
    },
    text: {
        color: materialTheme.palettes.secondary[100],
        fontFamily: 'InterBold',
        marginLeft: wp('1%'),
        textAlign: 'center',
    },
    textChild: {
        flexDirection: 'column',
        width: wp('50%'), // Ancho del contenedor
    },
    textLogOut: {
        color: materialTheme.schemes.dark.errorContainer,
        fontFamily: 'InterBold',
        fontSize: wp('4%'),
        marginLeft: wp('2%'),
    },
    userEmail: {
        fontSize: wp('2.8%'),
    },
    userName: {
        fontSize: wp('4.5%'),
    },
})

export default styles
