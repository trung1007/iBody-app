import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";

const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

const Layout = () => {
  return (

      <NavigationContainer>
        <Tabs.Screen name="Home" component={HomeScreen} />
        <Tabs.Screen name="Settings" component={SettingsScreen} />
      </NavigationContainer>
    
  );
};

export default Layout;
