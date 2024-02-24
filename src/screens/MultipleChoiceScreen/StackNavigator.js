import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../components/multiple-choices/HomeScreen";

import QuizScreen from "../../components/multiple-choices/QuizScreen";
import ResultsScreen from "../../components/multiple-choices/ResultsScreen";
const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return <HomeScreen />;
};

export default StackNavigator;

const styles = StyleSheet.create({});
