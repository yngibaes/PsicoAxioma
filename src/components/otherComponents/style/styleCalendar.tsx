import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import materialTheme from "../../../assets/material-theme.json";

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
    backgroundColor: materialTheme.schemes.light.background,
    color: materialTheme.schemes.light.error,
    textTransform: "capitalize",
  },
});

export default styles;
