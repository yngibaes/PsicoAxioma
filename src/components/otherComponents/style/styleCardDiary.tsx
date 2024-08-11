import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import materialTheme from '../../../assets/material-theme.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  date: {
    color: materialTheme.schemes.darkmediumcontrast.date,
    fontSize: wp('2.2%'),
    fontWeight: 'bold',
    marginBottom: hp('0.5%'),
    textAlign: 'left',
  },
  description: {
    alignItems: 'center',
    color: materialTheme.schemes.darkmediumcontrast.surfaceContainerHighest,
    fontFamily: 'InterRegular',
    fontSize: wp('3%'),
    textAlign: 'left',
  },
  error: {
    color: materialTheme.schemes.darkmediumcontrast.errorContainer,
    fontSize: wp('4%'),
  },
  parentAll: {
    alignItems: 'flex-start',
    backgroundColor: materialTheme.palettes.tertiary[100],
    borderRadius: 10,
    flex: 1,
    height: hp('15%'),
    marginBottom: hp('2%'),
    paddingHorizontal: wp('2.1%'),
    paddingVertical: hp('2.1%'),
    width: wp('85%'),
  },
  parentDate: {
    alignSelf: 'stretch',
    marginLeft: hp('3.3%'),
  },
  parentDescri: {
    paddingLeft: wp('6.1%'),
    width: wp('80%'),
  },
  parentTitle: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    paddingHorizontal: hp('0.5%'),
  },
  title: {
    color: materialTheme.palettes.tertiary[0],
    fontFamily: 'InterBold',
    fontSize: wp('4.2%'),
    fontWeight: '400',
    marginLeft: wp('1.5%'),
    textAlign: 'left',
  },
})

export default styles
