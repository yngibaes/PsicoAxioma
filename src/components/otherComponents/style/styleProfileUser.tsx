import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import materialTheme from "../../../assets/material-theme.json";

const styles = StyleSheet.create({
  buttonDelete: {
    alignItems: "center",
    backgroundColor: materialTheme.schemes.darkmediumcontrast.errorContainer,
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
    backgroundColor: materialTheme.schemes.darkmediumcontrast.card,
    borderRadius: 10,
    color: materialTheme.palettes.secondary[0],
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
    color: materialTheme.palettes.secondary[100],
    fontFamily: "InterBold",
    fontSize: wp("3.5%"),
    marginLeft: wp("1%"),
  },
  textName: {
    color: materialTheme.palettes.secondary[0],
    fontFamily: "InterBold",
    fontSize: wp("5%"),
    fontWeight: "300",
    textDecorationColor: materialTheme.palettes.secondary[0],
    textDecorationLine: "underline",
  },
  textTitle: {
    color: materialTheme.palettes.secondary[0],
    fontFamily: "InterBold",
    fontSize: wp("4.5%"),
    fontWeight: "300",
    marginHorizontal: wp("1.5%"),
  },
  userPhoto: {
    borderColor: materialTheme.schemes.darkmediumcontrast.another,
    borderRadius: 80,
    borderWidth: 5,
    height: hp("19%"),
    width: wp("40%"),
  },
});

export default styles;
