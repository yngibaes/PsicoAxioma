import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import { signOut } from 'firebase/auth';
import { auth } from '../../hooks/config/firebase';

// Definición del componente SignUp
const HomeScreen = () => {

    const handleLogout = async () => {
        await signOut(auth);
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleLogout}>
                <Text style={styles.text}>Cierra sesión</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Asegura que el contenedor use todo el espacio disponible
        alignItems: 'center', // Centra horizontalmente
        justifyContent: 'center', // Centra verticalmente
    },
    text: {
        color: 'black', // Aplica el color al texto
        padding: 20,
        backgroundColor: 'red'

    }
});

export default HomeScreen
