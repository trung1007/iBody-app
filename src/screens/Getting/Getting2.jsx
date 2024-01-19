import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  Image,
  Button,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "../../../GlobalStyles";

const Getting2 = () => {
  const [age, setAge] = useState(0);

  const navigation = useNavigation();
//   const NavigateAge = ()=>{
//     if(age==1){
//         navigation.navigate('Children')
//     }
//   }
    useEffect(()=>{
        if(age==1){
            navigation.navigate('Children')
        }
        if(age==2){
            navigation.navigate('Teenager')
        }
        if(age==3){
            navigation.navigate('Adult')
        }
    })


  return (
    <SafeAreaView style={styles.wrapper}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <View>
          <FontAwesome name="long-arrow-left" size={28} color={Colors.pink} />
        </View>
      </TouchableOpacity>
      <View style={styles.container}>
        <Image source={require("../../../assets/Logo-iBody.png")} />
        <Text style={styles.title}>Chọn độ tuổi của bạn</Text>
        <View style={styles.ImgContainer}>
          <TouchableOpacity onPress={()=>{setAge(1)}}>
            <Image source={require("../../../assets/age/Children.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{setAge(2)}} >
            <Image source={require("../../../assets/age/Teenager.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{setAge(3)}}>
            <Image source={require("../../../assets/age/Adult.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
  },
  container: {
    alignItems: "center",
  },
  ImgContainer: {
    display: "flex",
    gap: 10,
  },
});

export default Getting2;
