import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { Colors, Font, Btn } from "../../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";


const Getting1 = () => {
  const navigation = useNavigation();
  const goNext = () => {
    navigation.navigate("Getting2");
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <View style={styles.arrowBack}>
          <FontAwesome name="long-arrow-left" size={28} color={Colors.pink} />
        </View>
      </TouchableOpacity>
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
          <View style={styles.getting}>
            <TouchableOpacity onPress={goNext}>
              <Text style={styles.gettingText}>Trải nghiệm ngay</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.register}>
            <Text style={{ fontSize: 16 }}>Bạn chưa có tài khoản?</Text>
            <Button title="Bắt đầu ngay" color={Colors.pink} onPress={goNext} />
          </View>
          <View style={styles.login}>
            <TouchableOpacity>
              <Text style={styles.loginText}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginRight:10,
    marginLeft:10
  },
  title: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  next: {
    position: "absolute",
    bottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  getting: {
    backgroundColor: Colors.pink30,
    width: 300,
    height: 50,
    justifyContent: "center",
    
    alignItems: "center",
    borderRadius: Btn.border,
  },
  gettingText: {
    fontSize: Font.size,
    fontWeight: Font.weight,
    color: Colors.pink,
    fontWeight:'700',
    opacity: 1,
    letterSpacing: Font.spacing,
  },
  register: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 200,
  },
  login: {
    width: Btn.bigWidth,
    height: Btn.bigHeight,
    borderRadius: Btn.border,
    backgroundColor: Colors.pink,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    fontSize: Font.size,
    color: "white",
    fontWeight: '700',
    letterSpacing: Font.spacing,
  },
});

export default Getting1;