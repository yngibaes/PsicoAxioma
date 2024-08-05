import * as React from "react";
import { View, Text, ScrollView, KeyboardAvoidingView, ActivityIndicator } from "react-native";
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../hooks/type/type';
import hookReadDiaryID from '../../hooks/userPrincipal/hookReadDiaryID';
import { Icon } from 'react-native-elements';
import styles from "./style/styleFormBarDiary";

type ReadDiaryIDScreenRouteProp = RouteProp<RootStackParamList, 'ReadDiaryIDScreen'>;

const readDiaryID: React.FC = () => {
    const route = useRoute<ReadDiaryIDScreenRouteProp>();
    const { diaryID } = route.params;
    const { data, loading, error, goBack } = hookReadDiaryID(diaryID);

    if (loading) return <ActivityIndicator size="large" color="#479E9C" />;
    if (error) return <Text style={styles.error}>Error: {error}</Text>;

    return (
        <View>
            <View style={styles.container}>
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
                            <Text style={styles.labelText}>{data[0].diaryTitle} <Text style={styles.date}>{data[0].diaryDate} </Text></Text>
                        </View>
                    </View>
                </View>
                <KeyboardAvoidingView
                    style={styles.container}
                    behavior="padding"
                    keyboardVerticalOffset={60}
                >
                    <ScrollView style={styles.scrollableContent} keyboardShouldPersistTaps="handled">
                        <View style={styles.parentForm}>
                            <View style={styles.inputContent}>
                                <Text style={styles.labelContent}>{data[0].diaryContent}</Text>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        </View>
    );
};

export default readDiaryID;