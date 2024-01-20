import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors, Btn, Font } from "../../GlobalStyles";
// import Sound from "react-native-sound";
import { Audio } from "expo-av";
import { useSound } from "../hooks/useSound";

const NextBtn = ({ goNext }) => {
  // const [sound, setSound] = useState();
  const { playSound } = useSound(require('../../assets/sound/Btn_press1.mp3'));

  const onPressHandler = async () => {
    goNext(),
    await playSound();
  };
  // async function playSound(){
  //   console.log('Loading Sound');
  //   const { sound } = await Audio.Sound.createAsync(require('../../assets/sound/Btn_press1.mp3'));
  //   setSound(sound);

  //   console.log('Playing Sound');
  //   await sound.playAsync();
  // }
  // useEffect(() => {
  //   return sound
  //     ? () => {
  //         console.log('Unloading Sound');
  //         sound.unloadAsync();
  //       }
  //     : undefined;
  // }, [sound]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressHandler}>
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
