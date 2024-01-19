import React, { useContext } from "react";
import { View, Text } from "react-native";

// Step 1: Create a context
const MyContext = React.createContext();

// Step 2: Create a component that provides the context value
const ParentComponent = () => {
  const sharedValue = "Hello from Context";

  return (
    <View>
      <MyContext.Provider value={sharedValue}>
        <Text>Cao Trung</Text>
        <ChildComponent />
      </MyContext.Provider>
    </View>
  );
};

// Step 3: Create a child component that consumes the context value
const ChildComponent = () => {
  const contextValue = useContext(MyContext);

  return (
    <View>
      <Text>{contextValue}</Text>
    </View>
  );
};

// Step 4: Render the parent component
const UseContextScreen = () => {
  return (
    <View>
      <ParentComponent />
    </View>
  );
};

export default UseContextScreen;
