import { StyleSheet } from "react-native";
import colorTheme from "../../../assets/color-theme.json";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorTheme.PsicoAxiomaColors.backgroundPrincipal,
    flex: 1, // Asegura que el contenedor use todo el espacio disponible
  },
});

export default styles;
