import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import materialTheme from '../../../assets/material-theme.json';

const styles = StyleSheet.create({
    buttonLogOut: {
        backgroundColor: materialTheme.schemes.dark.errorContainer,
        height: hp('6.5%'),
        paddingVertical: wp('4%'),
    },
    icon: {
        borderRadius: 40,
        height: hp('15%'),
        width: wp('28%'),
    }, 
    iconChild:{
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: wp('0.5%'),
        marginTop: hp('2%'),
    },
    iconContainer: {
        backgroundColor: materialTheme.schemes.darkmediumcontrast.tertiaryContainer,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        height: hp('20%'), // La mitad de la altura del contenedor
        marginTop: hp('-0.5%'),
    },
    logoutContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: wp('10%'),
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
        marginLeft: wp('1%')
    },
    textChild: {
        flexDirection: 'column',
        width: wp('38%'), // Ancho del contenedor
    },
    textLogOut: {
        color: materialTheme.palettes.secondary[100],
        fontFamily: 'InterBold',
        fontSize: wp('4%'),
        marginLeft: wp('2%')
    },
    userEmail:{
        fontSize: wp('2.8%'),
    },
    userName:{
        fontSize: wp('4.5%'),
    },
})

export default styles
