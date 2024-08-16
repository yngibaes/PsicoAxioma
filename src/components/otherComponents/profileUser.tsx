import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import hookDataUser from "../../hooks/userPrincipal/hookDataUser";
import styles from "./style/styleProfileUser";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { launchImageLibrary } from 'react-native-image-picker';

const ProfileUser = () => {
    const { photoURL, displayName, userEmail, userPhone, UpdateEmailScreen, updatePhoto, PhotoDefault } = hookDataUser();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.imageContainer} onPress={() =>
                launchImageLibrary(
                    {
                        mediaType: 'photo',
                        includeBase64: false,
                        maxHeight: 500,
                        maxWidth: 500,
                    },
                    response => {
                        updatePhoto(response);
                    },
                )}>
                {photoURL ? (
                    <Image source={{ uri: photoURL }} resizeMode='contain' style={styles.userPhoto} defaultSource={{ uri: PhotoDefault }} 
                     />
                ) : null}
                <Text style={styles.textName}>{displayName}</Text>
            </TouchableOpacity>
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
        </View >
    );
};

export default ProfileUser;
