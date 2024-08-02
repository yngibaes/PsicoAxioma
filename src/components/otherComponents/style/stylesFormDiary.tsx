import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import materialTheme from '../../../assets/material-theme.json';

const styles = StyleSheet.create({
    input: {
        color: materialTheme.palettes.primary[0],
        height: hp('100%'),
        marginLeft: wp('5%'),
        width: wp('90%'),
    },
    label: {
        color: materialTheme.palettes.primary[0],
        fontFamily: 'InterMedium',
        fontSize: wp('5%'),
        fontWeight: '500',
        textAlign: 'left',
    },
    parentForm: {
        height: hp('80%'),
        width: wp('100%'),
    },
})

export default styles
