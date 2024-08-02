import {StyleSheet} from 'react-native' // Importación de la librería react-native
import materialTheme from '../../../assets/material-theme.json' // Ajusta la ruta según tu estructura de archivos

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: materialTheme.schemes.darkmediumcontrast.background,
    flex: 1, // Asegura que el contenedor use todo el espacio disponible
    justifyContent: 'center', // Centra verticalmente
  },
  text: {
    color: materialTheme.palettes.primary[0], // Aplica el color al texto
    fontFamily: 'InterBold',
    fontWeight: '200',
    padding: 20,
  },
})

export default styles
