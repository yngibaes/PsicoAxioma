import React from 'react';
import {Text, View, TextInput, Pressable} from 'react-native';
import hookForgetPassword from '../../hooks/userRegistration/hookForget';
import styles from './style/styleFormForget';

const emailPromptText = 'Digite su email para recuperar su contraseña';
const placeholderEmail = 'Escriba su email';
const placeholderColor = '#828282';
const buttonText = 'Enviar';

// Definición del componente FormForget
const FormForget = () => {
  const {resetPassword, userEmail, setUserEmail} = hookForgetPassword();
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
            value={userEmail}
            onChangeText={setUserEmail}
          />
        </View>
      </View>
      <View style={styles.divButton}>
        <Pressable
          style={styles.parentButton}
          onPress={() => resetPassword(userEmail)}>
          <Text style={[styles.button, styles.title]}>{buttonText}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default FormForget;
