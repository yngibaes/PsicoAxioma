// Propósito: Archivo principal de la aplicación, se encarga de la navegación entre pantallas
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/views/userRegistration/welcome'
import LogInScreen from './src/views/userRegistration/login'
import SignUp from './src/views/userRegistration/signup'
import ForgetPassword from './src/views/userRegistration/forgetpassword'
import HomeScreen from './src/views/userPrincipal/homeScreen';
import useAuth from './src/hooks/useAuth';

//Esto nos ayuda a navegar entre pantallas
const Stack = createNativeStackNavigator()

export default function App() {
  const { isLoggedIn } = useAuth();
  if (isLoggedIn) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
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
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
