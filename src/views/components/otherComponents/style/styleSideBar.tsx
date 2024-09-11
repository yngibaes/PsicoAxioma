import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import colorTheme from "../../../assets/color-theme.json";

const styles = StyleSheet.create({
  buttonLogOut: {
    borderTopColor: colorTheme.PsicoAxiomaColors.error1,
    borderTopWidth: 2,
    height: hp("6.5%"),
    paddingVertical: wp("1%"),
  },
  icon: {
    alignItems: "center",
    borderColor: colorTheme.PsicoAxiomaColors.backgroundPrincipal,
    borderRadius: 60,
    borderWidth: 3,
    height: hp("16%"),
    justifyContent: "center",
    width: wp("32%"),
  },
  iconChild: {
    alignItems: "center",
    flexDirection: "column",
    marginTop: hp("2%"),
  },
  iconContainer: {
    backgroundColor: colorTheme.PsicoAxiomaColors.iconPhotoProfile,
    borderRadius: 20,
    height: hp("26.5%"), // La mitad de la altura del contenedor
    marginHorizontal: wp("1%"),
    overflow: "hidden",
  },
  logoutContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginLeft: wp("10%"),
    marginTop: hp("1%"),
  },
  parentAll: {
    flex: 1,
    /* width: wp('68.1%'), // Ancho total del contenedor */
  },
  spaces: {
    backgroundColor: colorTheme.PsicoAxiomaColors.white,
    flex: 1,
    padding: wp("1%"),
  },
  text: {
    color: colorTheme.PsicoAxiomaColors.white,
    fontFamily: "InterBold",
    marginLeft: wp("1%"),
    textAlign: "center",
  },
  textChild: {
    flexDirection: "column",
    marginTop: hp("1%"),
  },
  textLogOut: {
    color: colorTheme.PsicoAxiomaColors.error1,
    fontFamily: "InterBold",
    fontSize: wp("4%"),
    marginLeft: wp("2%"),
  },
  userEmail: {
    fontSize: wp("3%"),
  },
  userName: {
    fontSize: wp("5%"),
  },
});

export default styles;
