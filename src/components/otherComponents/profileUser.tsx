import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import hookDataUser from "../../hooks/userPrincipal/hookDataUser";
import styles from "./style/styleProfileUser";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { launchImageLibrary } from 'react-native-image-picker';

const ProfileUser = () => {
    const { photoURL, displayName, userEmail, userPhone, UpdateEmailScreen } = hookDataUser();
    const PhotoDefault = 'https://firebasestorage.googleapis.com/v0/b/psicoaxioma.appspot.com/o/user.png?alt=media&token=bf2e35a6-ff00-490b-9750-0242667ab50e';
    
    launchImageLibrary(mediaType, callback)

// You can also use as a promise without 'callback':
const result = await launchImageLibrary(options?);

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                {//https://www.npmjs.com/package/react-native-image-picker
                }
                {photoURL ? (
                    <Image source={{ uri: photoURL }} resizeMode='center' style={styles.userPhoto} defaultSource={{ uri: PhotoDefault }} />
                ) : null}
                <Text style={styles.textName}>{displayName}</Text>
            </View>
            <View style={styles.textContainer}>
                <View style={styles.parentText}>
                    <Ionicons name='mail-outline' size={27} color='#000' />
                    <Text style={styles.textTitle}>Email</Text>
                    <Ionicons name='pencil-outline' size={18} color='#000' onPress={UpdateEmailScreen} />
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
            <View style={styles.buttonDelete}>
                <TouchableOpacity onPress={() => { console.log('ninini, cuenta borrada'); }} style={styles.deleteContainer}>
                    <Ionicons
                        name="trash-outline"
                        color="#FFF"
                        size={22}
                    />
                    <Text style={styles.textDelete}>
                        Borrar Cuenta
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ProfileUser;
