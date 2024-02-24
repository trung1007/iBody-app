import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SlideCard = ({ title, content }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f89b89',
    borderRadius: 15,
    padding: 20,
    margin: 10,
    width: 300,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: 'white',
  },
});

export default SlideCard;
