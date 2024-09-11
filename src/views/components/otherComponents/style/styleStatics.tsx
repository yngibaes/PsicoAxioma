import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import colorTheme from "../../../assets/color-theme.json";

const styles = StyleSheet.create({
  child: {
    alignSelf: "center",
    backgroundColor: colorTheme.PsicoAxiomaColors.parentStatistics,
    borderRadius: 10,
    marginTop: hp("3%"),
    width: wp("95%"),
  },
  container: {
    marginBottom: hp("4%"),
    width: wp("100%"),
  },
  dot:{
    borderRadius: 5,
    height: wp('2.5%'),
    marginRight: wp('1%'),
    width: wp('2.5%'),
  },
  labelLine: {
    color: colorTheme.PsicoAxiomaColors.black,
    fontFamily: "InterBold",
    fontSize: wp("2%"),
    fontWeight: "200",
    textAlign: "center",
    width: wp("10.5%"),
  },
  labelParent: {
    alignItems: "center",
    flexDirection: "column",
    marginLeft: wp("-10%"),
    marginTop: hp("-0.3%"),
    padding: wp("1%"),
    width: wp("25%"),
  },
  parentLine: {
    alignItems: "center",
    flex: 1,
    height: hp("40%"),
    justifyContent: "center",
    marginTop: hp("1%"),
    zIndex: 10
  },
  score: {
    backgroundColor: colorTheme.PsicoAxiomaColors.textStatistics,
    borderRadius: 10,
    fontFamily: "InterBold",
    fontSize: wp("2%"),
    fontWeight: "200",
    padding: wp("1%"),
  },
  textLabel: {
    color: colorTheme.PsicoAxiomaColors.black,
    fontWeight: "bold",
  },
  textNumber: {
    color: colorTheme.PsicoAxiomaColors.black,
    fontFamily: "InterBold",
    fontSize: wp("2%"),
    fontWeight: "200",
    textAlign: "center",
  },
  textTitle: {
    color: colorTheme.PsicoAxiomaColors.black,
    fontFamily: "InterBold",
    fontSize: wp("3.5%"),
    fontWeight: "200",
    marginLeft: wp("3%"),
    marginTop: hp("2%"),
    textAlign: "left",
  },
});

export default styles;
