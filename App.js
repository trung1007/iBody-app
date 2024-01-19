import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import HomeScreen from "./src/screens/MainScreen/HomeScreen";
import SettingsScreen from "./src/screens/MainScreen/SettingsScreen";
import UseStateScreen from "./src/screens/MainScreen/UseStateScreen";
import UseEffectScreen from "./src/screens/MainScreen/UseEffectScreen";
import UseContextScreen from "./src/screens/MainScreen/UseContextScreen";
import UseRefScreen from "./src/screens/MainScreen/UseRefScreen";
import FetchAPIScreen from "./src/screens/MainScreen/FetchAPIScreen";
import Onboard2 from "./src/screens/Onboard/Onboard2";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import "react-native-gesture-handler";
import Onboard1 from "./src/screens/Onboard/Onboard1";
import Onboard3 from "./src/screens/Onboard/Onboard3";

const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
            headerLeft:null
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
            headerLeft:null
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
