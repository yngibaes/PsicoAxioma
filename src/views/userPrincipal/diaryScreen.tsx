import React from 'react';
import { View, ScrollView } from 'react-native'
import NavBar from '../../components/otherComponents/navBar';
import styles from './style/styleScreen';
import CardDiary from '../../components/otherComponents/cardDiary';

// Definición del componente SignUp
const DiaryScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <CardDiary></CardDiary>
            </ScrollView>
            <NavBar />
        </View>
    );
}

export default DiaryScreen
