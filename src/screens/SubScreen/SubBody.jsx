import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "../../../GlobalStyles";

const SubBody = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const select = route.params?.select || "";
  const [color, setColor] = useState("");
  const [title, setTitle] = useState("");
  const [img, setImg] = useState(null);
  const [imageBody, setImageBody] = useState("");
  useEffect(() => {
    if (select === "female") {
      setColor(Colors.pink);
      setTitle("Cơ thể và vùng kín của bạn nữ");
      setImg(require("../../../assets/Img/Female/FemaleFrame5.png"));
      setImageBody(require("../../../assets/Img/Female/FemaleBody.png"));
    }
    if (select === "male") {
      setColor(Colors.aero);
      setTitle("Cơ thể và vùng kín của bạn nam");
      setImg(require("../../../assets/Img/Male/MaleFrame5.png"));
      setImageBody(require("../../../assets/Img/Male/MaleBody.png"));
    }
  }, [select]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.arrowBack}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <FontAwesome
            name="long-arrow-left"
            size={28}
            color={color || "black"}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text>{title}</Text>
        <Image source={img} />
        <Image source={imageBody} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  arrowBack: {
    paddingLeft: 10,
  },
  icon: {
    fontSize: 28,
    color: Colors.pink,
  },
  content: {
    paddingRight: 10,
    paddingLeft: 10,
  },
});

export default SubBody;
