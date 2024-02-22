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
  Pressable,
  ActivityIndicator,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "../../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import BigBtn from "../../components/BigBtn";
import AuthService from "../../services/auth.service";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [checked, setChecked] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setMessage("");

    try {
      const response = await AuthService.login(username, password);
      if (response.status === 200) {
        setLoading(false);
        // navigation.navigate("Home");
        goNext();
      } else {
        Alert.alert("Failure", "Logged in fail");
      }
    } catch (error) {
      setLoading(false);
      const errorMessage =
        error.response?.data?.message || error.message || "An error occurred";
      setMessage(errorMessage);
      Alert.alert("Error", errorMessage);
    }
  };

  const goRegister = () => {
    navigation.navigate("Register");
  };

  const goNext = () => {
    navigation.navigate("Getting2");
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../../assets/Logo-iBody.png")}
        />
        <View style={styles.title}>
          <Text style={styles.textTitle}>Đăng nhập vào tài khoản của bạn</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.formInput}>
            <Text style={styles.label}>Username của bạn: </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setUsername(text)}
              value={username}
              placeholder="Nhập username của bạn"
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

        <View style={styles.bottom}>
          <View style={styles.register}>
            <Text style={{ fontSize: 16 }}>Bạn chưa có tài khoản?</Text>
            <Button
              title="Bắt đầu ngay"
              color={Colors.pink}
              onPress={goRegister}
            />
          </View>
          <View style={styles.loginBtn}>
            <Pressable onPress={handleLogin}>
              {loading ? (
                <ActivityIndicator />
              ) : (
                <BigBtn goNext={handleLogin} text={"Đăng nhập"} />
              )}
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
  },
  image: {
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
  formInput: {
    display: "flex",
    gap: 5,
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
  },
  textInput: {
    width: 300,
    height: 50,
    padding: 12,
    borderColor: "gray",
    borderBottomWidth: 2,
  },
  bottom: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    height: 200,
  },
  register: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  loginBtn: {
    position: "absolute",
    bottom: 0,
  },
});

export default LoginScreen;
