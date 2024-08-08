import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { signOut } from 'firebase/auth';
import { auth } from '../../hooks/config/firebase';
import { Icon } from 'react-native-elements'

import styles from './style/styleSideBar';

const CustomDrawer = (props: any) => {
    const [displayName, setDisplayName] = useState<string | null>(null);

    useEffect(() => {
        const user = auth.currentUser;
        if (user) {
            setDisplayName(user.displayName);
        }
    }, []);

    const handleLogout = async () => {
        await signOut(auth)
    }
    return (
        <View style={styles.parentAll}>
            <DrawerContentScrollView {...props} contentContainerStyle={styles.background}>
                <View style={styles.iconContainer}>
                    <Image source={require('../../assets/img/icon.png')} style={styles.icon} />
                    <Text style={styles.userName}>{displayName || 'Usuario'}</Text>
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
                        color="#FFF"
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