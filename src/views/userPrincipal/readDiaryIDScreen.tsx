import React from 'react';
import { View } from 'react-native';
import ReadDiaryID from '../../components/otherComponents/readDiaryID';
import styles from './style/styleScreen';

const ReadDiaryIDScreen = () => {
    return (
        <View style={styles.container}>
            <ReadDiaryID />
        </View>
    );
};

export default ReadDiaryIDScreen;
