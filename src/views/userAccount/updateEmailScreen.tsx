import React from "react";
import { View } from "react-native";
import UpdateEmail from "../../components/otherComponents/updateEmail";
import styles from "../userPrincipal/style/styleScreen";

const UptadeEmailScreen = () => {
    return (
        <View style={styles.container}>
            <UpdateEmail />
        </View>
    );
};

export default UptadeEmailScreen;
