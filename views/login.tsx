import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const LogInScreen = () => {
    const navigation = useNavigation();
    const goBack = () => {navigation.goBack();}
    return (
        <View style={[styles.iniciarSesin, styles.frame321Bg]}>
            <View style={styles.frameParent}>
                <Pressable style={styles.frameChildLayout} onPress={goBack}>
                    <View style={[styles.frameChild, styles.frameChildLayout]}>
                        <Image style={styles.frameItem} resizeMode="contain" source={require('../assets/img/flechaizq.png')} />
                    </View>
                </Pressable>
                <Text style={[styles.iniciarSesin1, styles.regstrate1Typo1]}>Iniciar Sesión</Text>
            </View>
            <KeyboardAwareScrollView>
                <View style={styles.osito2Wrapper}>
                    <Image style={styles.osito2Icon} resizeMode="contain" source={require('../assets/img/osito2.png')} />
                </View>

                <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
                    <View style={[styles.olvidasteTuContraseaParent, styles.frameGroupFlexBox]}>

                        <View style={[styles.email1, styles.email1SpaceBlock]}>
                            <Text style={[styles.email2, styles.emailTypo]}>Email</Text>
                            <View style={[/* styles.field1, */ styles.fieldShadowBox]}>
                                <TextInput style={[styles.label, styles.emailTypo]} placeholder="Escriba su email" keyboardType="email-address"/>
                            </View>

                        </View>


                        <View style={[styles.contrasea, styles.email1SpaceBlock]}>
                            <Text style={[styles.email, styles.emailTypo]} >Contraseña</Text>
                            <View style={styles.fieldShadowBox}>
                                <TextInput style={[styles.label, styles.emailTypo]} placeholder="olioli" keyboardType="default" secureTextEntry={true}></TextInput>
                            </View>
                        </View>
                       
                        <Pressable style={styles.olvidasteTuContraseaContainer} onPress={() => { }}>
                            <Text style={[styles.olvidasteTuContrasea, styles.iniciarSesin2FlexBox]}>¿Olvidaste tu contraseña?</Text>
                        </Pressable>
                    </View>
                    <View style={styles.frame31}>
                        <View style={styles.frame32}>
                            <Pressable style={styles.regstratePosition} onPress={() => { }}>
                                <Text style={[styles.regstrate1, styles.regstrate1Typo]}>Regístrate</Text>
                            </Pressable>
                            <Text style={[styles.anNoTienes, styles.regstrate1Typo]}>¿Aún no tienes cuenta?</Text>
                        </View>
                        <Pressable style={[styles.frame321, styles.frame321Bg]} onPress={() => { }}>
                            <Text style={[styles.iniciarSesin2, styles.iniciarSesin2FlexBox]}>Iniciar sesión</Text>
                        </Pressable>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </View >);
};

const styles = StyleSheet.create({
    frame321Bg: {
        backgroundColor: "#a6bccc",
        overflow: "hidden",
    },
    frameChildLayout: {
        height: 30,
        width: 30
    },
    regstrate1Typo1: {
        fontFamily: "Inter-Bold",
        fontWeight: "700"
    },
    frameGroupFlexBox: {
        alignSelf: "stretch",
        overflow: "hidden"
    },
    iniciarSesin2FlexBox: {
        justifyContent: "center",
        display: "flex",
        textAlign: "center",
        color: "#000",
        alignItems: "center"
    },
    email1SpaceBlock: {
        paddingVertical: 0,
        paddingHorizontal: 5,
        height: 84,
        borderRadius: 30,
        left: 5,
        position: "absolute"
    },
    emailTypo: {
/*         textAlign: "left",
        fontFamily: "Inter-Medium",
        fontWeight: "500",
        fontSize: 16 */
    },
    fieldShadowBox: {
        marginTop: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: "#e0e0e0",
        borderStyle: "solid",
        backgroundColor: "#000000",
        borderRadius: 15,
        shadowOpacity: 1,
        elevation: 2,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowColor: "rgba(0, 0, 0, 0.05)",
        width: 327,
        flexDirection: "row"
    },
    regstrate1Typo: {
        fontSize: 14,
        textAlign: "center"
    },
    frameChild: {
        top: 0,
        left: 0,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: "#f1e6d5",
        position: "absolute"
    },
    frameItem: {
        top: 15,
        left: 8,
        maxHeight: "100%",
        width: 15,
        position: "absolute"
    },
    iniciarSesin1: {
        fontSize: 20,
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
    osito2Icon: {
        top: 5,
        left: -1,
        width: 262,
        height: 255,
        position: "absolute"
    },
    osito2Wrapper: {
        width: 259,
        height: 265,
        marginTop: 29,
        overflow: "hidden"
    },
    olvidasteTuContrasea: {
        fontSize: 12,
        width: 193,
        height: 33,
        fontFamily: "Inter-SemiBold",
        fontWeight: "600",
        display: "flex",
        textAlign: "center"
    },
    olvidasteTuContraseaContainer: {
        left: 162,
        top: 175,
        position: "absolute"
    },
    email: {
        width: 102,
        lineHeight: 19,
        textAlign: "left",
        fontFamily: "Inter-Medium",
        fontWeight: "500",
        fontSize: 16,
        color: "#000"
    },
    label: {
 /*        lineHeight: 24,
        color: "#828282",
        width: 263,
        textAlign: "left",
        fontFamily: "Inter-Medium",
        fontWeight: "500",
        fontSize: 16 */
    },
    contrasea: {
        top: 99,
        width: 329
    },
    email2: {
        width: 42,
        lineHeight: 19,
        textAlign: "left",
        fontFamily: "Inter-Medium",
        fontWeight: "500",
        fontSize: 16,
        color: "#000"
    },
    field1: {
        height: 48
    },
    email1: {
        top: 9,
        width: 338
    },
    olvidasteTuContraseaParent: {
        height: 207
    },
    regstrate1: {
        marginLeft: 44.5,
        color: "#47708d",
        fontFamily: "Inter-Bold",
        fontWeight: "700"
    },
    regstratePosition: {
        top: 7,
        left: "50%",
        position: "absolute"
    },
    anNoTienes: {
        marginLeft: -120.5,
        top: 7,
        left: "50%",
        position: "absolute",
        color: "#000",
        fontSize: 14,
        fontFamily: "Inter-SemiBold",
        fontWeight: "600"
    },
    frame32: {
        top: 61,
        left: 35,
        width: 257,
        height: 31,
        position: "absolute",
        overflow: "hidden"
    },
    iniciarSesin2: {
        top: 6,
        left: 17,
        fontSize: 25,
        fontWeight: "800",
        fontFamily: "Inter-ExtraBold",
        width: 201,
        height: 42,
        position: "absolute"
    },
    frame321: {
        top: 8,
        left: 46,
        borderRadius: 10,
        width: 235,
        height: 53,
        position: "absolute",
        overflow: "hidden"
    },
    frame31: {
        height: 100,
        marginTop: 26,
        width: 327,
        overflow: "hidden"
    },
    frameGroup: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: "#e5ccba",
        height: 422,
        paddingHorizontal: 21,
        paddingTop: 36,
        paddingBottom: 26,
        marginTop: 29,
        alignItems: "center"
    },
    iniciarSesin: {
        flex: 1,
        width: "100%",
        height: "100%",
        paddingTop: 30,
        alignItems: "center",
        overflow: "hidden"
    }
});

export default LogInScreen;
