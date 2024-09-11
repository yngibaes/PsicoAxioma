import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import colorTheme from "../../../assets/color-theme.json";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1, // Asegura que el contenedor ocupe todo el espacio disponible
    flexDirection: "column",
    height: hp("100%"),
  },
  date: {
    color: colorTheme.PsicoAxiomaColors.date,
    fontSize: wp("2.2%"),
    fontWeight: "bold",
    marginBottom: hp("0.5%"),
    textAlign: "left",
  },
  error: {
    color: colorTheme.PsicoAxiomaColors.error1,
    fontSize: wp("3%"),
  },
  flexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  goback: {
    alignItems: "center",
    backgroundColor: colorTheme.PsicoAxiomaColors.containerResult,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    height: hp("5%"),
    justifyContent: "center",
    width: wp("8.8%"),
  },
  input: {
    color: colorTheme.PsicoAxiomaColors.black,
    justifyContent: "center",
    marginLeft: wp("1%"),
    width: wp("65%"),
  },
  inputContent: {
    backgroundColor: colorTheme.PsicoAxiomaColors.cardDiary,
    borderRadius: 20,
    color: colorTheme.PsicoAxiomaColors.black,
    marginLeft: wp("5%"),
    padding: wp("3%"),
    width: wp("90%"),
  },
  label: {
    borderBottomWidth: 1,
    color: colorTheme.PsicoAxiomaColors.black,
    fontFamily: "InterMedium",
    fontSize: wp("4.5%"),
    fontWeight: "100",
    height: hp("5%"),
    textAlign: "left",
  },
  labelContent: {
    color: colorTheme.PsicoAxiomaColors.black,
    fontFamily: "InterMedium",
    fontSize: wp("5%"),
    fontWeight: "thin",
    textAlign: "left",
  },
  labelText: {
    color: colorTheme.PsicoAxiomaColors.black,
    fontFamily: "InterMedium",
    fontSize: wp("4.5%"),
    fontWeight: "100",
    height: hp("5%"),
    marginTop: hp("1%"),
    textAlign: "left",
  },
  parentForm: {
    flexGrow: 1,
    marginBottom: hp("5%"),
    width: wp("100%"),
  },
  parentTopBar: {
    alignItems: "center",
    height: hp("8%"),
    justifyContent: "space-between",
    marginTop: hp("1.5%"),
    paddingHorizontal: wp("1%"),
    position: "static",
    width: wp("95%"),
    zIndex: 2, // Asegura que el topbar esté por encima del contenido scrollable
  },
  scrollableContent: {
    flexGrow: 1,
  },
});

export default styles;
