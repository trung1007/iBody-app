import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import MainScreenHeader from "../../components/MainScreenHeader";
import ChatArea from "../../../chatbot/chatbot-client/ChatArea";

const AIScreen = () => {
  const route = useRoute();
  const gender = route.params?.gender || "";
  const age = route.params?.age || "";

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainScreenHeader />

      <View style={{ flex: 1 }}>
      <Text style={styles.headerText}>iBody Chatbot</Text>
        <ChatArea />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    color: "#F99B9B", 
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default AIScreen;