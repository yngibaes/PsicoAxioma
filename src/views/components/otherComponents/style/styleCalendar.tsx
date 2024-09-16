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
    borderRadius: wp(2),
    marginTop: hp("2%"),
    padding: wp("2%"),
    width: wp("90%"),
  },
  container: {
    backgroundColor: colorTheme.PsicoAxiomaColors.white,
    padding: wp(4),
  },
  loading: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  resultDate: {
    color: colorTheme.PsicoAxiomaColors.iconPhotoProfile,
    fontSize: wp('3.5%'),
    fontWeight: "200",
  },
  resultItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  resultName: {
    color: colorTheme.PsicoAxiomaColors.black,
    fontSize: wp('4%'),
    fontWeight: "400",
    textDecorationLine: "underline",
  },
  resultText: {
    fontFamily: 'InterBold',
  },
  resultsContainer: {
    marginVertical: wp('1%'),
  },
  section: {
    backgroundColor: colorTheme.PsicoAxiomaColors.registrationContainer,
    color: colorTheme.PsicoAxiomaColors.white,
    fontSize: wp('3.5%'),
  },
});

export default styles;
