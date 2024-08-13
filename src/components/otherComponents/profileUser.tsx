import React from "react";
import { View, Text, Image } from "react-native";
import hookDataUser from "../../hooks/userPrincipal/hookDataUser";
import styles from "./style/styleProfileUser";
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileUser = () => {
    const { photoURL, displayName, userEmail, userPhone, UpdateEmailScreen } = hookDataUser();
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                {photoURL ? (
                    <Image source={{ uri: photoURL }} resizeMode='center' style={styles.userPhoto} />
                ) : null}
                <Text style={styles.textName}>{displayName}</Text>
            </View>
            <View style={styles.textContainer}>
                <View style={styles.parentText}>
                    <Ionicons name='mail-outline' size={27} color='#000' />
                    <Text style={styles.textTitle}>Email</Text>
                    <Ionicons name='pencil-outline' size={13} color='#000' onPress={UpdateEmailScreen}/>
                </View>
                <Text style={styles.text}>{userEmail}</Text>
            </View>
            <View style={styles.textContainer}>
                <View style={styles.parentText}>
                    <Ionicons name='call-outline' size={30} color='#000' />
                    <Text style={styles.textTitle}>Télefono</Text>
                </View>
                <Text style={styles.text}>{userPhone}</Text>
            </View>
        </View>
    )
}

export default ProfileUser
