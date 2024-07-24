// Propósito: Archivo principal de la aplicación, se encarga de la navegación entre pantallas
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/views/userRegistration/welcome'
import LogInScreen from './src/views/userRegistration/login'
import SignUp from './src/views/userRegistration/signup'
import ForgetPassword from './src/views/userRegistration/forgetpassword'
import HomeScreen from './src/views/userPrincipal/homeScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './src/hooks/config/firebase'
import { Alert } from 'react-native';

//Esto nos ayuda a navegar entre pantallas
const Stack = createNativeStackNavigator()

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.emailVerified) {
          setIsLoggedIn(true);
          console.log('email verificado')
        } else {
          // Puedes mostrar un mensaje de error aquí si lo deseas
          console.log('Email no verificado');
          Alert.alert('Error', 'Correo no ha sido verificado')
          setIsLoggedIn(false);
        }
      } else {
        setIsLoggedIn(false);
      }
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  if (loading) {
    // Puedes mostrar un spinner o una pantalla de carga aquí
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLoggedIn ? "Home" : "Welcome"}>
        {isLoggedIn ? (
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={HomeScreen}
          />
        ) : (
          <>
            <Stack.Screen
              name="Welcome"
              options={{ headerShown: false }}
              component={WelcomeScreen}
            />
            <Stack.Screen
              name="LogIn"
              options={{ headerShown: false }}
              component={LogInScreen}
            />
            <Stack.Screen
              name="SignUp"
              options={{ headerShown: false }}
              component={SignUp}
            />
            <Stack.Screen
              name="ForgetPassword"
              options={{ headerShown: false }}
              component={ForgetPassword}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
