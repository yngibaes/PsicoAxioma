import React from 'react';
import {View} from 'react-native';
import TitleWelcome from '../../components/userRegistration/tittleWelcome';
import ImageBear from '../../components/userRegistration/imageBear';
import ButtonLogin from '../../components/userRegistration/buttonLogIn';
import UserNavigation from '../../hooks/userNavigation';
import styles from './style/styleAll';

// Definición del componente WelcomeScreen
const WelcomeScreen = () => {
  const {logIn, signUp} = UserNavigation();
  return (
    <View style={styles.parentWelcome}>
      <TitleWelcome />
      <ImageBear sizeHeightD="45%" sizeHeightI="42%" sizeWidhtI="80%" />
      <ButtonLogin LogIn={logIn} SignUp={signUp} />
    </View>
  );
};

export default WelcomeScreen;
