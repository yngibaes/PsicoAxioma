import * as React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const FormSignUp = () => {
  return (
    <View style={styles.parentForm}>
        <View style={styles.parentInput}>
            <View style={styles.divInput}>
                <Text style={styles.labelForm}>Nombre</Text>
                <View style={[styles.sizeInput, styles.Input]}>
                    <TextInput style={styles.label} placeholder="Escriba su nombre" keyboardType="default" placeholderTextColor="#828282" inputMode="text" data-name="userName"/>
                </View>
            </View>
            <View style={styles.divInput}>
                <Text style={styles.labelForm}>Email</Text>
                <View style={[styles.sizeInput, styles.Input]}>
                    <TextInput style={styles.label} placeholder="Escriba su email" keyboardType="email-address" placeholderTextColor="#828282" inputMode="email" data-name="userEmail"/>
                </View>
            </View>
            <View style={styles.divInput}>
                <Text style={styles.labelForm}>Télefono</Text>
                <View style={[styles.sizeInput, styles.Input]}>
                    <TextInput style={styles.label} placeholder="Escriba su número de télefono" keyboardType="numeric" placeholderTextColor="#828282" inputMode="numeric" data-name="userPhone"/>
                </View>
            </View>
            <View style={styles.divInput}>
                <Text style={styles.labelForm}>Contraseña</Text>
                <View style={[styles.sizeInput, styles.Input]}>
                    <TextInput style={styles.label} placeholder="Escriba su contraseña" keyboardType="default" secureTextEntry placeholderTextColor="#828282" inputMode="text" data-name="userPassword"/>
                </View>
            </View> 
            <View style={styles.divInput}>
                <Text style={styles.labelForm}>Repetir contraseña</Text>
                <View style={[styles.sizeInput, styles.Input]}>
                    <TextInput style={styles.label} placeholder="Repita su contraseña" keyboardType="default" secureTextEntry placeholderTextColor="#828282" inputMode="text" data-name="userPassword"/>
                </View>
            </View> 
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    parentForm: {
        height: hp("53%"),
        width: wp("100%"),
        paddingVertical: 9,
        paddingHorizontal: 5,
        overflow: "hidden",
        alignItems: "center",
        marginTop: hp("6%") // Margen superior
    },
    parentInput: { // Estilos del contenedor del input
        width: wp("100%"), // Ancho del contenedor
        flexDirection: "column", // Orden de los elementos
        alignItems: "center", // Alineación de los elementos
    },
    divInput: { // Estilos del contenedor del input del formulario
        width: wp("90%"), // Ancho del contenedor
        paddingHorizontal: wp("5%"), // Relleno horizontal
        marginTop: hp("1.5%") // Margen superior
    },
    labelForm: { // Estilos de la etiqueta del formulario 
        width: wp("90%"), // Ancho de la etiqueta 
        lineHeight: 19, // Altura de la línea
        textAlign: "left", // Alineación del texto 
        fontFamily: "InterMedium", // Tipo de fuente
        fontWeight: "500", // Grosor del texto
        fontSize: wp('3.9%'), // Tamaño de la fuente
        color: "#000", // Color del texto
        marginLeft: wp("1%") // Margen izquierdo
    },
    label: { // Estilos de la etiqueta
        color: "#00000", // Color del texto
        width: wp("90%"), // Ancho de la etiqueta
        textAlign: "left", // Alineación del texto
        fontFamily: "InterMedium", // Tipo de fuente
        fontWeight: "200", // Grosor del texto
        fontSize: wp('3.5%')  // Tamaño de la fuente
    },
    sizeInput: { // Estilos del tamaño del input
        height: hp("6%"), // Altura del input
    },
    Input: { // Estilos del input
        marginTop: hp("0.5%"), // Margen superior
        paddingHorizontal: "4%", // Relleno horizontal 
        borderWidth: 1, // Ancho del borde 
        borderColor: "#b5d0ce", // Color del borde 
        borderStyle: "solid", // Estilo del borde
        backgroundColor: "#FFF", // Color de fondo
        borderRadius: 15, // Radio del borde
        shadowOpacity: 1, // Opacidad de la sombra
        elevation: 2, // Elevación
        shadowRadius: 2, // Radio de la sombra
        shadowOffset: { // Desplazamiento de la sombra
            width: 0, // Ancho
            height: 1 // Altura 
        },
        shadowColor: "rgba(0, 0, 0, 0.05)", // Color de la sombra
        width: wp("80%"), // Ancho
        flexDirection: "row", // Orden de los elementos
        color: "#000", // Color del texto
    },
});

export default FormSignUp;
