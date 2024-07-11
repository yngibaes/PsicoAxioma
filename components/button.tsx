import * as React from 'react';
import { StyleSheet, Pressable, Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// Definición de las props usando TypeScript
interface propsButton {
	function: () => void;
    colorButton: string,
    colorText: string,
    text: string,
    width: string,
    height: string,
    size: string
}

const Button = (props: propsButton) => {
    return(
        <View style={[styles.divButton]}>
            <Pressable style={[styles.parentButton, { backgroundColor: props.colorButton, width: wp(`${props.width}`), height: hp(`${props.height}`) }]} onPress={props.function}>
                <Text style={[styles.button, styles.title, {color: props.colorText, fontSize: wp(`${props.size}`)}]}>{props.text}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    divButton: { // Estilos del contenedor de los botones
        width: wp("94%"), // Ancho del contenedor 
        alignItems: "center", // Alineación de los elementos
	},
    title: { // Estilos del título
		fontFamily: "InterBold", // Tipo de fuente
		fontWeight: "300", // Grosor del texto
	},
	parentButton: { // Estilos del contenedor del botón de inicio de sesión
		borderRadius: 10, // Radio de las esquinas del botón 
		overflow: "hidden", // Ocultar elementos que sobresalgan
		justifyContent: "center", // Alineación de los elementos
        alignItems: "center", // Alineación de los elementos
	},	
	button: { // Estilos del botón
        fontSize: wp('8%'), // Tamaño de la fuente, 15% del ancho de la pantalla
        textAlign: "center", // Alineación del texto
	},
});

export default Button;