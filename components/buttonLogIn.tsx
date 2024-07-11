import * as React from 'react';
import {StyleSheet, Pressable, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Definición de las props usando TypeScript
interface propsButtonLogin {
  LogIn: () => void;
  SignUp: () => void;
}

const ButtonLogin: React.FC<propsButtonLogin> = ({LogIn, SignUp}) => {
  return (
    <View style={[styles.divButton]}>
      <Pressable style={styles.parentButton} onPress={LogIn}>
        <Text style={[styles.button, styles.title]}>Iniciar sesión</Text>
      </Pressable>
      <View style={styles.divQuestion}>
        <Text style={[styles.sizeText, styles.text]}>
          ¿Aún no tienes cuenta?
        </Text>
        <Pressable style={styles.marginText} onPress={SignUp}>
          <Text style={[styles.optionsText, styles.text]}>Regístrate</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  divButton: {
    // Estilos del contenedor de los botones
    width: wp('94%'), // Ancho del contenedor
    height: hp('13.3%'), // Altura del contenedor
    alignItems: 'center', // Alineación de los elementos
    flexDirection: 'column', // Orden de los elementos
  },
  title: {
    // Estilos del título
    fontFamily: 'InterBold', // Tipo de fuente
    fontWeight: '300', // Grosor del texto
  },
  parentButton: {
    // Estilos del contenedor del botón de inicio de sesión
    borderRadius: 10, // Radio de las esquinas del botón
    backgroundColor: '#233333', // Color de fondo del botón
    width: wp('75%'), // Ancho del botón
    height: hp('9.5%'), // Altura del botón
    overflow: 'hidden', // Ocultar elementos que sobresalgan
    justifyContent: 'center', // Alineación de los elementos
    alignItems: 'center', // Alineación de los elementos
  },
  button: {
    // Estilos del botón
    color: '#FFF', // Color del texto
    fontSize: wp('8%'), // Tamaño de la fuente, 15% del ancho de la pantalla
    textAlign: 'center', // Alineación del texto
  },
  text: {
    // Estilos del texto
    fontSize: hp('2.1%'), // Tamaño de la fuente
    textAlign: 'center', // Alineación del texto
  },
  sizeText: {
    // Estilos del tamaño del texto
    fontWeight: '600', // Grosor del texto
    fontFamily: 'InterSemiBold', // Tipo de fuente
    color: '#FFF', // Color del texto
  },
  optionsText: {
    // Estilos del texto de las opciones
    color: '#000', // Color del texto
    fontFamily: 'InterBold', // Tipo de fuente
    fontWeight: '600', // Grosor del texto
    fontSize: hp('2.25%'), // Tamaño de la fuente
    textDecorationLine: 'underline', // Línea de subrayado
  },
  marginText: {
    // Estilos del margen del texto
    marginLeft: wp('1%'), // Margen izquierdo
  },
  divQuestion: {
    // Estilos del contenedor de la pregunta
    flexDirection: 'row', // Orden de los elementos
    paddingHorizontal: wp('1.25%'), // Espaciado horizontal
    alignItems: 'center', // Alineación de los elementos
    justifyContent: 'center', // Alineación de los elementos
    width: '100%', // Ancho del contenedor
    marginTop: hp('0.7%'), // Margen superior
  },
});

export default ButtonLogin;
