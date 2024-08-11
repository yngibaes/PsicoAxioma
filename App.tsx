import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Scroll from './src/views/userRegistration/scrollTutorial';
import WelcomeScreen from './src/views/userRegistration/welcomeScreen';
import LogInScreen from './src/views/userRegistration/loginScreen';
import SignUpScreen from './src/views/userRegistration/signupScreen';
import ForgetPassword from './src/views/userRegistration/forgetpasswordScreen';
import TabNavigator from './src/components/otherComponents/tabNavigator';
import SideBar from './src/components/otherComponents/sideBar';
import CreateDiaryScreen from './src/views/userPrincipal/createDiaryScreen';
import ReadDiaryIDScreen from './src/views/userPrincipal/readDiaryIDScreen';
import StatisticsScreen from './src/views/userAccount/statisticsScreen';
import ProfileScreen from './src/views/userAccount/profileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './src/hooks/config/firebase';
import { Text } from 'react-native';

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
    <Text> Estoy cargando pipipi </Text>
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
                fontSize: wp('4.2%')
              }
            }}
            initialRouteName='Inicio'>
            <>
              <Drawer.Screen name="CreateDiaryScreen" component={CreateDiaryScreen} options={{
                drawerItemStyle: { display: 'none' } // Oculta esta pantalla del drawer
              }} />
              <Drawer.Screen name="ReadDiaryIDScreen" component={ReadDiaryIDScreen} options={{
                drawerItemStyle: { display: 'none' } // Oculta esta pantalla del drawer
              }} />
            </>
            <Drawer.Screen name="Inicio" component={TabNavigator}
              options={{
                drawerIcon: ({ focused }) => (
                  <Ionicons
                    name="home-outline"
                    color={focused ? '#fff' : '#000'}
                    size={24}
                  />
                )
              }} />
            <Drawer.Screen name="Estadísticas" component={StatisticsScreen}
              options={{
                drawerIcon: ({ focused }) => (
                  <Ionicons
                    name="stats-chart-outline"
                    color={focused ? '#fff' : '#000'}
                    size={24}
                  />
                )
              }}
            />
            <Drawer.Screen name="Perfil" component={ProfileScreen}
              options={{
                drawerIcon: ({ focused }) => (
                  <Ionicons
                    name="person-outline"
                    color={focused ? '#fff' : '#000'}
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
            <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUpScreen} />
            <Stack.Screen name="ForgetPassword" options={{ headerShown: false }} component={ForgetPassword} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}
