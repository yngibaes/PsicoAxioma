// Propósito: Archivo principal de la aplicación, se encarga de la navegación entre pantallas
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import WelcomeScreen from './views/userRegistration/welcome'
import LogInScreen from './views/userRegistration/login'
import SignUp from './views/userRegistration/signup'
import ForgetPassword from './views/userRegistration/forgetpassword'

//Esto nos ayuda a navegar entre pantallas
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          options={{headerShown: false}}
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="LogIn"
          options={{headerShown: false}}
          component={LogInScreen}
        />
        <Stack.Screen
          name="SignUp"
          options={{headerShown: false}}
          component={SignUp}
        />
        <Stack.Screen
          name="ForgetPassword"
          options={{headerShown: false}}
          component={ForgetPassword}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
