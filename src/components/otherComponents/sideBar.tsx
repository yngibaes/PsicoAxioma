import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { signOut } from 'firebase/auth';
import { auth } from '../../hooks/config/firebase';
import { Icon } from 'react-native-elements'

import styles from './style/styleSideBar';

const CustomDrawer = (props: any) => {
    const [displayName, setDisplayName] = useState<string | null>(null);
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const [photoURL, setPhotoURL] = useState<string | null>(null);

    useEffect(() => {
        const user = auth.currentUser;
        if (user) {
            setDisplayName(user.displayName);
            setUserEmail(user.email);
            setPhotoURL(user.photoURL)
        }
    }, []);

    const handleLogout = async () => {
        await signOut(auth)
    }
    return (
        <View style={styles.parentAll}>
            <DrawerContentScrollView {...props}>
                <View style={styles.iconContainer}>
                    <View style={styles.iconChild}>
                        {photoURL ? (
                          <Image source={{ uri: photoURL }} resizeMode='center' style={styles.icon} />
                        ) : null}
                        <View style={styles.textChild}>
                            <Text style={[styles.text, styles.userName]}>{displayName || 'Usuario'}</Text>
                            <Text style={[styles.text, styles.userEmail]}>{userEmail || 'Email'}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.spaces}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={styles.buttonLogOut}>
                <TouchableOpacity onPress={handleLogout} style={styles.logoutContainer}>
                    <Icon
                        name="log-out-outline"
                        type="ionicon"
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
}

export default CustomDrawer; 