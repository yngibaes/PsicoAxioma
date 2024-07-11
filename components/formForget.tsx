import * as React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const FormForget = () => {
  return (
    <View style={styles.parentEmail}>
      <View style={styles.childEmail}>
        <Text style={[styles.divLabel, styles.labelText]}>
          Digite su email para recuperar su contraseña
        </Text>
        <View style={[styles.Input, styles.sizeInput]}>
          <TextInput
            style={styles.label}
            placeholder="Escriba su email"
            keyboardType="email-address"
            inputMode="email"
            placeholderTextColor="#000"
            data-name="userEmail"/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentEmail: {
    height: hp('15%'),
    width: wp('80%'),
    overflow: 'hidden',
  },
  childEmail: {
    borderRadius: 30,
    paddingHorizontal: wp('0.5%'),
    paddingTop: hp('0.5%'),
  },
  divLabel: {
    width: wp('80%'),
    color: '#000',
  },
  labelText: {
    fontFamily: 'InterMedium',
    fontSize: wp('3.8%'),
    fontWeight: '200',
    textAlign: 'left',
  },
  sizeInput: {
    height: hp('7%'), // Altura del input
  },
  Input: {
    marginTop: hp('1%'), // Margen superior
    paddingHorizontal: '4%', // Relleno horizontal
    borderWidth: 1, // Ancho del borde
    borderColor: '#b5d0ce', // Color del borde
    borderStyle: 'solid', // Estilo del borde
    backgroundColor: '#FFF', // Color de fondo
    borderRadius: 15, // Radio del borde
    shadowOpacity: 1, // Opacidad de la sombra
    elevation: 2, // Elevación
    shadowRadius: 2, // Radio de la sombra
    shadowOffset: {
      // Desplazamiento de la sombra
      width: 0, // Ancho
      height: 1, // Altura
    },
    shadowColor: 'rgba(0, 0, 0, 0.05)', // Color de la sombra
    width: wp('80%'), // Ancho
    flexDirection: 'row', // Orden de los elementos
    color: '#000', // Color del texto
  },
  label: {
    color: "#00000", // Color del texto
    width: wp("90%"), // Ancho de la etiqueta
    textAlign: "left", // Alineación del texto
    fontFamily: "InterMedium", // Tipo de fuente
    fontWeight: "200", // Grosor del texto
    fontSize: wp('3.5%')  // Tamaño de la fuente
  }
});

export default FormForget;
