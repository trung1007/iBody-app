import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import MainScreenHeader from "../../components/MainScreenHeader";
import { useNavigation } from "@react-navigation/native";

const BodyScreen = () => {
  const route = useRoute();
  const gender = route.params?.gender || "";
  const age = route.params?.age || "";
  const [imageSource1, setImageSource1] = useState(null);
  const [imageSource2, setImageSource2] = useState(null);
  const [imageSource3, setImageSource3] = useState(null);
  const navigation = useNavigation();
  const [select, SetSelect] = useState("");
  
  useEffect(() => {
    if (gender === "male" && age === "teen") {
      setImageSource1(require("../../../assets/Img/Male/MaleFrame.png"));
    }
    if (gender === "female" && age === "teen") {
      setImageSource1(require("../../../assets/Img/Female/FemaleFrame.png"));
    }
    if (gender === "male" && age === "child") {
      setImageSource1(require("../../../assets/Img/Male/MaleFrame3.png"));
    }
    if (gender === "female" && age === "child") {
      setImageSource1(require("../../../assets/Img/Female/FemaleFrame3.png"));
    }
    if (age === "teen") {
      setImageSource2(require("../../../assets/Img/Female/FemaleFrame2.png"));
      setImageSource3(require("../../../assets/Img/Male/MaleFrame2.png"));
    }
    if (age === "child") {
      setImageSource2(require("../../../assets/Img/Female/FemaleFrame4.png"));
      setImageSource3(require("../../../assets/Img/Male/MaleFrame4.png"));
    }
    if (select != "") {
      navigation.navigate("SubLayout", { select });
    }
  }, [select]);
  const beginImg = "../../../assets/begin.png";
  return (
    <>
      <MainScreenHeader />
      <View style={styles.container}>
        <Image source={imageSource1} style={styles.image1} />
        <Image source={require(beginImg)} />
        <View>
          <View style={styles.TextBox}>
            <Text style={styles.title}>Cơ thể và vùng kín của chúng mình</Text>
            <Text style={styles.description}>
              Ấn vào hình ảnh của từng bạn dưới đây để hiểu về vùng kín trên cơ
              thể của các bạn ấy cũng như chính bạn
            </Text>
          </View>

          <View style={styles.ImgContainer}>
            <Pressable
              onPress={() => {
                SetSelect("female");
              }}
              onPressOut={() => {
                SetSelect("");
              }}
            >
              <Image source={imageSource2} />
            </Pressable>
            <Pressable
              onPress={() => {
                SetSelect("male");
              }}
              onPressOut={() => {
                SetSelect("");
              }}
            >
              <Image source={imageSource3} />
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  TextBox: {
    alignItems: "center", // Center the content horizontally
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18, // Adjust the font size as needed
    marginBottom: 8, // Add some space between title and description
  },
  description: {
    textAlign: "center", // Center the text horizontally
  },
  ImgContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
    bottom: -30,
  },
  image1: {
    marginBottom: 10, // Add space between image1 and image2
  },
});

export default BodyScreen;
