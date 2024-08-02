import React from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import styles from './style/styleScreen';
import TopBarDiary from '../../components/otherComponents/topBarDiary';
import FormDiary from '../../components/otherComponents/formDiary';

// Definición del componente SignUp
const CreateDiaryScreen = () => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      keyboardVerticalOffset={60}
    >
      <View style={styles.fixedContent}>
        <TopBarDiary />
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollableContent}
        keyboardShouldPersistTaps="handled" // Asegura que los toques en el teclado no cierren el teclado
      >
        <FormDiary />
      </ScrollView>

    </KeyboardAvoidingView>
  )
}

export default CreateDiaryScreen
