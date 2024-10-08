import React from "react";
import { View, ViewStyle } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/userPrincipal/homeScreen";
import CalendaryScreen from "../../screens/userPrincipal/calendaryScreen";
import CameraScreen from "../../screens/userPrincipal/cameraScreen";
import DiaryScreen from "../../screens/userPrincipal/diaryScreen";
import RoutesScreen from "../../screens/userPrincipal/routesScreen";
import styles from "./style/styleTabNavigator";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import colorTheme from '../../assets/color-theme.json';
import Ionicons from "react-native-vector-icons/Ionicons";

const routeName = "Home";
const iconSize = 30;
const iconColor = "#000";

const getIconName = (routeName: string, focused: boolean) => {
  switch (routeName) {
    case "Home":
      return focused ? "home" : "home-outline";
    case "Calendary":
      return focused ? "calendar" : "calendar-outline";
    case "Camera":
      return focused ? "aperture" : "aperture-outline";
    case "Diary":
      return focused ? "reader" : "reader-outline";
    case "Routes":
      return focused ? "call" : "call-outline";
    default:
      return "";
  }
};

const getTabBarStyle = (routeName: string): ViewStyle => {
  if (routeName === "Camera") {
    return {
      display: "none",
    };
  }
  return {
    backgroundColor: colorTheme.PsicoAxiomaColors.registrationContainer,
    borderRadius: 20,
    display: "flex",
    marginHorizontal: wp("2%"),
    marginBottom: hp("0.8%"),
    marginTop: hp("0.2%"),
  };
};

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName={routeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            const iconName = getIconName(route.name, focused);
            return (
              <Ionicons name={iconName} size={iconSize} color={iconColor} />
            );
          },
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: getTabBarStyle(route.name),
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Calendary" component={CalendaryScreen} />
        <Tab.Screen name="Camera" component={CameraScreen} />
        <Tab.Screen name="Diary" component={DiaryScreen} />
        <Tab.Screen name="Routes" component={RoutesScreen} />
      </Tab.Navigator>
    </View>
  );
};

export default TabNavigator;
