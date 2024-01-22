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
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "../../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import BigBtn from "../../components/BigBtn";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Perform login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };
  const goRegister = () => {
    navigation.navigate("Register");
  };
  const goNext=()=>{
    navigation.navigate('Getting2')
  }

  const navigation = useNavigation();
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
          <Text style={styles.textTitle}>Đăng nhập vào tài khoản của bạn</Text>
        </View>
        <View style={styles.form}>
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

        <View style={styles.bottom}>
          <View>
            <Text style={{ fontSize: 24, fontWeight: "600" }}>
              Đăng nhập bằng
            </Text>
            <View style={styles.logo}>
              <FontAwesome5 name="facebook" size={40} color="blue" />
              <AntDesign name="google" size={40} color="#DB4437" />
            </View>
          </View>
          <View style={styles.register}>
            <Text style={{ fontSize: 16 }}>Bạn chưa có tài khoản?</Text>
            <Button
              title="Bắt đầu ngay"
              color={Colors.pink}
              onPress={goRegister}
            />
          </View>
          <View style={styles.LoginBtn}>
            <BigBtn goNext={goNext} text={'Đăng nhập'}/>
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
  logo: {
    display: "flex",
    flexDirection: "row",
    marginTop: 12,
    marginBottom: 12,
    justifyContent: "space-evenly",
  },
  LoginBtn:{
    position:'absolute',
    bottom:0
  }
});

export default LoginScreen;
