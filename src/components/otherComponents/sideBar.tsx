import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import styles from './style/styleSideBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import hookDataUser from '../../hooks/userPrincipal/hookDataUser';

const defaultDisplayName = 'Usuario';
const defaultEmail = 'Email';

const CustomDrawer = (props: any) => {
    const { displayName, photoURL, userEmail, handleLogout, PhotoDefault } = hookDataUser();
    return (
        <View style={styles.parentAll}>
            <DrawerContentScrollView {...props}>
                <View style={styles.iconContainer}>
                    <View style={styles.iconChild}>
                        {photoURL ? (
                            <Image source={{ uri: photoURL }} resizeMode='contain' style={styles.icon} defaultSource={{ uri: PhotoDefault }} />
                        ) : null}
                        <View style={styles.textChild}>
                            <Text style={[styles.text, styles.userName]}>{displayName || defaultDisplayName}</Text>
                            <Text style={[styles.text, styles.userEmail]}>{userEmail || defaultEmail}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.spaces}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={styles.buttonLogOut}>
                <TouchableOpacity onPress={handleLogout} style={styles.logoutContainer}>
                    <Ionicons
                        name="log-out-outline"
                        color="#C50713"
                        size={22}
                    />
                    <Text style={styles.textLogOut}>
                        Cerrar sesión
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CustomDrawer; 