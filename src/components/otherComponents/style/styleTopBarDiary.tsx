import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import materialTheme from '../../../assets/material-theme.json';

const styles = StyleSheet.create({
  flexBox: {
    alignItems: "center",
    flexDirection: "row"
  },
  goback: {
    backgroundColor: materialTheme.schemes.darkmediumcontrast.tertiary,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    height: hp('4.5%'),
    justifyContent: 'center',
    width: wp('8.2%')
  },
  input: {
    color: materialTheme.palettes.primary[0],
    marginLeft: wp('1%'),
    width: wp('65%'),
  },
  label: {
    color: materialTheme.palettes.primary[0],
    fontFamily: 'InterMedium',
    fontSize: wp('5%'),
    fontWeight: '200',
    textAlign: 'left',
  },
  parentTopBar: {
    flex: 1,
    height: hp('2%'),
    justifyContent: "space-between",
    paddingHorizontal: wp('1%'),
    width: wp("90%"),
  },
});
export default styles
