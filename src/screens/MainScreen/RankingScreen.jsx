import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import MainScreenHeader from "../../components/MainScreenHeader";
import ChatArea2 from "../../../chatbot/chatbot-client/ChatArea2";

const RankingScreen = () => {
  const route = useRoute();
  const gender = route.params?.gender || "";
  const age = route.params?.age || "";

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainScreenHeader />

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.sosText}>SOS</Text>
        <ChatArea2 />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sosText: {
    fontWeight: 'bold',
    fontSize: 24, // Adjust the font size as needed
    color:"#f89b89"
  },
});

export default RankingScreen;
