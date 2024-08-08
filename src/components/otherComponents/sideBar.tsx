import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { signOut } from 'firebase/auth';
import { auth } from '../../hooks/config/firebase';
import { Icon } from 'react-native-elements'
import styles from './style/styleSideBar';

const CustomDrawer = (props: any) => {
    const handleLogout = async () => {
        await signOut(auth)
    }
    return (
        <View style={styles.parentAll}>
            <DrawerContentScrollView {...props} contentContainerStyle={styles.background}>
                <ImageBackground source={require('../../assets/img/scroll/logo.png')} style={styles.backgroundImage}>
                    <Image source={require('../../assets/img/userRegistration/osito.png')} style={styles.icon} />
                    <Text style={styles.userName}>Michotitorico</Text>
                </ImageBackground>
                <View style={styles.spaces}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={styles.buttonLogOut}>
                <TouchableOpacity onPress={handleLogout}>
                    <Icon
                        name="log-out-outline"
                        type="ionicon"
                        color="#000"
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