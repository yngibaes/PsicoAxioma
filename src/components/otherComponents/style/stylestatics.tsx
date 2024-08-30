import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import materialTheme from "../../../assets/material-theme.json";

const styles = StyleSheet.create({
  child: {
    alignSelf: "center",
    backgroundColor: materialTheme.schemes.dark.outline,
    borderRadius: 10,
    marginTop: hp("3%"),
    width: wp("95%"),
  },
  container: {
    marginBottom: hp("4%"),
    width: wp("100%"),
  },
  labelLine: {
    color: materialTheme.palettes.primary[0],
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
    marginTop: hp("-0.5%"),
    padding: wp("1%"),
    width: wp("25%"),
  },
  parentLine: {
    alignItems: "center",
    flex: 1,
    height: hp("40%"),
    justifyContent: "center",
    marginTop: hp("1%"),
  },
  score: {
    backgroundColor: materialTheme.palettes.tertiary[80],
    borderRadius: 10,
    fontFamily: "InterBold",
    fontSize: wp("2%"),
    fontWeight: "200",
    padding: wp("1%"),
  },
  textLabel: {
    color: materialTheme.palettes.primary[0],
    fontWeight: "bold",
  },
  textNumber: {
    color: materialTheme.palettes.primary[0],
    fontFamily: "InterBold",
    fontSize: wp("2%"),
    fontWeight: "200",
    textAlign: "center",
  },
  textTitle: {
    color: materialTheme.palettes.primary[0],
    fontFamily: "InterBold",
    fontSize: wp("3.5%"),
    fontWeight: "200",
    marginLeft: wp("3%"),
    marginTop: hp("2%"),
    textAlign: "left",
  },
});

export default styles;
