import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TitleWelcome from '../../components/tittleWelcome';
import ImageBear from '../../components/imageBear';
import ButtonLogin from '../../components/buttonLogIn';
import UserNavigation from '../../hooks/userNavigation';

const WelcomeScreen = () => {
	const { logIn, signUp } = UserNavigation();
	return (
		<View style={styles.parentAll}>
			<TitleWelcome/>
			<ImageBear sizeHeightD="45%" sizeHeightI="42%" sizeWidhtI="80%"/>
			<ButtonLogin LogIn={logIn} SignUp={signUp}/>
		</View>);
};

const styles = StyleSheet.create({
	parentAll: { // Estilos del contenedor principal
		backgroundColor: "#b5d0ce", // Color de fondo
		flex: 1, // Tamaño del contenedor
		width: wp("100%"), // Ancho del contenedor
		height: hp("100%"), // Altura del contenedor
		paddingHorizontal: wp("6%"), // Espaciado horizontal
		paddingBottom: hp("6%"), // Espaciado inferior
		alignItems: "center", // Alineación de los elementos
		overflow: "hidden", // Ocultar elementos que sobresalgan
		flexDirection: "column", //	Orden de los elementos
		justifyContent: 'space-evenly', // Alineación de los elementos
	}
});

export default WelcomeScreen;