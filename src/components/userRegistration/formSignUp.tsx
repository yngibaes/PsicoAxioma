import React from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import styles from './style/styleFormSignUp';
import hookSignup from '../../hooks/userRegistration/hookSignup';

const labelName = 'Nombre';
const placeholderName = 'Escriba su nombre';
const labelEmail = 'Email';
const placeholderEmail = 'Escriba su email';
const labelPhone = 'Télefono';
const placeholderPhone = 'Escriba su número de télefono';
const labelPassword = 'Contraseña';
const placeholderPassword = 'Escriba su contraseña';
const labelConfirmPassword = 'Repetir Contraseña';
const placeholderConfirmPassword = 'Repita su contraseña';
const placeholderColor = '#828282';
const buttonText = 'Enviar';

// Definición del componente FormSignUp
const FormSignUp = () => {
  const {
    userName,
    userEmail,
    userPhone,
    userPassword,
    confirmPassword,
    errors,
    isFormValid,
    setUserName,
    setUserEmail,
    setUserPhone,
    setUserPassword,
    setConfirmPassword,
    handleSubmit,
    userEmailRef,
    userEmailNext,
    userPhoneRef,
    userPhoneNext,
    userPasswordRef,
    userPasswordNext,
    confirmPasswordRef,
    confirmPasswordNext,
  } = hookSignup();

  return (
    <View style={styles.parentForm}>
      <View style={styles.parentInput}>
        <View style={styles.divInput}>
          <View style={styles.divLabel}>
            <Text style={styles.labelForm}>{labelName}</Text>
            {errors.userName && (
              <Text style={styles.error}>{errors.userName}</Text>
            )}
          </View>
          <View style={[styles.sizeInput, styles.Input]}>
            <TextInput
              style={styles.label}
              placeholder={placeholderName}
              keyboardType="default"
              placeholderTextColor={placeholderColor}
              inputMode="text"
              data-name="userName"
              keyboardAppearance="dark"
              returnKeyType="next"
              value={userName}
              onChangeText={setUserName}
              onSubmitEditing={userEmailNext}
            />
          </View>
        </View>
        <View style={styles.divInput}>
          <View style={styles.divLabel}>
            <Text style={styles.labelForm}>{labelEmail}</Text>
            {errors.userEmail && (
              <Text style={styles.error}>{errors.userEmail}</Text>
            )}
          </View>
          <View style={[styles.sizeInput, styles.Input]}>
            <TextInput
              style={styles.label}
              placeholder={placeholderEmail}
              keyboardType="email-address"
              placeholderTextColor={placeholderColor}
              inputMode="email"
              data-name="userEmail"
              keyboardAppearance="dark"
              returnKeyType="next"
              value={userEmail}
              onChangeText={setUserEmail}
              ref={userEmailRef}
              onSubmitEditing={userPhoneNext}
            />
          </View>
        </View>
        <View style={styles.divInput}>
          <View style={styles.divLabel}>
            <Text style={styles.labelForm}>{labelPhone}</Text>
            {errors.userPhone && (
              <Text style={styles.error}>{errors.userPhone}</Text>
            )}
          </View>
          <View style={[styles.sizeInput, styles.Input]}>
            <TextInput
              style={styles.label}
              placeholder={placeholderPhone}
              keyboardType="numeric"
              placeholderTextColor={placeholderColor}
              inputMode="numeric"
              data-name="userPhone"
              keyboardAppearance="dark"
              returnKeyType="next"
              maxLength={10}
              value={userPhone}
              onChangeText={setUserPhone}
              ref={userPhoneRef}
              onSubmitEditing={userPasswordNext}
            />
          </View>
        </View>
        <View style={styles.divInput}>
          <View style={styles.divLabel}>
            <Text style={styles.labelForm}>{labelPassword}</Text>
            {errors.userPassword && (
              <Text style={styles.error}>{errors.userPassword}</Text>
            )}
          </View>
          <View style={[styles.sizeInput, styles.Input]}>
            <TextInput
              style={styles.label}
              placeholder={placeholderPassword}
              keyboardType="default"
              secureTextEntry
              placeholderTextColor={placeholderColor}
              inputMode="text"
              data-name="userPassword"
              keyboardAppearance="dark"
              returnKeyType="next"
              value={userPassword}
              onChangeText={setUserPassword}
              ref={userPasswordRef}
              onSubmitEditing={confirmPasswordNext}
            />
          </View>
        </View>
        <View style={styles.divInput}>
          <View style={styles.divLabel}>
            <Text style={styles.labelForm}>{labelConfirmPassword}</Text>
            {errors.confirmPassword && (
              <Text style={styles.error}>{errors.confirmPassword}</Text>
            )}
          </View>
          <View style={[styles.sizeInput, styles.Input]}>
            <TextInput
              style={styles.label}
              placeholder={placeholderConfirmPassword}
              keyboardType="default"
              secureTextEntry
              placeholderTextColor={placeholderColor}
              inputMode="text"
              data-name="confirmPassword"
              keyboardAppearance="dark"
              returnKeyType="done"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              ref={confirmPasswordRef}
            />
          </View>
        </View>
        <View style={styles.divButton}>
          <TouchableOpacity
            style={styles.parentButton}
            onPress={handleSubmit}
            disabled={!isFormValid}>
            <Text style={[styles.button, styles.title]}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FormSignUp;
