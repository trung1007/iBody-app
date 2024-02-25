import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  KeyboardAvoidingView,
  Linking,
} from "react-native";
import ReactMarkdown from "react-native-markdown-display";

const ChatArea2 = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setChatHistory((prevChatHistory) => [
      ...prevChatHistory,
      {
        sender: "bot",
        message:
          "Cao Trung đang gặp nguy hiểm, tại địa điểm 77 Quan Hoa, Cầu Giấy, Hà Nội.",
      },
    ]);
  }, []);

  const getCurrentTime = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedHours}h${formattedMinutes}${ampm}`;
  };

  // Helper function to get current date
  const getCurrentDate = () => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Months are zero-based
    const year = currentDate.getFullYear();

    return `${day}/${month}/${year}`;
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "height" : "padding"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 130 : 130}
      style={styles.container}
    >
      <ScrollView style={styles.chatContainer}>
        {chatHistory.map((chat, index) => (
          <View
            key={index}
            style={{
              marginTop: 4,
              backgroundColor: chat.sender === "user" ? "#F99B9B" : "white",
              color: chat.sender === "user" ? "white" : "teal",
              padding: 8,
              borderRadius: 5,
              textAlign: chat.sender === "user" ? "right" : "left",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: chat.sender === "user" ? "white" : "#f89b89",
              }}
            >
              {chat.sender === "user" ? "You" : "Cao Trung"}
            </Text>
            <Text style={{ color: "red" }}>
              New:{` ${getCurrentTime()} ${getCurrentDate()} `}
            </Text>
            <ReactMarkdown>{chat.message}</ReactMarkdown>

            <Text
              style={{ color: "red", fontSize: 18, fontWeight:"bold", }}
              onPress={() =>
                Linking.openURL(
                  "maps://app?saddr=21.049521926253878+105.80243027176127&daddr=21.032846803662203+105.8030606426331"
                )
              }
            >
              Xem địa chỉ trên Map
            </Text>
          </View>
        ))}
      </ScrollView>

      {loading && <ActivityIndicator size="small" color="#0000ff" />}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatContainer: {
    flex: 1,
    marginBottom: 30,
  },
});

export default ChatArea2;
