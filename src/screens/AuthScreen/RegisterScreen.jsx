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
  Alert,
  Pressable,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import Checkbox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import BigBtn from "../../components/BigBtn";
import { Colors } from "../../../GlobalStyles";
import { IP } from "../../../const";
const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const [isChecked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const goNext = () => {};
  const handleSignUp = async () => {
    setLoading(true);
    if (isChecked) {
      try {
        const response = await axios.post(`http://${IP}:8080/api/auth/signup`, {
          username: username, // Assuming you want to use email as the username
          email,
          password,
          role: ["user"],
        });
        if (response.status === 200) {
          Alert.alert("Success", "Account created successfully!");
          navigation.navigate("Login");
          setLoading(false);
        } else {
          Alert.alert("Failure", "Can't create account!");
        }
      } catch (error) {
        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          "An error occurred during sign up";
        Alert.alert("Error", errorMessage);
      }
    } else {
      Alert.alert("Error", "You must accept the terms to continue");
    }
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.arrowBack}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="ios-arrow-back" size={28} color={Colors.pink} />
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        enabled={Platform.OS === "ios"}
      >
        <Image
          style={styles.image}
          source={require("../../../assets/Logo-iBody.png")}
        />
        <View style={styles.title}>
          <Text style={styles.textTitle}>Tạo tài khoản mới</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.formInput}>
            <Text style={styles.label}>Username: </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setUsername(text)}
              value={username}
              placeholder="Nhập username của bạn"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.formInput}>
            <Text style={styles.label}>Gmail/Số điện thoại của bạn: </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder="Nhập gmail/số điện thoại của bạn"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.formInput}>
            <Text style={styles.label}>Mật khẩu của bạn:</Text>
            <TextInput
              style={styles.textInput}
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
            <Text
              onPress={() => navigation.navigate("TermsAndConditions")}
              style={{ color: Colors.pink }}
            >
              Điều khoản sử dụng
            </Text>{" "}
            và{" "}
            <Text
              onPress={() => navigation.navigate("PrivacyPolicy")}
              style={{ color: Colors.pink }}
            >
              chính sách bảo mật
            </Text>{" "}
            của ứng dụng{" "}
          </Text>
        </View>
        <Pressable style={{ marginTop: 20 }} onPress={handleSignUp}>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <BigBtn goNext={goNext} text={"Đăng ký"} />
          )}
        </Pressable>
        <Pressable
          style={{ marginTop: 15 }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            Already have an account? Log in
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
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
    borderRadius: 20,
  },
  exit: {
    position: "absolute",
    right: 10,
    top: 10,
  },
});

export default RegisterScreen;
