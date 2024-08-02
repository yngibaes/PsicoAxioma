import * as React from "react";
import { View, TextInput } from "react-native";
import { Icon } from 'react-native-elements'
import styles from "./style/styleTopBarDiary";
import hookCreateDiary from "../../hooks/userPrincipal/hookCreateDiary";
import UserNavigation from "../../hooks/userNavigation";

const TopBarDiary = () => {
    const { goBack } = UserNavigation()
    const {diaryTitle,setdiaryTitle, handleSubmit} = hookCreateDiary();
    return (
        <View style={[styles.parentTopBar, styles.flexBox]}>
            <View style={styles.flexBox}>
                <View>
                    <View style={styles.goback}>
                        <Icon
                            name="arrow-back-outline"
                            type="ionicon"
                            color="#000"
                            onPress={goBack}
                            size={25}
                        />
                    </View>
                </View>
                <View style={styles.input}>
                    <TextInput
                        style={styles.label}
                        placeholder="Título"
                        keyboardType="default"
                        placeholderTextColor="#828282"
                        inputMode="text"
                        data-name="diaryTitle"
                        keyboardAppearance="dark"
                        returnKeyType="next"
                        value={diaryTitle}
                        onChangeText={setdiaryTitle}
                    />
                </View>
            </View>
            <Icon
                name="arrow-down-circle-outline"
                type="ionicon"
                color="#000"
                onPress={handleSubmit}
                size={36}
            />
        </View>);
};


export default TopBarDiary;
