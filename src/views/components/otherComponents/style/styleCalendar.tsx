import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import colorTheme from "../../../assets/color-theme.json";

const styles = StyleSheet.create({
  border: {
    borderRadius: 20,
  },
  calendary: {
    alignSelf: "center",
    padding: wp("2%"),
  },
  calendaryHome: {
    alignSelf: "center",
    borderRadius: 20,
    marginTop: hp("2%"),
    padding: wp("2%"),
    width: wp("90%"),
  },
  section: {
    backgroundColor: colorTheme.PsicoAxiomaColors.backgroundCalendar,
    color: colorTheme.PsicoAxiomaColors.error1,
    textTransform: "capitalize",
  },
});

export default styles;
