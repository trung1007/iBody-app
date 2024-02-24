import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import MainScreenHeader from "../../components/MainScreenHeader";
import FlashCardScreen from "../../components/flashcard/FlashCardScreen";

const GamePlayScreen = () => {
  const route = useRoute();
  const gender = route.params?.gender || "";
  const age = route.params?.age || "";

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainScreenHeader />

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.headerText}>Flashcard Game</Text>
        <FlashCardScreen />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  headerText: {
    color: "#F99B9B",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default GamePlayScreen;
