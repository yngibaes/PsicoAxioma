import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TopBar from "../../components/topBar";
import UserNavigation from "../../hooks/userNavigation";

const SignUp = () => {
    const { goBack } = UserNavigation();
    return (
        <View style={styles.parentAll}>
                <TopBar goBack={goBack} text="Regístrate"/>
            <View style={styles.frame21Parent}>
                <View style={styles.frame21}>
                    <View style={[styles.frame21Child, styles.childPosition]} />
                    <Image style={styles.frame21Item} resizeMode="cover" source={require('../../assets/img/osito2.png')} />
                    <Image style={styles.osito3Icon} resizeMode="cover" source={require('../../assets/img/osito2.png')} />
                </View>
                <Pressable style={styles.frame23} onPress={() => { }}>
                    <Text style={styles.registrarse2}>Registrarse</Text>
                </Pressable>
                <View style={styles.frame22}>
                    <View style={styles.nombre}>
                        <Text style={[styles.nombre1, styles.emailTypo]}>
                            <Text style={styles.nombre2}>{`Nombre `}</Text>
                            <Text style={styles.text}>*</Text>
                        </Text>
                        <View style={[styles.field, styles.fieldShadowBox]}>
                            <Text style={[styles.label, styles.emailTypo]}>Escriba su nombre</Text>
                        </View>
                    </View>
                    <View style={[styles.localidad, styles.telefonoSpaceBlock]}>
                        <Text style={[styles.email, styles.emailTypo]}>
                            <Text style={styles.nombre2}>{`Localidad `}</Text>
                            <Text style={styles.text}>*</Text>
                        </Text>
                        <View style={[styles.field1, styles.fieldShadowBox]}>
                            <Text style={[styles.label, styles.emailTypo]}>Seleccione su localidad</Text>
                        </View>
                    </View>
                    <View style={[styles.telefono, styles.telefonoSpaceBlock]}>
                        <Text style={[styles.nombre1, styles.emailTypo]}>
                            <Text style={styles.nombre2}>{`Télefono `}</Text>
                            <Text style={styles.text}>*</Text>
                        </Text>
                        <View style={[styles.field2, styles.fieldShadowBox]}>
                            <Text style={[styles.label, styles.emailTypo]}>Escriba su télefono</Text>
                        </View>
                    </View>
                    <View style={[styles.telefono, styles.telefonoSpaceBlock]}>
                        <Text style={[styles.email2, styles.emailTypo]}>
                            <Text style={styles.nombre2}>{`Email `}</Text>
                            <Text style={styles.text}>*</Text>
                        </Text>
                        <View style={[styles.field3, styles.fieldShadowBox]}>
                            <Text style={[styles.label, styles.emailTypo]}>Escriba su email</Text>
                        </View>
                    </View>
                    <View style={[styles.telefono, styles.telefonoSpaceBlock]}>
                        <Text style={[styles.contrasea1, styles.emailTypo]}>
                            <Text style={styles.nombre2}>{`Contraseña `}</Text>
                            <Text style={styles.text}>*</Text>
                        </Text>
                        <View style={[styles.field4, styles.fieldShadowBox]}>
                            <Text style={[styles.label, styles.emailTypo]} >Escriba su contraseña</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>);
};

