import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
} from "react-native";
// import { Link } from "expo-router";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "../../../GlobalStyles";

import Onboard2 from "./Onboard2";
// import Layout from "../MainScreen/layout";

const Stack = createNativeStackNavigator();

const Onboard1 = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image source={require("../../../assets/Logo-iBody.png")} />
        <View style={styles.title}>
          <Text style={{ fontSize: 16, fontWeight: 600 }}>
            iBody-Thấu hiểu thân thể bạn
          </Text>
          <Text style={{ fontSize: 16, fontWeight: 600 }}>
            Giảm thiểu những vấn nạn
          </Text>
        </View>

        <View style={styles.next}>
          <Text style={{ fontSize: 16 }}>iBody là gì?</Text>
          <Button
            title="Tìm hiểu ngay"
            color={Colors.pink}
            onPress={() => navigation.navigate("Onboard2")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: "flex",
    backgroundColor: "white",
  },
  title: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },

  next: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontSize: 30,
    position: "absolute",
    bottom: 20,
    marginRight: 20,
  },
});

export default Onboard1;
