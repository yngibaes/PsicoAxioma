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
  childScore: {
    alignItems: "center",
    flexDirection: "row",
    width: wp("33%"), // Ajusta el ancho para que ocupe un tercio del contenedor
  },
  childScores:{
    alignSelf: "center",
    backgroundColor: colorTheme.PsicoAxiomaColors.parentStatistics,
    borderRadius: 10,
    flexDirection: "row", // Asegura que los elementos hijos se alineen en fila
    flexWrap: "wrap", // Permite que los elementos hijos se envuelvan a la siguiente línea
    justifyContent: "center",
    marginTop: hp("3%"),
    width: wp("93%"),
  },
  container: {
    marginBottom: hp("4%"),
    width: wp("100%"),
  },
  dot: {
    borderRadius: 5,
    height: wp("2.5%"),
    marginRight: wp("1%"),
    width: wp("2.5%"),
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
  maxScoreView: {
    alignItems: "center",
    justifyContent: "center",
  },
  parentLine: {
    alignItems: "center",
    flex: 1,
    height: hp("40%"),
    justifyContent: "center",
    marginTop: hp("1%"),
    zIndex: 10,
  },
  parentLinePie: {
    alignItems: "center",
    flex: 1,
    height: hp("50%"),
    justifyContent: "center",
    marginTop: hp("1%"),
    zIndex: 10,
  },
  parentScore:{
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: hp("1%"),
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
  textProm:{
    color: colorTheme.PsicoAxiomaColors.formTextSignUp,
    fontFamily: "InterBold",
    fontSize: wp("2.5%"),
    fontWeight: "200",
    marginLeft: wp("3%"),
    marginTop: hp("1%"),
    textAlign: "left",
  },
  textScore: {
    color: colorTheme.PsicoAxiomaColors.black,
    fontFamily: "InterBold",
    fontSize: wp("5.5%"),
  },
  textScoreLabel: {
    color: colorTheme.PsicoAxiomaColors.black,
    fontFamily: "InterBold",
    fontSize: wp("3%"),
    textDecorationLine: "underline",
  },
  textTitle: {
    color: colorTheme.PsicoAxiomaColors.black,
    fontFamily: "InterBold",
    fontSize: wp("3.5%"),
    fontWeight: "200",
    marginLeft: wp("3%"),
    textAlign: "left",
  },
});

export default styles;
