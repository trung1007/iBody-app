import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreenHeader from "../../../components/MainScreenHeader";
import BodyScreen from "../BodyScreen";
import GamePlayScreen from "../GamePlayScreen";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const MaleScreen = () => {
  const route = useRoute();
  const gender = route.params?.gender || "";
  console.log(gender)

  return (
    <SafeAreaView style={styles.wrapper}>
      <Tab.Navigator>
        <Tab.Screen
          name="BodyScreen"
          component={BodyScreen}
          options={{
            title: "Cơ thể 2D",
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? "body" : "body"}
                size={20}
                color={focused ? "black" : "gray"}
              />
            ),
            headerStyle: {
              height: 0,
            },
          }}
        />
        <Tab.Screen
          name="GameplayScreen"
          component={GamePlayScreen}
          options={{
            title: "Gameplay",
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
  },
});

export default MaleScreen;
