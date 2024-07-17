/* eslint-disable react-native/sort-styles */
import * as React from 'react'
import {StyleSheet, Text, TextInput, View} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import materialTheme from '../../assets/material-theme.json' // Ajusta la ruta según tu estructura de archivos
import { useForm } from '../../hooks/userRegistration'

// Definición del componente FormSignUp
const FormSignUp = () => {
  const { form, handleChange } = useForm();
  return (
    <View style={styles.parentForm}>
      <View style={styles.parentInput}>
        <View style={styles.divInput}>
          <Text style={styles.labelForm}>Nombre</Text>
          <View style={[styles.sizeInput, styles.Input]}>
            <TextInput
              style={styles.label}
              placeholder="Escriba su nombre"
              keyboardType="default"
              placeholderTextColor="#828282"
              inputMode="text"
              data-name="userName"
              value={form.userName}
              onChangeText={(value) => handleChange('userName', value)}
            />
          </View>
        </View>
        <View style={styles.divInput}>
          <Text style={styles.labelForm}>Email</Text>
          <View style={[styles.sizeInput, styles.Input]}>
            <TextInput
              style={styles.label}
              placeholder="Escriba su email"
              keyboardType="email-address"
              placeholderTextColor="#828282"
              inputMode="email"
              data-name="userEmail"
              value={form.userEmail}
              onChangeText={(value) => handleChange('userEmail', value)}
            />
          </View>
        </View>
        <View style={styles.divInput}>
          <Text style={styles.labelForm}>Télefono</Text>
          <View style={[styles.sizeInput, styles.Input]}>
            <TextInput
              style={styles.label}
              placeholder="Escriba su número de télefono"
              keyboardType="numeric"
              placeholderTextColor="#828282"
              inputMode="numeric"
              data-name="userPhone"
              value={form.userPhone}
              onChangeText={(value) => handleChange('userPhone', value)}
            />
          </View>
        </View>
        <View style={styles.divInput}>
          <Text style={styles.labelForm}>Contraseña</Text>
          <View style={[styles.sizeInput, styles.Input]}>
            <TextInput
              style={styles.label}
              placeholder="Escriba su contraseña"
              keyboardType="default"
              secureTextEntry
              placeholderTextColor="#828282"
              inputMode="text"
              data-name="userPassword"
              value={form.userPassword}
              onChangeText={(value) => handleChange('userPassword', value)}
            />
          </View>
        </View>
        <View style={styles.divInput}>
          <Text style={styles.labelForm}>Repetir contraseña</Text>
          <View style={[styles.sizeInput, styles.Input]}>
            <TextInput
              style={styles.label}
              placeholder="Repita su contraseña"
              keyboardType="default"
              secureTextEntry
              placeholderTextColor="#828282"
              inputMode="text"
              data-name="confirmPassword"

            />
          </View>
        </View>
      </View>
    </View>
  )
}

// Definición de los estilos
const styles = StyleSheet.create({
  divInput: {
    // Estilos del contenedor del input del formulario
    marginTop: hp('1.5%'), // Margen superior
    paddingHorizontal: wp('5%'), // Relleno horizontal
    width: wp('90%'), // Ancho del contenedor
  },
  label: {
    // Estilos de la etiqueta
    color: materialTheme.palettes.secondary[0], // Color del texto
    fontFamily: 'InterMedium', // Tipo de fuente
    fontSize: wp('3.5%'), // Tamaño de la fuente
    fontWeight: '200', // Grosor del texto
    textAlign: 'left', // Alineación del texto
    width: wp('90%'), // Ancho de la etiqueta
  },
  labelForm: {
    // Estilos de la etiqueta del formulario
    fontFamily: 'InterMedium', // Tipo de fuente
    fontSize: wp('3.9%'), // Tamaño de la fuente
    fontWeight: '500', // Grosor del texto
    lineHeight: 19, // Altura de la línea
    marginLeft: wp('1%'), // Margen izquierdo
    textAlign: 'left', // Alineación del texto
    width: wp('90%'), // Ancho de la etiqueta
  },
  parentForm: {
    alignItems: 'center',
    height: hp('53%'),
    marginBottom: hp('2.5%'), // Margen inferior
    marginTop: hp('6%'), // Margen superior
    overflow: 'hidden',
    paddingHorizontal: 5,
    paddingVertical: 9,
    width: wp('100%'),
  },
  parentInput: {
    // Estilos del contenedor del input
    alignItems: 'center', // Alineación de los elementos
    flexDirection: 'column', // Orden de los elementos
    width: wp('100%'), // Ancho del contenedor
  },
  sizeInput: {
    // Estilos del tamaño del input
    height: hp('6%'), // Altura del input
  },
  Input: {
    // Estilos del input
    backgroundColor: materialTheme.palettes.primary[100], // Color de fondo
    borderColor: materialTheme.schemes.darkhighcontrast.secondaryContainer, // Color del borde
    borderRadius: 15, // Radio del borde
    borderStyle: 'solid', // Estilo del borde
    color: materialTheme.palettes.secondary[0], // Color del texto
    borderWidth: 1, // Ancho del border
    elevation: 2, // Elevación
    flexDirection: 'row', // Orden de los elementos
    marginTop: hp('0.5%'), // Margen superior
    paddingHorizontal: '4%', // Relleno horizontal
    shadowOffset: {
      // Desplazamiento de la sombra
      width: 0, // Ancho
      height: 1, // Altura
    },
    shadowOpacity: 1, // Opacidad de la sombra
    shadowRadius: 2, // Radio de la sombra
    width: wp('80%'), // Ancho
  },
})

export default FormSignUp
