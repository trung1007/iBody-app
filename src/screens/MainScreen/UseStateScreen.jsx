import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const UseStateScreen = () => {
  const [count, setCount] = useState(0);
  const fruits = [
    "apple",
    "orange",
    "coconut",
    "strawberry",
    "blueberry",
    "graple",
  ];
  const [fruit, setFruit] = useState("banana");

  return (
    <View>
      <Text>Count:{fruit} </Text>
      <Button
        title="increase"
        onPress={() => {
          setCount(count + 1);
          setFruit(fruits[count]);
        }}
      />
      <Button
        title="decrease"
        onPress={() => {
          setCount(count - 1);
          setFruit(fruits[count]);
        }}
      />
    </View>
  );
};

export default UseStateScreen;
