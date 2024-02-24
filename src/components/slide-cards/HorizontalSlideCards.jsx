import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import SlideCard from "./SlideCard";

const HorizontalSlideCards = ({ cardData }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
    >
      {cardData.map((card, index) => (
        <SlideCard key={index} title={card.title} content={card.content} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: "row",
  },
});

export default HorizontalSlideCards;
