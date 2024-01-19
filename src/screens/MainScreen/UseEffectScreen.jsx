import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";

const UseEffectScreen = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return (
    <View>
        <Text>Count: {count} </Text>
    </View>
  )
};
export default UseEffectScreen;
