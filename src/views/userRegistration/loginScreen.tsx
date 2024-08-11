import React from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TopBar from '../../components/userRegistration/topBar';
import ImageBear from '../../components/userRegistration/imageBear';
import FormLogIn from '../../components/userRegistration/formLogin';
import UserNavigation from '../../hooks/userNavigation';
import styles from './style/styleAll';

// Definición del componente LogInScreen
const LogInScreen = () => {
  const { goBack, forgetPassword } = UserNavigation()
  return (
    <View style={styles.parentLogIn}>
      <TopBar goBack={goBack} text="Iniciar Sesión" />
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        scrollEnabled={false} // Deshabilita el scroll en la vista
        extraScrollHeight={10} // Ajusta este valor según sea necesario
        keyboardShouldPersistTaps="handled" // Mejora la interacción con los inputs cuando el teclado está visible
        resetScrollToCoords={{ x: 0, y: 0 }} // Esta línea asegura que el scroll vuelva a su posición original
      >
        <ImageBear sizeHeightD="28%" sizeHeightI="28%" sizeWidhtI="50%" />
        <View style={styles.divForm}>
          <FormLogIn forget={forgetPassword} />
        </View>
      </KeyboardAwareScrollView>
    </View>
  )
}

export default LogInScreen
