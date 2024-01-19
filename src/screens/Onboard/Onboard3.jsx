import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigationState, useNavigation } from "@react-navigation/native";
import { Colors } from "../../../GlobalStyles";
import NextBtn from "../../components/NextBtn";

const Onboard3 = () => {
  const navigation = useNavigation();
  const goNext = () => {
    navigation.navigate("Getting1");
  };
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
      <View style={{ flex: 1, alignItems: "center", marginTop: 10 }}>
        <Image source={require("../../../assets/Logo-iBody.png")} />
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={2}>
            Những tính năng của ứng dụng
          </Text>
        </View>

        {/* <TouchableOpacity style={styles.goNextContainer} onPress={goNext}>
          <View style={styles.goNextView}>
            <Text style={styles.goNextText}>Tiếp tục</Text>
          </View>
        </TouchableOpacity> */}
        <View style={styles.goNextContainer}>
          <NextBtn goNext={goNext} />
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

  titleContainer: {
    marginTop: 15,
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "600",
    lineHeight: 30,
    textAlign: "center",
  },
  goNextContainer: {
    position: "absolute",
    bottom: 20,
  },
  
});

export default Onboard3;
