import React from 'react';
import { View } from 'react-native';
import ReadDiaryID from '../../components/otherComponents/readDiaryID';
import styles from './style/styleScreen';

// Definición del componente SignUp
const ReadDiaryIDScreen = () => {
    return (
        <View style={styles.container}>
            <ReadDiaryID />
        </View>
    )
}

export default ReadDiaryIDScreen
