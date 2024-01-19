import React, { useRef } from 'react';
import { View, TextInput, Button } from 'react-native';

const UseRefScreen = () => {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <View>
      <TextInput ref={inputRef} placeholder="Enter something..." />
      <Button title="Focus Input" onPress={handleButtonClick} />
    </View>
  );
};

export default UseRefScreen;