import * as React from 'react';
import {StyleSheet, View, Image, Pressable, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TopBar from '../../components/topBar';
import UserNavigation from '../../hooks/userNavigation';
import FormSignUp from '../../components/userRegistration/formSignUp';
import Button from '../../components/button';
import ImageBear from '../../components/imageBear';

const SignUp = () => {
  const {goBack, logIn} = UserNavigation();
  return (
    <View style={styles.parentAll}>
      <TopBar goBack={goBack} text="Regístrate" />
      <View style={styles.parentForm}>
        <View style={styles.childForm}>
            <View style={styles.ellipseForm}>
            <ImageBear sizeHeightD="19%" sizeHeightI="19%" sizeWidhtI="50%"/>
            </View>
            <View style={styles.backgroundForm}>
                <FormSignUp/>
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
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentAll: {
    flex: 1,
    width: wp('100%'),
    height: hp('100%'),
    paddingTop: wp('5%'),
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: '#b5d0ce',
    flexDirection: 'column', //	Orden de los elementos
    //justifyContent: 'space-evenly', // Alineación de los elementos
  },
  parentForm: {
    height: hp('100%'),
    width: wp('100%'),
    overflow: 'hidden',
  },
  childForm: {
    position: 'absolute',
    height: hp("100%"),
    overflow: 'hidden',
    alignItems: 'center',
  },
  ellipseForm: {
    zIndex: 1,
    width: wp('51%'),
    height: hp('23%'),
    backgroundColor: '#9EACC2',
    padding: 15,
    borderRadius: 100
  },
  backgroundForm: {
    marginTop: hp('-10%'),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: wp('100%'),
    height: hp('73%'),
    alignItems: 'center',
    backgroundColor: '#9EACC2'
  },
});

export default SignUp;
