import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import colorTheme from "../../../assets/color-theme.json";

const styles = StyleSheet.create({
  cardImage: {
    borderRadius: 8,
    height: hp("20%"),
    width: wp("100%"),
  },
  cardInfo: {
    backgroundColor: colorTheme.PsicoAxiomaColors.card,
    borderRadius: 8,
    elevation: 1,
    margin: wp("3%"),
    padding: 10,
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  cardText: {
    color: colorTheme.PsicoAxiomaColors.black,
    fontSize: wp("3.5%"),
    marginLeft: wp("1%"),
    marginTop: hp("1%"),
  },
  cardTitle: {
    color: colorTheme.PsicoAxiomaColors.black,
    fontFamily: "InterBold",
    fontSize: wp("6.5%"),
    fontWeight: "200",
    marginTop: hp("1.3%"),
  },
  layout: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
