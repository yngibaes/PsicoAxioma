import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

interface propsFormLogIn {
	forget: () => void,
  }

const FormLogIn = (props:propsFormLogIn) => {
    return(
        <View style={styles.parentForm}>
            <View>
                <View style={styles.divInput}>
                    <Text style={styles.labelForm}>Email</Text>
                    <View style={[styles.sizeInput, styles.Input]}>
                        <TextInput style={styles.label} placeholder="Escriba su email" keyboardType="email-address" placeholderTextColor="#000" />
                    </View>
                </View>
                <View style={styles.divInput}>
                    <Text style={styles.labelForm}>Contraseña</Text>
                    <View style={[styles.sizeInput, styles.Input]}>
                        <TextInput style={styles.label} placeholder="Escriba su contraseña" keyboardType="default" secureTextEntry={true} placeholderTextColor="#000" />
                    </View>
                </View>    
            </View>
            <Pressable style={styles.divForget} onPress={props.forget}>
                <Text style={[styles.text]}>¿Olvidaste tu contraseña?</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    parentForm: { // Estilos del contenedor del formulario
        height: hp("33%"), // Altura del contenedor
        alignSelf: "stretch", // Ajuste del contenedor
        overflow: "hidden", // Ocultar elementos que sobresalgan
        alignItems: "center", // Alineación de los elementos
        marginTop: hp("3%") // Margen superior
    },
    divInput: { // Estilos del contenedor del input del formulario
        width: wp("90%"), // Ancho del contenedor 
        height: hp("14%"), // Altura del contenedor 
        paddingHorizontal: wp("5%"), // Relleno horizontal
    },
    labelForm: { // Estilos de la etiqueta del formulario 
        width: wp("90%"), // Ancho de la etiqueta 
        lineHeight: 19, // Altura de la línea
        textAlign: "left", // Alineación del texto 
        fontFamily: "InterMedium", // Tipo de fuente
        fontWeight: "200", // Grosor del texto
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
        height: hp("8%"), // Altura del input
    },
    Input: { // Estilos del input
        marginTop: hp("1%"), // Margen superior
        paddingHorizontal: "4%", // Relleno horizontal 
        borderWidth: 1, // Ancho del borde 
        borderColor: "#e0e0e0", // Color del borde 
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
    divForget: {
        width: wp("80%"),
        height: hp("5%"),
    },
    text: {
        fontSize: wp('3.5%'),
        fontFamily: "InterSemiBold",
        fontWeight: "600",
        display: "flex",
        textAlign: "right",
        color: "#000",
    },
});

export default FormLogIn;