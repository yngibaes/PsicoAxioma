import * as React from "react";
import { StyleSheet, View} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TopBar from "../../components/topBar";
import UserNavigation from "../../hooks/userNavigation";
import ImageBear from "../../components/imageBear";
import FormLogIn from "../../components/formLogin";
import ButtonLogin from "../../components/buttonLogIn";

const LogInScreen = () => {
    const { goBack, homeScreen, signUp, forgetPassword } = UserNavigation();
    return (
            <View style={styles.parentAll}>
                <TopBar goBack={goBack} text="Iniciar Sesión"/>
                <KeyboardAwareScrollView enableOnAndroid={true} scrollEnabled={false}>
                    <ImageBear sizeHeightD="28%" sizeHeightI="28%" sizeWidhtI="50%"/>
                    <View style={styles.divForm}>
                        <FormLogIn forget={forgetPassword}/>
                        <ButtonLogin LogIn={homeScreen} SignUp={signUp}/>
                    </View>
                </KeyboardAwareScrollView>
            </View>
       );
};

const styles = StyleSheet.create({
    parentAll: {
        flex: 1,
        width: wp("100%"),
        height: hp("100%"),
        paddingTop: wp("5%"),
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#b5d0ce",
        flexDirection: "column", //	Orden de los elementos
    },
    divForm: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: "#9EACC2",
        height: hp("56%"),
        width: wp("100%"),
        alignSelf: "stretch",
        overflow: "hidden",
        marginTop: hp("5%"),
        alignItems: "center",
    }
});

export default LogInScreen;
