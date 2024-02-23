import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigationState, useNavigation } from "@react-navigation/native";
import { Colors, Screen } from "../../../GlobalStyles";
import BigBtn from "../../components/BigBtn";
const Onboard2 = () => {
  const screenWidth = Dimensions.get("window").width;
  const navigation = useNavigation();
  const goNext = () => {
    navigation.navigate("Onboard3");
  };
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
      <View style={{ flex: 1, alignItems: "center", marginTop: 10 }}>
        <Image
          style={styles.image}
          source={require("../../../assets/Logo-iBody.png")}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={2}>
            Giá trị cốt lõi của ứng dụng
          </Text>
          <View style={styles.ContentContainer}>
            <View style={styles.content}>
              <Text style={{textAlign:'center'}}>
                <Text style={{ fontWeight: "600" }}>
                  SDS 3 (sức khỏe và có cuộc sống tốt): 
                </Text> <Text> </Text>
                <Text>Bảo vệ người dùng trước nguy cơ xâm hại</Text>
              </Text>
              <Text style={{textAlign:'center'}}>
                <Text style={{ fontWeight: "600" }}>
                  SDG 4 (giáo dục chất lượng): 
                </Text> 
                <Text> </Text>
                <Text>
                  Giáo dục giới tính thiết thực thông qua gamification
                </Text>
              </Text>
              <Text style={{textAlign:'center'}}  >
                <Text style={{ fontWeight: "600" }}>
                  SDG 5 (bình đẳng giới): 
                </Text>
                <Text> </Text>
                <Text>
                  Nâng cao nhận thức trong cộng đồng và nuôi dưỡng sự tôn trọng
                  lẫn nhau{" "}
                </Text>
              </Text>
            </View>
            <View
              style={{
                width: screenWidth,
                position: "relative",
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "row",
                zIndex: -1,
              }}
            >
              <Image
                style={styles.img1}
                source={require("../../../assets/Img/Ellipse/Ellipse_41.png")}
              />
              <Image
                style={styles.img2}
                source={require("../../../assets/Img/Ellipse/Ellipse_42.png")}
              />
              <Image
                style={styles.img3}
                source={require("../../../assets/Img/Ellipse/Ellipse_43.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.goNextContainer}>
          <BigBtn goNext={goNext} text={"Tiếp tục"} />
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
  image: { height: 100, width: 100 },
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
    bottom: 0,
  },
  ContentContainer:{
    display:'flex',
    alignItems:'center'
  },
  content:{
    width:300,
    marginTop:20,
    padding:24,
    borderColor:Colors.peach_orange,
    borderWidth:5,
    display:'flex',
    gap:30,
    borderRadius:28,
  },
  img1: {
    position: "relative",
    top: -150,
    left: 0,
  },
  img2: {
    position: "relative",
    top: -300,
    right: -140,
  },
  img3: {
    position: "relative",
    top: 0,
  },
});

export default Onboard2;
