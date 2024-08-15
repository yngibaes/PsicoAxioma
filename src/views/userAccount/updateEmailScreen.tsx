import React from "react";
import { View } from "react-native";
import TopBar from '../../components/userRegistration/topBar';

import UpdateEmail from "../../components/otherComponents/updateEmail";
import styles from "../userPrincipal/style/styleScreen";
import UserNavigation from "../../hooks/userNavigation";

const UptadeEmailScreen = () => {
    const { ProfileScreen } = UserNavigation();
    return (
        <View style={styles.parentUpdate}>
            <TopBar goBack={ProfileScreen} text="Cambio de email" />
            <UpdateEmail />
        </View>
    );
};

export default UptadeEmailScreen;
