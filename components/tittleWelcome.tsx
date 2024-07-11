import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const TitleWelcome = () => {
    return(
        <View style={styles.divTitle}>
			<Text style={[styles.sizeTitle, styles.title]}>¡Bienvenido a PsicoAxioma!</Text>
		</View>
    )
}

const styles = StyleSheet.create({
    divTitle: { // Estilos del contenedor del título
		width: wp("90%"), // Ancho del contenedor, 90% del ancho de la pantalla
		height: hp("25%"), // Altura del contenedor
		overflow: "hidden", // Ocultar elementos que sobresalgan
		justifyContent: "center", // Alineación de los elementos
	},
	sizeTitle: { // Estilos del tamaño del título
		color: "#000", // Color del texto
		fontSize: wp('10.5%'), // Tamaño de la fuente, 4.2% del ancho de la pantalla
		textAlign: "center", // Alineación del texto
		width: "100%", // Ancho del contenedor
	},
	title: { // Estilos del título
		fontFamily: "InterBold", // Tipo de fuente
		fontWeight: "300", // Grosor del texto
	},
});

export default TitleWelcome;