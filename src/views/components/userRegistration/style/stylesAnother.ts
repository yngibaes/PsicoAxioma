import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import colorTheme from "../../../assets/color-theme.json";

// Definición de los estilos
const styles = StyleSheet.create({
  divImage: {
    borderRadius: 50, // Radio de las esquinas de la imagen
    width: "100%", // Ancho del contenedor
  },
  divTitle: {
    // Estilos del contenedor del título
    height: hp("25%"), // Altura del contenedor
    justifyContent: "center", // Alineación de los elementos
    overflow: "hidden", // Ocultar elementos que sobresalgan
    width: wp("90%"), // Ancho del contenedor, 90% del ancho de la pantalla
  },
  gobackChild: {
    backgroundColor: colorTheme.PsicoAxiomaColors.buttonForm,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  gobackChildLayout: {
    alignItems: "center",
    height: hp("4%"),
    justifyContent: "center",
    width: wp("8%"),
  },
  gobackParent: {
    alignItems: "center",
    flexDirection: "row",
    height: hp("9%"),
    overflow: "hidden",
    paddingHorizontal: hp("1.1%"),
    paddingVertical: hp("1%"),
    width: wp("90%"),
  },
  gobackText: {
    color: colorTheme.PsicoAxiomaColors.black,
    fontFamily: "InterBold",
    fontSize: hp("2.5%"),
    fontWeight: "400",
    marginLeft: "2.5%",
    textAlign: "center",
  },
  image: {
    // Estilos de la imagen
    alignSelf: "center", // Alineación de la imagen
    overflow: "hidden", // Ocultar elementos que sobresalgan
  },
  sizeTitle: {
    // Estilos del tamaño del título
    color: colorTheme.PsicoAxiomaColors.black, // Color del texto
    fontSize: wp("10.5%"), // Tamaño de la fuente, 4.2% del ancho de la pantalla
    textAlign: "center", // Alineación del texto
    width: "100%", // Ancho del contenedor
  },
  title: {
    // Estilos del título
    fontFamily: "InterBold", // Tipo de fuente
    fontWeight: "300", // Grosor del texto
  },
});

export default styles;
