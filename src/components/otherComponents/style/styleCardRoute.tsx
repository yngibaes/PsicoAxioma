import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import materialTheme from "../../../assets/material-theme.json";

const styles = StyleSheet.create({
  cardImage: {
    borderRadius: 8,
    height: hp("20%"),
    width: wp("100%"),
  },
  cardInfo: {
    backgroundColor: materialTheme.schemes.darkmediumcontrast.card,
    borderRadius: 8,
    elevation: 1,
    margin: wp("3%"),
    padding: 10,
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  cardText: {
    color: materialTheme.palettes.secondary[0],
    fontSize: wp("3.5%"),
    marginLeft: wp("1%"),
    marginTop: hp("1%"),
  },
  cardTitle: {
    color: materialTheme.palettes.secondary[0],
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