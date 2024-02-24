import React from "react";
import { View, Text, SafeAreaView, Button } from "react-native";
import { useRoute } from "@react-navigation/native";
import MainScreenHeader from "../../components/MainScreenHeader";
import StackNavigator from "../../screens/MultipleChoiceScreen/StackNavigator";
import { useNavigation } from "@react-navigation/native";
import { Stack } from "expo-router";
const PracticeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const gender = route.params?.gender || "";
  const age = route.params?.age || "";

  return (
    <SafeAreaView>
      <MainScreenHeader />

      <View>
        <StackNavigator />
      </View>
    </SafeAreaView>
  );
};

export default PracticeScreen;
