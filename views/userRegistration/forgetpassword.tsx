import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import TopBar from '../../components/topBar';
import UserNavigation from '../../hooks/userNavigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FormForget from '../../components/formForget';
import Button from '../../components/button';

const ForgetPassword = () => {
  const {goBack, logIn} = UserNavigation();
  return (
    <View style={styles.parentAll}>
      <TopBar goBack={goBack} text="Olvidaste tu contraseña" />
      <FormForget />
      <Button
        function={logIn}
        colorButton="#233333"
        colorText="#FFF"
        text="Enviar"
        width="28%"
        height="7%"
        size="5.6%"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentAll: {
    backgroundColor: '#b5d0ce',
    flex: 1,
    width: wp('100%'), // Ancho del contenedor
    height: hp('100%'), // Altura del contenedor
    paddingTop: wp('5%'),
    alignItems: 'center',
    overflow: 'hidden',
    flexDirection: 'column', //	Orden de los elementos
    justifyContent: 'flex-start',
  },
});

export default ForgetPassword;
