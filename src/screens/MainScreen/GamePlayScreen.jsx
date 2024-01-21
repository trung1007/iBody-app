import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { useRoute } from "@react-navigation/native";
import MainScreenHeader from "../../components/MainScreenHeader";

const GamePlayScreen = () => {
    const route=useRoute();
    const gender=route.params?.gender || ''
    const age = route.params?.age || ''
  return (
    <SafeAreaView>
        <MainScreenHeader/>

      <View>
        <Text>Game</Text>
      </View>
    </SafeAreaView>
  );
};

export default GamePlayScreen;
