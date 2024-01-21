import React from "react";
import { View, Text, SafeAreaView,StyleSheet  } from "react-native";
import { useRoute } from "@react-navigation/native";
import MainScreenHeader from "../../components/MainScreenHeader";

const BodyScreen = () => {
    const route=useRoute();
    const gender=route.params?.gender || ''
    const age = route.params?.age || ''
  return (
    <SafeAreaView>
        <MainScreenHeader/>
      <View >
        <Text>Body</Text>
      </View>
    </SafeAreaView>
  );
};

export default BodyScreen;
