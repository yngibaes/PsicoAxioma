import * as React from "react";
import { Text, View } from "react-native";
import { Icon } from 'react-native-elements'
import styles from './style/styleCardDiary';

const CardDiary = () => {

    return (
        <View style={styles.parentAll}>
            <View style={styles.parentTitle}>
                <Icon
                    name='ellipse'
                    type='ionicon'
                    color='#47708D'
                    size={15} />
                <Text style={styles.title}>Fui al mejor concierto de mi vida</Text>
            </View>
            <View style={styles.parentDate}>
            <Text style={styles.date}>13 de abril 2024</Text>
            </View>
            
            <View style={styles.parentDescri}>  
                <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum ornare suscipit. Cras eget diam neque. Donec dui eros, ornare id pulvinar quis, dapibus sit amet tortor. Donec consectetur...</Text>
            </View>
        </View>);
};

export default CardDiary;
