import * as React from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { Icon } from 'react-native-elements'
import styles from './style/styleCardDiary';
import hookDiaryInfo from "../../hooks/userPrincipal/hookDiaryInfo";

const CardDiary = () => {
    const { data, loading, error, formatDate } = hookDiaryInfo()

    if (loading) return <ActivityIndicator size="large" color="#479E9C" />;
    if (error) return <Text style={styles.error}>Error: {error}</Text>;

    const sortedData = data.sort((a, b) => new Date(b.diaryDate).getTime() - new Date(a.diaryDate).getTime());

    return (
        <View style={styles.container}>
            {sortedData.length > 0 ? (
                sortedData.map((item) => (
                    <View key={item.diaryId} style={styles.parentAll}>
                        <View style={styles.parentTitle}>
                            <Icon
                                name='ellipse'
                                type='ionicon'
                                color='#47708D'
                                size={15} />
                            <Text style={styles.title}>{item.diaryTitle}</Text>
                        </View>
                        <View style={styles.parentDate}>
                            <Text style={styles.date}>{formatDate(item.diaryDate)}</Text>
                        </View>
                        <View style={styles.parentDescri}>
                            <Text style={styles.description} numberOfLines={5}>{item.diaryContent}</Text>
                        </View>
                    </View>
                ))
            ) : (
                <Text style={styles.title}>No hay entradas.</Text>
            )}
        </View>
    );
};

export default CardDiary;
