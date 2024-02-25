import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const LandingPage = ({ wordCount, setWordCount, startGame }) => {
  const handleWordCountChange = (value) => {
    setWordCount(value);
  };

  const handleStartGame = () => {
    startGame();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chọn số luợng câu hỏi bạn muốn chơi</Text>
      <Text style={styles.wordCount}>{wordCount}</Text>
      <Slider
        style={styles.slider}
        minimumValue={1}
        maximumValue={100}
        value={wordCount}
        onValueChange={handleWordCountChange}
        step={1}
        thumbTintColor="#000"
        minimumTrackTintColor="#000"
        maximumTrackTintColor="#888"
      />
      <TouchableOpacity style={styles.startButton} onPress={handleStartGame}>
        <Text style={styles.startButtonText}>Start Game</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  wordCount: {
    fontSize: 20,
    marginBottom: 20,
  },
  startButton: {
    backgroundColor: '#f89b89',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  startButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  slider: {
    width: 200,
    marginBottom: 20,
  },
});

export default LandingPage;
