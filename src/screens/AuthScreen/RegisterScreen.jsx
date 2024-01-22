import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Button,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from "react-native";
import Checkbox from "expo-checkbox";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "../../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import BigBtn from "../../components/BigBtn";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const [modal, setModal] = useState(false);
  const goLogin = () => {
    navigation.navigate("Login");
  };
  const [isChecked, setChecked] = useState(false);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.arrowBack}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <FontAwesome name="long-arrow-left" size={28} color={Colors.pink} />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.imgage}
          source={require("../../../assets/Logo-iBody.png")}
        />
        <View style={styles.title}>
          <Text style={styles.textTitle}>Tạo tài khoản mới</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.FormInput}>
            <Text style={styles.label}>Họ và tên của bạn: </Text>
            <TextInput
              style={styles.TextInput}
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder="Nhập họ và tên của bạn"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.FormInput}>
            <Text style={styles.label}>Gmail/Số điện thoại của bạn: </Text>
            <TextInput
              style={styles.TextInput}
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder="Nhập gmail/số điện thoại của bạn"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.FormInput}>
            <Text style={styles.label}>Mật khẩu của bạn:</Text>
            <TextInput
              style={styles.TextInput}
              onChangeText={(text) => setPassword(text)}
              value={password}
              placeholder="Nhập mật khẩu của bạn"
              secureTextEntry
            />
          </View>
        </View>
        <View style={styles.policy}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? Colors.peach_orange : undefined}
          />
          <Text style={styles.policyText}>
            Tôi đồng ý với {""}
            <Text onPress={() => setModal(true)} style={{ color: Colors.pink }}>
              Điều khoản sử dụng
            </Text>{" "}
            và{" "}
            <Text onPress={() => setModal(true)} style={{ color: Colors.pink }}>
              chính sách bảo mật
            </Text>{" "}
            của ứng dụng{" "}
          </Text>
        </View>
        <View style={styles.regisetBtn}>
          <BigBtn goNext={goLogin} text={"Đăng ký"} />
        </View>
      </View>

      {modal && (
        <View style={styles.modal}>
          <TouchableOpacity onPress={()=>{
            setModal(false)
          }} style={styles.exit}>
            <Ionicons name="exit" size={24} color="black" />
          </TouchableOpacity>

          <Text>modal</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "white",
  },
  arrowBack: {
    paddingLeft: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
  },
  imgage: {
    height: 100,
    width: 100,
  },
  title: {
    marginTop: 20,
    marginBottom: 20,
    width: 250,
  },
  textTitle: {
    fontSize: 28,
    fontWeight: "600",
    textAlign: "center",
  },
  form: {
    width: 320,
    display: "flex",
    gap: 10,
  },
  FormInput: {
    display: "flex",
    gap: 5,
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
  },
  TextInput: {
    width: 300,
    height: 50,
    padding: 12,
    borderColor: "gray",
    borderBottomWidth: 2,
  },
  policy: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    width: 320,
    gap: 10,
  },
  policyText: {
    fontSize: 14,
    width: 280,
    alignItems: "center",
    justifyContent: "center",
  },
  regisetBtn: {
    position: "absolute",
    bottom: 0,
  },
  modal: {
    position: "absolute",
    right: 25,
    left: 25,
    top: 250,
    bottom: 250,
    width: "auto",
    height: "auto",
    backgroundColor: Colors.peach_orange,
    borderRadius:20
  },
  exit:{
    position:'absolute',
    right:10,
    top:10,
  },
});

export default RegisterScreen;
