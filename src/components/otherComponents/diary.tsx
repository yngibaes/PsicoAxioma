import * as React from "react";
import { Text, View } from "react-native";
import { Icon } from 'react-native-elements';
import styles from './style/styleDiary';
import CardDiary from './cardDiary';

const ContentDiary = () => {
    return (
        <View style={styles.parentDiary}>
            <View style={styles.childText}>
                <Text style={styles.text}>Diario</Text>
                <View style={styles.icon}>
                    <Icon
					underlayColor='white'
					name='add'
					type='ionicon'
					color='#000'
					onPress={()=>console.log("ola")}
					size={30} />
                </View>
            </View>
            <CardDiary />
        </View>);
};


export default ContentDiary;
