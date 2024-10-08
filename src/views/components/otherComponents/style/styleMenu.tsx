import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import colorTheme from "../../../assets/color-theme.json";

const styles = StyleSheet.create({
  hello: {
    fontFamily: "InterRegular",
  },
  layout: {
    alignItems: "center",
    flexDirection: "row",
  },
  name: {
    fontFamily: "InterBold",
    fontWeight: "200",
  },
  parentAll: {
    alignItems: "center",
    marginTop: hp("2%"),
    minWidth: wp("50%"),
    paddingLeft: 20,
    paddingVertical: 5,
    width: wp("100%"),
  },
  textParent: {
    color: colorTheme.PsicoAxiomaColors.black,
    fontSize: wp("4%"),
    height: hp("5.5%"),
    marginLeft: wp("2%"),
    paddingTop: hp("1%"),
    textAlign: "left",
    width: wp("50%"),
    zIndex: 1,
  },
  userIcon: {
    borderRadius: 80,
    height: hp("7%"),
    width: hp("7%"),
  },
});

export default styles;
