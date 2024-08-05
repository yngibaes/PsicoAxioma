import * as React from "react";
import { View, TextInput, ScrollView, KeyboardAvoidingView } from "react-native";
import { Icon } from 'react-native-elements'
import styles from "./style/styleFormBarDiary";
import hookCreateDiary from "../../hooks/userPrincipal/hookCreateDiary";

const TopBarDiary = () => {
    const { diaryContent, setdiaryContent, diaryTitle, setdiaryTitle, handleSubmit, diaryContentRef, diaryContentNext, handleExit } = hookCreateDiary();
    return (
        <View style={styles.container}>
            <View style={[styles.parentTopBar, styles.flexBox]}>
                <View style={styles.flexBox}>
                    <View>
                        <View style={styles.goback}>
                            <Icon
                                name="arrow-back-outline"
                                type="ionicon"
                                color="#000"
                                onPress={handleExit}
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
                            onSubmitEditing={diaryContentNext}
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
            </View>
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding" // Ajusta el comportamiento del KeyboardAvoidingView
                keyboardVerticalOffset={60}
            >
                <ScrollView style={styles.scrollableContent} keyboardShouldPersistTaps="handled" // Asegura que los toques en el teclado no cierren el teclado
                >
                    <View style={styles.parentForm}>
                        <View style={styles.inputContent}>
                            <TextInput
                                style={styles.labelContent}
                                placeholder="Escribe lo que sientas..."
                                keyboardType="default"
                                placeholderTextColor="#828282"
                                inputMode="text"
                                data-name="diaryContent"
                                keyboardAppearance="dark"
                                returnKeyType="next"
                                multiline
                                value={diaryContent}
                                onChangeText={setdiaryContent}
                                ref={diaryContentRef}
                            />
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
};


export default TopBarDiary;
