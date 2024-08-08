import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import materialTheme from '../../../assets/material-theme.json';

const styles = StyleSheet.create({
    background: {
        backgroundColor: materialTheme.schemes.darkmediumcontrast.tertiary
    },
    backgroundImage: {
        padding: 16,
        paddingTop: 48,
        width: undefined,
    },
    buttonLogOut: {
        borderTopColor: materialTheme.schemes.darkmediumcontrast.surface,
        borderTopWidth: 1,
        padding: 20,
    },
    icon: {
        borderRadius: 40,
        height: 80,
        marginBottom: 10,
        width: 80,
    },
    parentAll: {
        flex: 1
    },

    spaces: {
        backgroundColor: materialTheme.palettes.secondary[100],
        flex: 1,
        padding: 10
    },
    textLogOut: {
        color: materialTheme.palettes.secondary[0],
        fontFamily: 'InterBold',
        fontSize: 16,
    },
    userName: {
        color: materialTheme.palettes.secondary[0],
        fontFamily: 'InterBold',
        fontSize: 18,
    },
})

export default styles
