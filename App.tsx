// Propósito: Archivo principal de la aplicación, se encarga de la navegación entre pantallas
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from './src/views/userRegistration/welcome'
import LogInScreen from './src/views/userRegistration/login'
import SignUp from './src/views/userRegistration/signup'
import ForgetPassword from './src/views/userRegistration/forgetpassword'
import HomeScreen from './src/views/userPrincipal/homeScreen'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './src/hooks/config/firebase'
import Scroll from './src/views/scrollTutorial'
import RoutesScreen from './src/views/userPrincipal/routesScreen'
import CalendaryScreen from './src/views/userPrincipal/calendaryScreen'
import CameraScreen from './src/views/userPrincipal/cameraScreen'
import DiaryScreen from './src/views/userPrincipal/diaryScreen'
import CreateDiaryScreen from './src/views/userPrincipal/createDiaryScreen'
import ReadDiaryIDScreen from './src/views/userPrincipal/readDiaryIDScreen'

//Esto nos ayuda a navegar entre pantallas
const Stack = createNativeStackNavigator()

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        if (user.emailVerified) {
          setIsLoggedIn(true)
          console.log('Se ha iniciado sesión')
          console.log(user)
        } else {
          // Puedes mostrar un mensaje de error aquí si lo deseas
          console.log('No se ha iniciado sesión')
          setIsLoggedIn(false)
        }
      } else {
        setIsLoggedIn(false)
      }
      setLoading(false)
    })

    // Cleanup subscription on unmount
    return () => unsubscribe()
  }, [])

  if (loading) {
    // Puedes mostrar un spinner o una pantalla de carga aquí
    return null
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLoggedIn ? 'Home' : 'Scroll'}>
        {isLoggedIn ? (
          <>
            <Stack.Screen
              name="Home"
              options={{ headerShown: false }}
              component={HomeScreen}
            />
            <Stack.Screen
              name="Calendary"
              options={{ headerShown: false }}
              component={CalendaryScreen}
            />
            <Stack.Screen
              name="Camera"
              options={{ headerShown: false }}
              component={CameraScreen}
            />
            <Stack.Screen
              name="Diary"
              options={{ headerShown: false }}
              component={DiaryScreen}
            />
            <Stack.Screen
              name="Routes"
              options={{ headerShown: false }}
              component={RoutesScreen}
            />
            <Stack.Screen
              name="CreateDiaryScreen"
              options={{ headerShown: false }}
              component={CreateDiaryScreen}
            />
            <Stack.Screen
              name="ReadDiaryIDScreen"
              options={{ headerShown: false }}
              component={ReadDiaryIDScreen}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Scroll"
              options={{ headerShown: false }}
              component={Scroll}
            />
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
