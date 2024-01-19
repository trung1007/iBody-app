import React, { useEffect } from "react";
import { View, Text } from "react-native";

const FetchAPIScreen = () => {
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
            const json = await response.json();
            console.log(json);
          } catch (error) {
            console.error('Error:', error);
          }
        };
      
        fetchData();
      }, []);

  return <View></View>;
};

export default FetchAPIScreen;
