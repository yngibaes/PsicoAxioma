import { StyleSheet } from 'react-native';
import materialTheme from '../../../assets/material-theme.json';

const styles = StyleSheet.create({
  container: {
    backgroundColor: materialTheme.schemes.darkmediumcontrast.background,
    flex: 1, // Asegura que el contenedor use todo el espacio disponible
  },
});

export default styles;
