import React from "react";
import {
  View,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import hookCreateDiary from "../../hooks/userPrincipal/hookCreateDiary";
import styles from "./style/styleFormBarDiary";
import Ionicons from "react-native-vector-icons/Ionicons";

const iconColor = "#000";
const placeholderColor = "#828282";
const iconGoBack = 25;
const iconSend = 36;
const placeholderTitle = "Título";
const placeholderContent = "Escribe lo que sientas...";
const keyboardBehavior = "padding";
const keyboardVerticalOffset = 60;

const FormDiary = () => {
  const {
    diaryContent,
    setdiaryContent,
    diaryTitle,
    setdiaryTitle,
    handleSubmit,
    diaryContentRef,
    diaryContentNext,
    handleExit,
    isButtonDisabled,
  } = hookCreateDiary();
  return (
    <View style={styles.container}>
      <View style={[styles.parentTopBar, styles.flexBox]}>
        <View style={styles.flexBox}>
          <View>
            <View style={styles.goback}>
              <Ionicons
                name="arrow-back-outline"
                color={iconColor}
                onPress={handleExit}
                size={iconGoBack}
              />
            </View>
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.label}
              placeholder={placeholderTitle}
              keyboardType="default"
              placeholderTextColor={placeholderColor}
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
        <Ionicons
          name="arrow-down-circle-outline"
          color={iconColor}
          onPress={handleSubmit}
          size={iconSend}
          disabled={isButtonDisabled}
        />
      </View>
      <KeyboardAvoidingView
        behavior={keyboardBehavior}
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
        <ScrollView
          style={styles.scrollableContent}
          keyboardShouldPersistTaps="handled" // Asegura que los toques en el teclado no cierren el teclado
        >
          <View style={styles.parentForm}>
            <View style={styles.inputContent}>
              <TextInput
                style={styles.labelContent}
                placeholder={placeholderContent}
                keyboardType="default"
                placeholderTextColor={placeholderColor}
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

export default FormDiary;
