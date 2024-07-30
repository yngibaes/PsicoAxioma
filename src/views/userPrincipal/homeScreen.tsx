import React from 'react';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native'
import { signOut } from 'firebase/auth';
import { auth } from '../../hooks/config/firebase';
import NavBar from '../../components/otherComponents/navBar';
import materialTheme from '../../assets/material-theme.json' // Ajusta la ruta según tu estructura de archivos
import styles from './style/styleScreen';

// Definición del componente SignUp
const HomeScreen = () => {

    const handleLogout = async () => {
        await signOut(auth);
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleLogout}>
                <Text style={[styles.text, {backgroundColor: materialTheme.schemes.darkmediumcontrast.error}]}>Cierra sesión</Text>
            </TouchableOpacity>
            <ScrollView>
                <Text style={styles.text}>Home</Text>
            </ScrollView>
            <NavBar/>
        </View>
    );
}

export default HomeScreen
