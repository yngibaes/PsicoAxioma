import React from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, ActivityIndicator } from "react-native";
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../hooks/type/type';
import hookReadDiaryID from '../../hooks/userPrincipal/hookReadDiaryID';
import styles from "./style/styleFormBarDiary";
import Ionicons from 'react-native-vector-icons/Ionicons';

type ReadDiaryIDScreenRouteProp = RouteProp<RootStackParamList, 'ReadDiaryIDScreen'>;

const activityIndicatorColor = "#479E9C";
const iconColor = "#000";
const iconSize = 25;

const readDiaryID: React.FC = () => {
    const route = useRoute<ReadDiaryIDScreenRouteProp>();
    const { diaryID } = route.params;
    const { data, loading, error, DiaryScreen } = hookReadDiaryID(diaryID);

    const renderLoading = () => (
        <ActivityIndicator size="large" color={activityIndicatorColor} />
    );

    const renderError = (error: string) => (
        <Text style={styles.error}>Error: {error}</Text>
    );

    const renderContent = () => (
        <View>
            <View style={styles.container}>
                <View style={[styles.parentTopBar, styles.flexBox]}>
                    <View style={styles.flexBox}>
                        <View>
                            <View style={styles.goback}>
                                <Ionicons
                                    name="arrow-back-outline"
                                    color={iconColor}
                                    onPress={DiaryScreen}
                                    size={iconSize}
                                />
                            </View>
                        </View>
                        <View style={styles.input}>
                            <Text style={styles.labelText}>
                                {data[0].diaryTitle} <Text style={styles.date}>{data[0].diaryDate}</Text>
                            </Text>
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

    if (loading) return renderLoading();
    if (error) return renderError(error);

    return renderContent();
};

export default readDiaryID;
