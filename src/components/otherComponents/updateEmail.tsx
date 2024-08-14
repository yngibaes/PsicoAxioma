import React from "react";
import { View, Pressable, Text, TextInput } from "react-native";
import styles from '../userRegistration/style/styleFormForget'
import hookUpdateEmail from "../../hooks/userPrincipal/hookUpdateEmail";

const emailPromptText = 'Digite su email para recuperar su contraseña';
const placeholderEmail = 'Escriba su email';
const placeholderColor = '#828282';
const buttonText = 'Enviar';

const UpdateEmail = () => {
    const { newEmail, setNewEmail, userPassword, setUserPassword, updateEmailUser } = hookUpdateEmail();
    return (
        <View style={styles.parentEmail}>
            <View style={styles.childEmail}>
                <Text style={[styles.divLabel, styles.labelText]}>
                    {emailPromptText}
                </Text>
                <View style={[styles.Input, styles.sizeInput]}>
                    <TextInput
                        style={styles.label}
                        placeholder={placeholderEmail}
                        keyboardType="email-address"
                        placeholderTextColor={placeholderColor}
                        inputMode="email"
                        data-name="userEmail"
                        keyboardAppearance="dark"
                        returnKeyType="next"
                        value={newEmail}
                        onChangeText={setNewEmail}
                    />
                </View>
            </View>
            <View style={styles.childEmail}>
                <Text style={[styles.divLabel, styles.labelText]}>
                    {emailPromptText}
                </Text>
                <View style={[styles.Input, styles.sizeInput]}>
                    <TextInput
                        style={styles.label}
                        placeholder={placeholderEmail}
                        keyboardType="visible-password"
                        placeholderTextColor={placeholderColor}
                        inputMode="text"
                        data-name="userPassword"
                        keyboardAppearance="dark"
                        returnKeyType="next"
                        value={userPassword }
                        onChangeText={setUserPassword}
                    />
                </View>
            </View>

            <View style={styles.divButton}>
                <Pressable
                    style={styles.parentButton}
                    onPress={() => updateEmailUser(newEmail)}>
                    <Text style={[styles.button, styles.title]}>{buttonText}</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default UpdateEmail;