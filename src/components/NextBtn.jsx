import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors, Btn, Font } from "../../GlobalStyles";

const NextBtn = ({ goNext }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goNext}>
        <Text style={styles.goNextText}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Btn.bigWidth,
    height: Btn.bigHeight,
    backgroundColor: Colors.pink30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Btn.border,
  },
  goNextText: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.pink,
    letterSpacing: 2,
  },
});

export default NextBtn;
