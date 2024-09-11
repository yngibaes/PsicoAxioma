import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import colorTheme from "../../../assets/color-theme.json";

const styles = StyleSheet.create({
  buttonDelete: {
    alignItems: "center",
    backgroundColor: colorTheme.PsicoAxiomaColors.error1,
    borderRadius: 20,
    height: hp("6%"),
    justifyContent: "center",
    marginTop: hp("2%"),
    width: wp("40%"),
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: wp("100%"),
  },
  deleteContainer: {
    flexDirection: "row",
  },
  imageContainer: {
    alignItems: "center",
    height: hp("25%"),
    justifyContent: "center",
    width: wp("50%"),
  },
  parentText: {
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    backgroundColor: colorTheme.PsicoAxiomaColors.card,
    borderRadius: 10,
    color: colorTheme.PsicoAxiomaColors.black,
    fontFamily: "Inter",
    fontSize: wp("4.2%"),
    marginTop: hp("1.5%"),
    padding: 10,
    width: wp("70%"),
  },
  textContainer: {
    justifyContent: "center",
    marginVertical: hp("3.1%"),
  },
  textDelete: {
    color: colorTheme.PsicoAxiomaColors.white,
    fontFamily: "InterBold",
    fontSize: wp("3.5%"),
    marginLeft: wp("1%"),
  },
  textName: {
    color: colorTheme.PsicoAxiomaColors.black,
    fontFamily: "InterBold",
    fontSize: wp("5%"),
    fontWeight: "300",
    textDecorationColor: colorTheme.PsicoAxiomaColors.black,
    textDecorationLine: "underline",
  },
  textTitle: {
    color: colorTheme.PsicoAxiomaColors.black,
    fontFamily: "InterBold",
    fontSize: wp("4.5%"),
    fontWeight: "300",
    marginHorizontal: wp("1.5%"),
  },
  userPhoto: {
    borderColor: colorTheme.PsicoAxiomaColors.borderColorIconProfile,
    borderRadius: 80,
    borderWidth: 5,
    height: hp("19%"),
    width: wp("40%"),
  },
});

export default styles;
