import React from 'react';
import { View, ScrollView } from 'react-native'
import NavBar from '../../components/otherComponents/navBar';
import styles from './style/styleScreen';
import ContentDiary from '../../components/otherComponents/diary';

// Definición del componente SignUp
const DiaryScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <ContentDiary />
            </ScrollView>
            <NavBar />
        </View>
    );
}

export default DiaryScreen
