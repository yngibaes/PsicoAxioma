import * as React from 'react';
import { View, TextInput } from 'react-native';
import styles from './style/stylesFormDiary';
import hookCreateDiary from '../../hooks/userPrincipal/hookCreateDiary';

const FormDiary = () => {
    const { diaryContent, setdiaryContent } = hookCreateDiary();
    return (
        <View style={styles.parentForm}>
            <View style={styles.input}>
                <TextInput
                    style={styles.label}
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
                />
            </View>
        </View>
    )
}

export default FormDiary
