import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import ReactMarkdown from "react-native-markdown-display";

const ChatArea = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setChatHistory((prevChatHistory) => [
      ...prevChatHistory,
      {
        sender: "bot",
        message:
          "Xin chào! Tôi là trợ lý giáo dục giới tính. Tôi được thiết kế để cung cấp thông tin chính xác và hướng dẫn phù hợp cho mọi độ tuổi. Tôi có nhiều kiến thức về giáo dục giới tính và tôi cam kết giúp mọi người điều hướng qua các chủ đề quan trọng một cách an toàn và thông tin. Hãy cho tôi biết nếu bạn có bất kỳ câu hỏi hay yêu cầu gì!",
      },
    ]);
  }, []);

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

  const handleExampleQuestionClick = (exampleQuestion) => {
    setUserInput(exampleQuestion);
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

  const exampleQuestions = [
    "Giai đọan dậy thì là gì? Khi đó, cơ thể các con thay đổi thế nào?",
    "Tại sao lại mọc lông ở vùng kín?",
    "Em bé được sinh ra bằng cách nào?",
  ];

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
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.exampleQuestionsContainer}
        >
          {exampleQuestions.map((question, index) => (
            <TouchableOpacity
              key={index}
              style={styles.exampleQuestionButton}
              onPress={() => handleExampleQuestionClick(question)}
            >
              <Text style={styles.exampleQuestionText}>{question}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            value={userInput}
            onChangeText={handleInputChange}
            onSubmitEditing={handleKeyDown}
            placeholder="Type your message..."
          />
          <Button color="white" title="Send" onPress={handleSend} />
        </View>
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
    flexDirection: "column",
    backgroundColor: "#F99B9B",
    padding: 10,
    height: 130,
  },
  exampleQuestionsContainer: {
    flexDirection: "row",
    marginBottom: 10,
    height: 35,
  },
  exampleQuestionButton: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 5,
    marginRight: 10,
  },
  exampleQuestionText: {
    color: "#F99B9B",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
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
