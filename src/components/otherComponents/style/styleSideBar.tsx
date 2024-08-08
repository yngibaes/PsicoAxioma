import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import materialTheme from '../../../assets/material-theme.json';

const styles = StyleSheet.create({
    background: {
        backgroundColor: materialTheme.schemes.darkmediumcontrast.tertiaryContainer
    },
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
    iconContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: wp('1.5%'),
    },
    logoutContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: wp('8%'),
    },
    parentAll: {
        flex: 1
    },
    spaces: {
        backgroundColor: materialTheme.palettes.secondary[100],
        flex: 1,
        padding: wp('1%')
    },
    textLogOut: {
        color: materialTheme.palettes.secondary[100],
        fontFamily: 'InterBold',
        fontSize: wp('4%'),
        marginLeft: wp('2%')
    },
    userName: {
        color: materialTheme.palettes.secondary[100],
        fontFamily: 'InterBold',
        fontSize: wp('4.5%'),
        marginLeft: wp('2%')
    },
})

export default styles
