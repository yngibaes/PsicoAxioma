import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import colorTheme from "../../../assets/color-theme.json";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colorTheme.PsicoAxiomaColors.white,
    borderRadius: 100,
    bottom: 68,
    height: hp("8%"),
    justifyContent: "center",
    position: "absolute",
    width: wp("80%"),
    zIndex: 1,
  },
  dot: {
    backgroundColor: colorTheme.PsicoAxiomaColors.black,
    borderRadius: 5,
    bottom: -10,
    height: hp("1.2%"),
    marginHorizontal: hp("0.5%"),
    width: wp("5%"),
  },
  imageStyle: {
    marginBottom: hp("1%"), // Ajusta el espacio entre la imagen y el texto
  },
  itemContainer: {
    //apartado especial para la imagen y texto
    alignItems: "center",
    flex: 1, // Cambiado a 1 para ocupar todo el espacio disponible
    paddingTop: hp("13%"), // posicion de la imagen junto al texto
  },
  itemText: {
    // Apartado especial para el texto
    fontFamily: "InterBold",
    fontSize: wp("9%"), // Tamaño del texto
    fontWeight: "600", // Tipo de fuente
    textAlign: "center",
  },
  paginationContainer: {
    bottom: 60,
    flexDirection: "row",
    position: "absolute",
  },
  textButton: {
    color: colorTheme.PsicoAxiomaColors.white,
    fontSize: wp("6%"),
    position: "absolute",
  },
  textContainer: {
    alignItems: "center",
    height: hp("28.5%"),
    justifyContent: "center",
    width: wp("100%"),
  },
});

export default styles;
