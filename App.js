import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Linking } from "react-native";
import React, { useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import "react-native-gesture-handler";
import Onboard1 from "./src/screens/Onboard/Onboard1";
import Onboard2 from "./src/screens/Onboard/Onboard2";
import Onboard3 from "./src/screens/Onboard/Onboard3";
import LoginScreen from "./src/screens/AuthScreen/LoginScreen";
import RegisterScreen from "./src/screens/AuthScreen/RegisterScreen";
import Getting1 from "./src/screens/Getting/Getting1";
import Getting2 from "./src/screens/Getting/Getting2";
import Children from "./src/screens/Getting/Gender/Children";
import Teenager from "./src/screens/Getting/Gender/Teenager";
import Adult from "./src/screens/Getting/Gender/Adult";
import Layout from "./src/screens/MainScreen/Layout";
import SubLayout from "./src/screens/SubScreen/Layout";
import SubBody from "./src/screens/SubScreen/SubBody";
import QuizScreen from "./src/components/multiple-choices/QuizScreen";
import ResultsScreen from "./src/components/multiple-choices/ResultsScreen";
// import RNShake from 'react-native-shake';
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  // const phoneNumber = 113;
  // useEffect(() => {
  //   const subscription = RNShake.addListener(() => {
  //     // Handle shake event...
  //     Linking.openURL(`tel:${phoneNumber}`)
  //   });

  //   return () => {
  //     subscription.remove();
  //   };
  // }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Getting Started">
        <Stack.Screen
          name="Getting Started"
          component={Onboard1}
          options={{
            title: "",
            headerStyle: {
              height: 0,
            },
          }}
        />
        <Stack.Screen
          name="Onboard2"
          component={Onboard2}
          options={{
            title: "",
            headerStyle: {
              height: 0,
            },
            headerLeft: null,
          }}
        />
        <Stack.Screen
          name="Onboard3"
          component={Onboard3}
          options={{
            title: "",
            headerStyle: {
              height: 0,
            },
            headerLeft: null,
          }}
        />
        
        <Stack.Screen
          name="Getting1"
          component={Getting1}
          options={{
            title: "",
            headerStyle: {
              height: 0,
            },
            headerLeft: null,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: "",
            headerStyle: {
              height: 0,
            },
            headerLeft: null,
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            title: "",
            headerStyle: {
              height: 0,
            },
            headerLeft: null,
          }}
        />
        <Stack.Screen
          name="Getting2"
          component={Getting2}
          options={{
            title: "",
            headerStyle: {
              height: 0,
            },
            headerLeft: null,
          }}
        />
        <Stack.Screen
          name="Children"
          component={Children}
          options={{
            title: "",
            headerStyle: {
              height: 0,
            },
            headerLeft: null,
          }}
        />
        <Stack.Screen
          name="Teenager"
          component={Teenager}
          options={{
            title: "",
            headerStyle: {
              height: 0,
            },
            headerLeft: null,
          }}
        />
        <Stack.Screen
          name="Adult"
          component={Adult}
          options={{
            title: "",
            headerStyle: {
              height: 0,
            },
            headerLeft: null,
          }}
        />
        <Stack.Screen
          name="Layout"
          component={Layout}
          options={{
            title: "",
            headerStyle: {
              height: 0,
            },
            headerLeft: null,
          }}
        />
        <Stack.Screen
          name="SubLayout"
          component={SubLayout}
          options={{
            title: "",
            headerStyle: {
              height: 0,
            },
            headerLeft: null,
          }}
        />
        <Stack.Screen
          name="SubBody"
          component={SubBody}
          options={{
            title: "",
            headerStyle: {
              height: 0,
            },
            headerLeft: null,
          }}
        />
        <Stack.Screen
          name="QuizScreen"
          component={QuizScreen}
          options={{
            title: "",
            headerStyle: {
              height: 0,
            },
            headerLeft: null,
          }}
        />
        <Stack.Screen
          name="ResultsScreen"
          component={ResultsScreen}
          options={{
            title: "",
            headerStyle: {
              height: 0,
            },
            headerLeft: null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //   <Text>Home</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
});
