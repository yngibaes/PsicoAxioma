import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import materialTheme from "../../../assets/material-theme.json";

const styles = StyleSheet.create({
  childText: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: hp("1.5%"),
    width: wp("85%"),
  },
  icon: {
    width: wp("10%"),
  },
  parentDiary: {
    alignItems: "center",
    backgroundColor: materialTheme.schemes.darkmediumcontrast.tertiary,
    borderRadius: 30,
    justifyContent: "center",
    marginBottom: hp("2%"),
    marginTop: hp("2%"),
    overflow: "hidden",
    paddingBottom: hp("2%"),
    width: wp("95%"),
  },
  text: {
    alignItems: "center",
    color: materialTheme.palettes.tertiary[0],
    fontFamily: "InterBold",
    fontSize: wp("9%"),
    fontWeight: "200",
    textAlign: "left",
  },
});

export default styles;
