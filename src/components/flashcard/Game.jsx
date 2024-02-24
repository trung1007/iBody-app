import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import * as Speech from "expo-speech";
import FlipCard from "react-native-flip-card";

const Game = ({
  wordCount,
  words,
  setCorrectCount,
  setIncorrectCount,
  setGameCompleted,
}) => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    Speech.speak(words[wordIndex].portuguese, { language: "vi-VN" });
  }, [wordIndex]);

  const handleNextWord = () => {
    if (wordIndex < wordCount - 1) {
      setWordIndex(wordIndex + 1);
    } else {
      setGameCompleted(true);
    }
  };

  const handleAnswer = (answer) => {
    if (answer === "correct") {
      setCorrectCount((prevCount) => prevCount + 1);
    } else if (answer === "incorrect") {
      setIncorrectCount((prevCount) => prevCount + 1);
    }

    handleNextWord();
  };

  const renderFlashCard = () => {
    const currentWord = words[wordIndex];
    const { portuguese, english } = currentWord;

    return (
      <FlipCard
        style={styles.flashCardContainer}
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={false}
        clickable={true}
      >
        {/* Front Side */}
        <View style={[styles.flashCard, { backgroundColor: "#FFF" }]}>
          <TouchableOpacity
            style={styles.flipButton}
            onPress={() => Speech.speak(portuguese, { language: "vi-VN" })}
          >
            <Icon name="volume-up" type="font-awesome" size={24} />
          </TouchableOpacity><Text style={styles.titleText}>Question</Text>
          <Text style={styles.wordText}>{portuguese}</Text>
        </View>

        {/* Back Side */}
        <View style={[styles.flashCard, { backgroundColor: "#FFF" }]}>
          <TouchableOpacity
            style={styles.flipButton}
            onPress={() => Speech.speak(english, { language: "en-US" })}
          >
            <Icon name="volume-up" type="font-awesome" size={24} />
          </TouchableOpacity><Text style={styles.titleText}>Answer</Text>
          <Text style={styles.wordText}>{english}</Text>
        </View>
      </FlipCard>
    );
  };

  return (
    <View style={styles.container}>
      {renderFlashCard()}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAnswer("incorrect")}
        >
          <Icon name="times" type="font-awesome" size={24} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAnswer("correct")}
        >
          <Icon name="check" type="font-awesome" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  flashCardContainer: {
    width: 300,
    height: 150,
  },
  flashCard: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    borderColor: "#f89b89",
    borderWidth: 4,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  wordText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#FFF",
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    elevation: 5,
    borderColor: "#f89b89",
    borderWidth: 4,
  },
  flipButton: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 10,
  },
};

export default Game;