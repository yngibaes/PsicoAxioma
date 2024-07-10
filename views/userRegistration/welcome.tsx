import * as React from 'react';
import { Text, StyleSheet, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const WelcomeScreen = () => {
	const navigation = useNavigation();
	const logIn = () => {navigation.navigate('LogIn');}
	const signUp = () => {navigation.navigate('SignUp');}

	return (
		<View style={styles.parentAll}>
			<View style={styles.divTitle}>
				<Text style={[styles.sizeTitle, styles.title]}>¡Bienvenido a PsicoAxioma!</Text>
			</View>
			<View style={[styles.divImage]}>
				<Image style={styles.image} resizeMode="contain" source={require('../../assets/img/osito1.png')} />
			</View>
			<View style={[styles.divButton]}>
				<Pressable style={styles.parentButton} onPress={logIn}>
					<Text style={[styles.button, styles.title]}>Iniciar sesión</Text>
				</Pressable>
				<View style={styles.divQuestion}>
					<Text style={[styles.sizeText, styles.text]}>¿Aún no tienes cuenta?</Text>
					<Pressable style={styles.marginText} onPress={signUp}>
						<Text style={[styles.optionsText, styles.text]}>Regístrate</Text>
					</Pressable>
				</View>
			</View>
		</View>);
};

const styles = StyleSheet.create({
	parentAll: { // Estilos del contenedor principal
		backgroundColor: "#b5d0ce", // Color de fondo
		flex: 1, // Tamaño del contenedor
		width: wp("100%"), // Ancho del contenedor
		height: hp("100%"), // Altura del contenedor
		paddingHorizontal: wp("6%"), // Espaciado horizontal
		paddingTop: hp("4%"), // Espaciado superior
		paddingBottom: hp("12%"), // Espaciado inferior
		alignItems: "center", // Alineación de los elementos
		overflow: "hidden", // Ocultar elementos que sobresalgan
		flexDirection: "column", //	Orden de los elementos
		justifyContent: 'space-evenly', // Alineación de los elementos
	},
	divTitle: { // Estilos del contenedor del título
		width: wp("90%"), // Ancho del contenedor, 90% del ancho de la pantalla
		height: wp("35%"), // Altura del contenedor
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
	image: { // Estilos de la imagen
		alignSelf: "center", // Alineación de la imagen
		borderRadius: 50, // Radio de las esquinas de la imagen
		width: wp('80%'), // Ancho de la imagen
		height: hp('45%'), // Altura de la imagen
	},
	divImage: { // Estilos del contenedor de la imagen
		width: "100%", // Ancho del contenedor
        height: hp('45%'), // Altura del contenedor
	},
	divButton: { // Estilos del contenedor de los botones
        width: wp("94%"), // Ancho del contenedor
        height: hp("11%"), // Altura del contenedor 
        alignItems: "center", // Alineación de los elementos 
		flexDirection: "column", // Orden de los elementos
	},
	parentButton: { // Estilos del contenedor del botón de inicio de sesión
		borderRadius: 10, // Radio de las esquinas del botón 
		backgroundColor: "#233333", // Color de fondo del botón
		width: wp("75%"), // Ancho del botón
		height: hp("9.5%"), // Altura del botón
		overflow: "hidden", // Ocultar elementos que sobresalgan
		justifyContent: "center", // Alineación de los elementos
        alignItems: "center", // Alineación de los elementos
	},	
	button: { // Estilos del botón
		color: "#FFF", // Color del texto
        fontSize: wp('8%'), // Tamaño de la fuente, 15% del ancho de la pantalla
        textAlign: "center", // Alineación del texto
	},
	text: { // Estilos del texto
		fontSize: hp('2.1%'), // Tamaño de la fuente
		textAlign: "center" // Alineación del texto
	},
	sizeText: { // Estilos del tamaño del texto
		fontWeight: "600", // Grosor del texto
		fontFamily: "InterSemiBold", // Tipo de fuente
		color: "#FFF" // Color del texto
	},
	optionsText: { // Estilos del texto de las opciones
		color: "#000", // Color del texto
		fontFamily: "InterBold", // Tipo de fuente
		fontWeight: "600", // Grosor del texto
		fontSize: hp('2.25%'), // Tamaño de la fuente
		textDecorationLine: "underline" // Línea de subrayado
	},
	marginText: { // Estilos del margen del texto
		marginLeft: wp('1%') // Margen izquierdo
	},
	divQuestion: { // Estilos del contenedor de la pregunta
		flexDirection: "row", // Orden de los elementos
		paddingHorizontal: wp('1.25%'), // Espaciado horizontal
		alignItems: "center", // Alineación de los elementos
        justifyContent: "center", // Alineación de los elementos
        width: "100%", // Ancho del contenedor
		marginTop: hp('0.7%'), // Margen superior
	},
});

export default WelcomeScreen;