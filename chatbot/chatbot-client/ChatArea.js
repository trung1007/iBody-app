import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import ReactMarkdown from "react-native-markdown-display";

const ChatArea = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (text) => {
    setUserInput(text);
  };

  const handleSend = () => {
    if (userInput.trim() !== "") {
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { sender: "user", message: userInput },
      ]);
      setUserInput("");
      setLoading(true);
      sendUserInput(userInput);
    }
  };

  const handleKeyDown = () => {
    handleSend();
  };

  const sendUserInput = (input) => {
    fetch("http://192.168.1.211:5000/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: input,
        top_k: 2,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const gptResponse = data.gpt_response;
        console.log(gptResponse);
        setChatHistory((prevChatHistory) => [
          ...prevChatHistory,
          { sender: "bot", message: gptResponse },
        ]);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
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
            <Text>{chat.sender === "user" ? "User:" : "Bot:"}</Text>
            <ReactMarkdown>{chat.message}</ReactMarkdown>
          </View>
        ))}
      </ScrollView>

      {loading && <ActivityIndicator size="small" color="#0000ff" />}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={userInput}
          onChangeText={handleInputChange}
          onSubmitEditing={handleKeyDown}
          placeholder="Type your message..."
        />
        <Button color="white" title="Send" onPress={handleSend} />
      </View>
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
  inputContainer: {
    flexDirection: "row",
    // position: "absolute",
    // bottom: 0,
    backgroundColor: "#F99B9B",
    padding: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    color: "#F99B9B",
    padding: 8,
    borderRadius: 5,
  },
});

export default ChatArea;
