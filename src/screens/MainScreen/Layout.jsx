import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BodyScreen from "./BodyScreen";
import GamePlayScreen from "./GamePlayScreen";
import PracticeScreen from "./PracticeScreen";
import RankingScreen from "./RankingScreen";
import AIScreen from "./AIScreen";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
// import { FontAwesome6 } from '@expo/vector-icons';
import { useRoute } from "@react-navigation/native";
import { Colors } from "../../../GlobalStyles";

const Tab = createBottomTabNavigator();

const Layout = () => {
  const route = useRoute();
  const gender = route.params?.gender || "";
  const age = route.params?.age || "";
  const [color, setColor] = useState();
  useEffect(() => {
    if (gender === "female") {
      setColor(Colors.pink);
    }
    if (gender === "male") {
      setColor(Colors.aero);
    }
  });
  return (
    <SafeAreaView style={styles.wrapper}>
      <Tab.Navigator>
        <Tab.Screen
          name="BodyScreen"
          initialParams={{ gender, age }}
          component={BodyScreen}
          options={{
            title: "Cơ thể 2D",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "body" : "body"}
                size={20}
                color={focused ? color : "gray"}
              />
            ),
            tabBarActiveTintColor: color,
            headerStyle: {
              height: 0,
            },
          }}
        />
        <Tab.Screen
          name="GameplayScreen"
          component={GamePlayScreen}
          initialParams={{ gender, age }}
          options={{
            title: "Gameplay",
            tabBarIcon: ({ focused }) => (
              <FontAwesome
                name={focused ? "gamepad" : "gamepad"}
                size={20}
                color={focused ? color : "gray"}
              />
            ),
            tabBarActiveTintColor: color,
            headerStyle: {
              height: 0,
            },
          }}
        />
        <Tab.Screen
          name="Ranking"
          component={RankingScreen}
          initialParams={{ gender, age }}
          options={{
            title: "SOS",
            tabBarIcon: ({ focused }) => (
              <FontAwesome
                name={focused ? "star" : "star"}
                size={20}
                color={focused ? color : "gray"}
              />
            ),
            tabBarActiveTintColor: color,
            headerStyle: {
              height: 0,
            },
          }}
        />
        <Tab.Screen
          name="Practice"
          component={PracticeScreen}
          initialParams={{ gender, age }}
          options={{
            title: "Tập luyện",
            tabBarIcon: ({ focused }) => (
              <FontAwesome
                name={focused ? "book" : "book"}
                size={20}
                color={focused ? color : "gray"}
              />
            ),
            tabBarActiveTintColor: color,
            headerStyle: {
              height: 0,
            },
          }}
        />
        <Tab.Screen
          name="AI"
          component={AIScreen}
          initialParams={{ gender, age }}
          options={{
            title: "Tư vấn AI",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "help" : "help"}
                size={20}
                color={focused ? color : "gray"}
              />
            ),
            tabBarActiveTintColor: color,
            headerStyle: {
              height: 0,
            },
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default Layout;