const styles = StyleSheet.create({
    parentAll: {
        flex: 1,
        width: wp("100%"),
        height: hp("100%"),
        paddingTop: wp("10%"),
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#b5d0ce",
        flexDirection: "column", //	Orden de los elementos
        //justifyContent: 'space-evenly', // Alineación de los elementos
    },
    childPosition: {
        backgroundColor: "#a6bccc",
        left: 0,
        position: "absolute"
    },
    emailTypo: {
        fontFamily: "Inter-Medium",
        fontWeight: "500",
        fontSize: 16,
        textAlign: "left"
    },
    fieldShadowBox: {
        marginTop: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
        width: 327,
        borderWidth: 1,
        borderColor: "#e0e0e0",
        borderStyle: "solid",
        backgroundColor: "#fbfbfb",
        borderRadius: 15,
        shadowOpacity: 1,
        elevation: 2,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowColor: "rgba(0, 0, 0, 0.05)",
        flexDirection: "row"
    },
    telefonoSpaceBlock: {
        marginTop: 14,
        paddingVertical: 0,
        borderRadius: 30,
        paddingHorizontal: 5
    },
    frameChild: {
        top: 0,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        height: 30,
        width: 30
    },
    frameItem: {
        top: 15,
        left: 8,
        maxHeight: "100%",
        width: 15,
        position: "absolute"
    },
    frameChildLayout: {
        height: 30,
        width: 30
    },
    registrarse1: {
        fontSize: 20,
        fontWeight: "700",
        fontFamily: "Inter-Bold",
        color: "rgba(13, 13, 13, 0.9)",
        textAlign: "right",
        marginLeft: 10
    },
    frameParent: {
        width: 367,
        height: 58,
        paddingHorizontal: 12,
        paddingVertical: 16,
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden"
    },
    frame21Child: {
        top: 146,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: 645,
        width: 390
    },
    frame21Item: {
        marginLeft: -108,
        top: 37,
        left: "50%",
        width: 216,
        height: 218,
        position: "absolute"
    },
    osito3Icon: {
        top: 58,
        left: 108,
        width: 174,
        height: 132,
        position: "absolute"
    },
    frame21: {
        top: -18,
        height: 791,
        width: 390,
        left: 0,
        position: "absolute",
        overflow: "hidden"
    },
    registrarse2: {
        top: 6,
        left: 31,
        fontSize: 25,
        lineHeight: 38,
        fontWeight: "800",
        fontFamily: "Inter-ExtraBold",
        textAlign: "left",
        color: "#000",
        position: "absolute"
    },
    frame23: {
        top: 660,
        left: 92,
        borderRadius: 10,
        width: 205,
        height: 50,
        position: "absolute",
        overflow: "hidden",
        backgroundColor: "#e5ccba"
    },
    nombre2: {
        color: "#000"
    },
    text: {
        color: "#ff0000"
    },
    nombre1: {
        width: 84,
        lineHeight: 19,
        fontWeight: "500",
        fontSize: 16
    },
    label: {
        lineHeight: 24,
        color: "#828282",
        width: 263,
        fontWeight: "500",
        fontSize: 16
    },
    field: {
        height: 48,
        marginTop: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
        width: 327,
        borderWidth: 1,
        borderColor: "#e0e0e0",
        borderStyle: "solid",
        backgroundColor: "#fbfbfb",
        borderRadius: 15,
        shadowOpacity: 1,
        elevation: 2,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowColor: "rgba(0, 0, 0, 0.05)"
    },
    nombre: {
        paddingVertical: 0,
        borderRadius: 30,
        height: 84,
        alignSelf: "stretch",
        paddingHorizontal: 5
    },
    email: {
        width: 102,
        lineHeight: 19,
        fontWeight: "500",
        fontSize: 16
    },
    field1: {
        marginTop: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
        width: 327,
        borderWidth: 1,
        borderColor: "#e0e0e0",
        borderStyle: "solid",
        backgroundColor: "#fbfbfb",
        borderRadius: 15,
        shadowOpacity: 1,
        elevation: 2,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowColor: "rgba(0, 0, 0, 0.05)"
    },
    localidad: {
        width: 329
    },
    field2: {
        height: 48,
        marginTop: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
        width: 327,
        borderWidth: 1,
        borderColor: "#e0e0e0",
        borderStyle: "solid",
        backgroundColor: "#fbfbfb",
        borderRadius: 15,
        shadowOpacity: 1,
        elevation: 2,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowColor: "rgba(0, 0, 0, 0.05)"
    },
    telefono: {
        height: 84,
        alignSelf: "stretch",
        marginTop: 14
    },
    email2: {
        width: 58,
        lineHeight: 19,
        fontWeight: "500",
        fontSize: 16
    },
    field3: {
        height: 48,
        marginTop: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
        width: 327,
        borderWidth: 1,
        borderColor: "#e0e0e0",
        borderStyle: "solid",
        backgroundColor: "#fbfbfb",
        borderRadius: 15,
        shadowOpacity: 1,
        elevation: 2,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowColor: "rgba(0, 0, 0, 0.05)"
    },
    contrasea1: {
        width: 118,
        lineHeight: 19,
        fontWeight: "500",
        fontSize: 16
    },
    field4: {
        height: 48,
        marginTop: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
        width: 327,
        borderWidth: 1,
        borderColor: "#e0e0e0",
        borderStyle: "solid",
        backgroundColor: "#fbfbfb",
        borderRadius: 15,
        shadowOpacity: 1,
        elevation: 2,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowColor: "rgba(0, 0, 0, 0.05)"
    },
    frame22: {
        top: 175,
        left: 21,
        width: 348,
        paddingVertical: 9,
        paddingHorizontal: 5,
        position: "absolute",
        overflow: "hidden"
    },
    frame21Parent: {
        height: 756,
        marginTop: 1,
        width: 390,
        overflow: "hidden"
    },
});

export default SignUp;
