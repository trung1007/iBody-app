import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigationState, useNavigation } from "@react-navigation/native";
import { Colors } from "../../../GlobalStyles";
import NextBtn from "../../components/NextBtn";
const Onboard2 = () => {
  const navigation = useNavigation();
  const goNext=()=>{
    navigation.navigate('Onboard3')
  }
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.arrowBack}>
        <TouchableOpacity onPress={() => {
          navigation.goBack();
        }}>
        <FontAwesome name="long-arrow-left" size={28} color={Colors.pink} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, alignItems: "center", marginTop: 10 }}>
        <Image style={styles.image} source={require("../../../assets/Logo-iBody.png")} />
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={2}>
            Giá trị cốt lõi của ứng dụng
          </Text>
        </View>
        <View style={styles.goNextContainer}>
          <NextBtn goNext={goNext}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor:'white'
  },
  arrowBack:{
    paddingLeft:10
  },
  image:{height:100, width:100},
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

export default Onboard2;
