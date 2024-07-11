import * as React from "react";
import {StyleSheet, View, Pressable, Image, Text} from "react-native";

const ForgetPassword = () => {
  	
  	return (
    		<View style={[styles.olvidarContrasea, styles.frame11ParentFlexBox]}>
      			<View style={[styles.frame11Parent, styles.frame11ParentFlexBox]}>
        				<View style={styles.frame11}>
          					<Pressable style={styles.frame11Child} onPress={()=>{}} />
          					<Image style={styles.frame11Item} resizeMode="contain" source={require('../../assets/img/flechaizq.png')} />
        				</View>
        				<Text style={styles.recuperarContrasea}>Recuperar contraseña</Text>
      			</View>
      			<View style={[styles.emailWrapper, styles.wrapperSpaceBlock]}>
        				<View style={styles.email}>
          					<Text style={[styles.digiteSuEmail, styles.labelTypo]}>Digite su email para recuperar su contraseña</Text>
          					<View style={[styles.field, styles.fieldBorder]}>
            						<Text style={[styles.label, styles.labelTypo]}>Email</Text>
          					</View>
        				</View>
      			</View>
      			<Pressable style={[styles.enviarWrapper, styles.wrapperSpaceBlock]} onPress={()=>{}}>
        				<Text style={styles.enviar}>Enviar</Text>
      			</Pressable>
    		</View>);
};

const styles = StyleSheet.create({
  	frame11ParentFlexBox: {
    		alignItems: "center",
    		overflow: "hidden"
  	},
  	wrapperSpaceBlock: {
    		marginTop: 10,
    		overflow: "hidden"
  	},
  	labelTypo: {
    		fontSize: 16,
    		textAlign: "left"
  	},
  	fieldBorder: {
    		borderWidth: 1,
    		borderStyle: "solid"
  	},
  	frame11Child: {
    		top: 9,
    		left: 14,
    		borderTopRightRadius: 10,
    		borderBottomLeftRadius: 10,
    		width: 30,
    		height: 30,
    		backgroundColor: "#a6bccc",
    		position: "absolute"
  	},
  	frame11Item: {
    		top: 24,
    		left: 21,
    		maxHeight: "100%",
    		width: 16,
    		position: "absolute"
  	},
  	frame11: {
    		width: 58,
    		height: 48,
    		overflow: "hidden"
  	},
  	recuperarContrasea: {
    		fontSize: 20,
    		width: 229,
    		height: 23,
    		textAlign: "left",
    		color: "#000",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700"
  	},
  	frame11Parent: {
    		width: 367,
    		paddingHorizontal: 0,
    		paddingVertical: 5,
    		flexDirection: "row"
  	},
  	digiteSuEmail: {
    		fontFamily: "Inter-Regular",
    		width: 314,
    		color: "#000"
  	},
  	label: {
    		lineHeight: 24,
    		fontWeight: "500",
    		fontFamily: "Inter-Medium",
    		color: "#828282",
    		width: 263
  	},
  	field: {
    		shadowColor: "rgba(0, 0, 0, 0.05)",
    		shadowOffset: {
      			width: 0,
      			height: 1
    		},
    		shadowRadius: 2,
    		elevation: 2,
    		shadowOpacity: 1,
    		borderRadius: 15,
    		backgroundColor: "#fbfbfb",
    		borderColor: "#e0e0e0",
    		width: 327,
    		paddingHorizontal: 16,
    		paddingVertical: 12,
    		marginTop: 8,
    		height: 48,
    		flexDirection: "row"
  	},
  	email: {
    		top: 11,
    		left: 0,
    		borderRadius: 30,
    		height: 108,
    		paddingHorizontal: 5,
    		paddingTop: 6,
    		width: 338,
    		position: "absolute"
  	},
  	emailWrapper: {
    		height: 129,
    		width: 338
  	},
  	enviar: {
    		marginLeft: -82.5,
    		top: 14,
    		left: "50%",
    		fontSize: 25,
    		textAlign: "center",
    		display: "flex",
    		justifyContent: "center",
    		width: 165,
    		height: 29,
    		color: "#000",
    		fontFamily: "Inter-Bold",
    		fontWeight: "700",
    		position: "absolute",
    		alignItems: "center"
  	},
  	enviarWrapper: {
    		borderRadius: 10,
    		width: 205,
    		height: 57,
    		backgroundColor: "#a6bccc"
  	},
  	olvidarContrasea: {
    		borderRadius: 2,
    		backgroundColor: "#e5ccba",
    		borderColor: "rgba(0, 0, 0, 0.1)",
    		flex: 1,
    		width: "100%",
    		height: 844,
    		paddingHorizontal: 11,
    		paddingVertical: 30,
    		borderWidth: 1,
    		borderStyle: "solid"
  	}
});

export default ForgetPassword;
