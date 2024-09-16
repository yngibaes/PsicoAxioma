import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Scroll from "./userRegistration/scrollTutorial";
import WelcomeScreen from "./userRegistration/welcomeScreen";
import LogInScreen from "./userRegistration/loginScreen";
import SignUpScreen from "./userRegistration/signupScreen";
import ForgetPassword from "./userRegistration/forgetpasswordScreen";
import TabNavigator from "./../components/otherComponents/tabNavigator";
import SideBar from "./../components/otherComponents/sideBar";
import CreateDiaryScreen from "./userPrincipal/createDiaryScreen";
import ReadDiaryIDScreen from "./userPrincipal/readDiaryIDScreen";
import StatisticsScreen from "./userAccount/statisticsScreen";
import ProfileScreen from "./userAccount/profileScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { View, ActivityIndicator } from "react-native";
import useAuth from "../../controller/hooks/useAuth";
import styles from "./userPrincipal/style/styleScreen";

//Esto nos ayuda a navegar entre pantallas
const Stack = createNativeStackNavigator();

export default function Navigation() {
  const { loading, isLoggedIn } = useAuth();

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#479E9C" />
      </View>
    );
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
              drawerActiveBackgroundColor: "#B5D0CE",
              drawerActiveTintColor: "#fff",
              drawerInactiveTintColor: "#000",
              drawerLabelStyle: {
                fontFamily: "InterBold",
                fontSize: wp("4.2%"),
              },
              swipeEnabled: false,
            }}
            initialRouteName="Inicio"
          >
            <Drawer.Screen
              name="Inicio"
              component={TabNavigator}
              options={{
                drawerIcon: ({ focused }) => (
                  <Ionicons
                    name="home-outline"
                    color={focused ? "#fff" : "#000"}
                    size={24}
                  />
                ),
              }}
            />
            <Drawer.Screen
              name="Estadísticas"
              component={StatisticsScreen}
              options={{
                drawerIcon: ({ focused }) => (
                  <Ionicons
                    name="stats-chart-outline"
                    color={focused ? "#fff" : "#000"}
                    size={24}
                  />
                ),
              }}
            />
            <Drawer.Screen
              name="Perfil"
              component={ProfileScreen}
              options={{
                drawerIcon: ({ focused }) => (
                  <Ionicons
                    name="person-outline"
                    color={focused ? "#fff" : "#000"}
                    size={24}
                  />
                ),
              }}
            />
            <>
              <Drawer.Screen
                name="CreateDiaryScreen"
                component={CreateDiaryScreen}
                options={{
                  drawerItemStyle: { display: "none" }, // Oculta esta pantalla del drawer
                }}
              />
              <Drawer.Screen
                name="ReadDiaryIDScreen"
                component={ReadDiaryIDScreen}
                options={{
                  drawerItemStyle: { display: "none" }, // Oculta esta pantalla del drawer
                }}
              />
            </>
          </Drawer.Navigator>
        ) : (
          <Stack.Navigator initialRouteName="Scroll">
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
              component={SignUpScreen}
            />
            <Stack.Screen
              name="ForgetPassword"
              options={{ headerShown: false }}
              component={ForgetPassword}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
