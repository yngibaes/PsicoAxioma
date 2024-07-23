/* eslint-disable react-native/sort-styles */
import React from 'react'
import { Text, TextInput, View, TouchableOpacity } from 'react-native'
import styles from './style/styleFormSignUp'
import hookSignup from '../../hooks/userRegistration/hookSignup'

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
                        <Text style={styles.labelForm}>Nombre</Text>
                        {errors.userName && <Text style={styles.error}>{errors.userName}</Text>}
                    </View>
                    <View style={[styles.sizeInput, styles.Input]}>
                        <TextInput
                            style={styles.label}
                            placeholder="Escriba su nombre"
                            keyboardType="default"
                            placeholderTextColor="#828282"
                            inputMode="text"
                            data-name="userName"
                            keyboardAppearance='dark'
                            returnKeyType='next'
                            value={userName}
                            onChangeText={setUserName}
                            onSubmitEditing={userEmailNext}
                        />
                    </View>
                </View>
                <View style={styles.divInput}>
                    <View style={styles.divLabel}>
                        <Text style={styles.labelForm}>Email</Text>
                        {errors.userEmail && <Text style={styles.error}>{errors.userEmail}</Text>}
                    </View>
                    <View style={[styles.sizeInput, styles.Input]}>
                        <TextInput
                            style={styles.label}
                            placeholder="Escriba su email"
                            keyboardType="email-address"
                            placeholderTextColor="#828282"
                            inputMode="email"
                            data-name="userEmail"
                            keyboardAppearance='dark'
                            returnKeyType='next'
                            value={userEmail}
                            onChangeText={setUserEmail}
                            ref={userEmailRef}
                            onSubmitEditing={userPhoneNext}
                        />
                    </View>
                </View>
                <View style={styles.divInput}>
                    <View style={styles.divLabel}>
                        <Text style={styles.labelForm}>Télefono</Text>
                        {errors.userPhone && <Text style={styles.error}>{errors.userPhone}</Text>}
                    </View>
                    <View style={[styles.sizeInput, styles.Input]}>
                        <TextInput
                            style={styles.label}
                            placeholder="Escriba su número de télefono"
                            keyboardType="numeric"
                            placeholderTextColor="#828282"
                            inputMode="numeric"
                            data-name="userPhone"
                            keyboardAppearance='dark'
                            returnKeyType='next'
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
                        <Text style={styles.labelForm}>Contraseña</Text>
                        {errors.userPassword && <Text style={styles.error}>{errors.userPassword}</Text>}
                    </View>
                    <View style={[styles.sizeInput, styles.Input]}>
                        <TextInput
                            style={styles.label}
                            placeholder="Escriba su contraseña"
                            keyboardType="default"
                            secureTextEntry
                            placeholderTextColor="#828282"
                            inputMode="text"
                            data-name="userPassword"
                            keyboardAppearance='dark'
                            returnKeyType='next'
                            value={userPassword}
                            onChangeText={setUserPassword}
                            ref={userPasswordRef}
                            onSubmitEditing={confirmPasswordNext}
                        />
                    </View>
                </View>
                <View style={styles.divInput}>
                    <View style={styles.divLabel}>
                        <Text style={styles.labelForm}>Repetir Contraseña</Text>
                        {errors.confirmPassword && <Text style={styles.error}>{errors.confirmPassword}</Text>}
                    </View>
                    <View style={[styles.sizeInput, styles.Input]}>
                        <TextInput
                            style={styles.label}
                            placeholder="Repita su contraseña"
                            keyboardType="default"
                            secureTextEntry
                            placeholderTextColor="#828282"
                            inputMode="text"
                            data-name="confirmPassword"
                            keyboardAppearance='dark'
                            returnKeyType='done'
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            ref={confirmPasswordRef}
                        />
                    </View>
                </View>
                <View style={styles.divButton}>
                    <TouchableOpacity style={styles.parentButton} onPress={handleSubmit}
                        disabled={!isFormValid} >
                        <Text style={[styles.button, styles.title]}>
                            Enviar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default FormSignUp