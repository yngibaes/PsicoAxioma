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
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SideBar from './src/components/otherComponents/sideBar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StatisticsScreen from './src/views/userAccount/statisticsScreen'
import ProfileScreen from './src/views/userAccount/profileScreen'
import SettingsScreen from './src/views/userAccount/settingsScreen'
import { Icon } from 'react-native-elements'


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
  const Drawer = createDrawerNavigator();
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        {isLoggedIn ? (
          <Drawer.Navigator
            drawerContent={props => <SideBar {...props} />}
            screenOptions={{
              headerShown: false,
              drawerActiveBackgroundColor: '#B5D0CE',
              drawerActiveTintColor: '#fff',
              drawerInactiveTintColor: '#000',
              drawerLabelStyle: {
                fontFamily: 'InterBold',
                fontSize: 15
              }
            }}
            initialRouteName='Home'>
            <>
              <Drawer.Screen name="Home" component={HomeScreen} options={{
                drawerItemStyle: { display: 'none' } // Oculta esta pantalla del drawer
              }} />
              <Drawer.Screen name="Calendary" component={CalendaryScreen} options={{
                drawerItemStyle: { display: 'none' } // Oculta esta pantalla del drawer
              }} />
              <Drawer.Screen name="Camera" component={CameraScreen} options={{
                drawerItemStyle: { display: 'none' } // Oculta esta pantalla del drawer
              }} />
              <Drawer.Screen name="Diary" component={DiaryScreen} options={{
                drawerItemStyle: { display: 'none' } // Oculta esta pantalla del drawer
              }} />
              <Drawer.Screen name="Routes" component={RoutesScreen} options={{
                drawerItemStyle: { display: 'none' } // Oculta esta pantalla del drawer
              }} />
              <Drawer.Screen name="CreateDiaryScreen" component={CreateDiaryScreen} options={{
                drawerItemStyle: { display: 'none' } // Oculta esta pantalla del drawer
              }} />
              <Drawer.Screen name="ReadDiaryIDScreen" component={ReadDiaryIDScreen} options={{
                drawerItemStyle: { display: 'none' } // Oculta esta pantalla del drawer
              }} />
            </>
            <Drawer.Screen name="Estadísticas" component={StatisticsScreen}
              options={{
                drawerIcon: () => (
                  <Icon
                    name="stats-chart-outline"
                    type="ionicon"
                    color="#000"
                    size={24}
                  />
                )
              }}
            />
            <Drawer.Screen name="Perfil" component={ProfileScreen}
              options={{
                drawerIcon: () => (
                  <Icon
                    name="person-outline"
                    type="ionicon"
                    color="#000"
                    size={24}
                  />
                )
              }}
            />
            <Drawer.Screen name="Configuración" component={SettingsScreen}
              options={{
                drawerIcon: () => (
                  <Icon
                    name="settings-outline"
                    type="ionicon"
                    color="#000"
                    size={24}
                  />
                )
              }}
            />

          </Drawer.Navigator>
        ) : (
          <Stack.Navigator initialRouteName="Scroll">
            <Stack.Screen name="Scroll" options={{ headerShown: false }} component={Scroll} />
            <Stack.Screen name="Welcome" options={{ headerShown: false }} component={WelcomeScreen} />
            <Stack.Screen name="LogIn" options={{ headerShown: false }} component={LogInScreen} />
            <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUp} />
            <Stack.Screen name="ForgetPassword" options={{ headerShown: false }} component={ForgetPassword} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}
