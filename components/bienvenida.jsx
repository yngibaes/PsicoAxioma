import * as React from 'react';
import { Text, StyleSheet, View, Image, Pressable } from 'react-native';


const Bienvenida = () => {
	return (
		<View style={styles.bienvenida}>
			<View style={styles.DivTexto}>
				<Text style={[styles.SizeTexto, styles.Texto]}>¡Bienvenido a PsicoAxioma!</Text>
			</View>
			<View style={[styles.SizeOsito, styles.Layout]}>
				<Image style={styles.Osito} resizeMode="cover" source={require('../assets/img/osito1.png')} />
			</View>
			<View style={[styles.RegistrarParent, styles.Layout]}>
				<View style={styles.Registrar}>
					<Text style={[styles.SizeTexto1, styles.Texto1]}>¿Aún no tienes cuenta?</Text>
					<Pressable style={styles.MarginTexto1} onPress={() => { }}>
						<Text style={[styles.OptionsTexto1, styles.Texto1]}>Regístrate</Text>
					</Pressable>
				</View>
				<Pressable style={styles.ButtonParent} onPress={() => { }}>
					<Text style={[styles.Button, styles.Texto]}>Iniciar sesión</Text>
				</Pressable>
			</View>
		</View>);
};

const styles = StyleSheet.create({
	Texto: {
		justifyContent: "center",
		display: "flex",
		textAlign: "center",
		color: "#000",
		fontFamily: "Inter-Bold",
		fontWeight: "700",
		position: "absolute",
		alignItems: "center"
	},
	Layout: {
		marginTop: 57,
		overflow: "hidden"
	},
	Texto1: {
		fontSize: 16,
		textAlign: "center"
	},
	SizeTexto: {
		top: 14,
		left: -23,
		fontSize: 42,
		width: 388
	},
	DivTexto: {
		width: 342,
		height: 131,
		overflow: "hidden"
	},
	Osito: {
		top: -10,
		left: 44,
		borderRadius: 50,
		width: 245,
		height: 306,
		position: "absolute"
	},
	SizeOsito: {
		width: 331,
		height: 286
	},
	SizeTexto1: {
		fontWeight: "600",
		fontFamily: "Inter-SemiBold",
		color: "#fff"
	},
	OptionsTexto1: {
		color: "#000",
		fontFamily: "Inter-Bold",
		fontWeight: "700",
		fontSize: 16
	},
	MarginTexto1: {
		marginLeft: 4
	},
	Registrar: {
		top: 66,
		left: 37,
		flexDirection: "row",
		paddingHorizontal: 5,
		paddingVertical: 0,
		position: "absolute",
		alignItems: "center"
	},
	Button: {
		top: 5,
		left: -12,
		fontSize: 30,
		width: 273,
		height: 50
	},
	ButtonParent: {
		top: 0,
		left: 49,
		borderRadius: 10,
		backgroundColor: "#e5ccba",
		width: 250,
		height: 60,
		position: "absolute",
		overflow: "hidden"
	},
	RegistrarParent: {
		width: 348,
		height: 88
	},
	bienvenida: {
		backgroundColor: "#a6bccc",
		flex: 1,
		width: "100%",
		height: 844,
		paddingHorizontal: 23,
		paddingTop: 93,
		paddingBottom: 46,
		alignItems: "center",
		overflow: "hidden"
	}
});

export default Bienvenida;
