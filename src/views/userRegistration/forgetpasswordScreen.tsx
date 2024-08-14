import React from 'react';
import { View } from 'react-native';
import TopBar from '../../components/userRegistration/topBar';
import FormForget from '../../components/userRegistration/formForget';
import UserNavigation from '../../hooks/userNavigation';
import styles from './style/styleAll';

// Definición del componente ForgetPasswordScreen
const ForgetPasswordScreen = () => {
  const { goBack } = UserNavigation();
  return (
    <View style={styles.parentForget}>
      <TopBar goBack={goBack} text="Olvidaste tu contraseña" />
      <FormForget />
    </View>
  );
};

export default ForgetPasswordScreen;
