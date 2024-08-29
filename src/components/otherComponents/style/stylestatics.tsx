import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import materialTheme from '../../../assets/material-theme.json';

const styles = StyleSheet.create({
  child: {
    backgroundColor: materialTheme.schemes.dark.outline,
    borderRadius: 10,
    marginTop: hp('2%'),
    width: wp('95%'),
  },
  container:{
    height: hp('100%'),
    width: wp('95%'),
  },
  textTitle:{
    color: materialTheme.palettes.primary[100],
    fontFamily: 'InterBold',
    fontSize: wp('4%'),
    fontWeight: 'bold',
    marginLeft: wp('3%'),
    marginTop: hp('1%'),
    textAlign: 'left',
  }
});

export default styles;
