import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigationState, useNavigation } from "@react-navigation/native";
import { Colors, Screen } from "../../../GlobalStyles";
import BigBtn from "../../components/BigBtn";

const Onboard3 = () => {
  const navigation = useNavigation();
  const goNext = () => {
    navigation.navigate("Getting1");
  };
  const screenWidth = Dimensions.get("window").width;


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
            Những tính năng của ứng dụng
          </Text>
          <View style={styles.ContentContainer}>
            <View style={styles.content}>
              <Text style={{ textAlign: 'center' }}>
                <Text style={{ fontWeight: "600" }}>
                  Học tập - rèn luyện - tiếp thu:
                </Text> <Text> </Text>
                <Text>mô phỏng 2D cơ thể, khóa học dạng flashcard và hình minh họa, game và bài tập rèn luyện phong phú</Text>
              </Text>
              <Text style={{ textAlign: 'center' }}>
                <Text style={{ fontWeight: "600" }}>
                  Tư vấn - Hỗ trợ - Bảo vệ:
                </Text>
                <Text> </Text>
                <Text>
                  Trợ lý AI với lời khuyên khách quan và phù hợp về sức khỏe sinh sản, hỗ trợ nhật ký làm bằng chứng cho nạn nhân bị lạm dụng, công cụ bảo vệ người bị xâm hại.
                </Text>
              </Text>
              <Text style={{ textAlign: 'center' }}  >
                <Text style={{ fontWeight: "600" }}>
                  Khuyến khích - Bổ trợ:
                </Text>
                <Text> </Text>
                <Text>
                  Điểm tích lũy và máu mà bạn sẽ nhận được khi tích cực tìm hiểu về sức khỏe sinh sản. Hãy nhanh tay đổi lấy phần quà nhé!
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
          <BigBtn goNext={goNext} text={'Tiếp tục'} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white'

  }, arrowBack: {
    paddingLeft: 10
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
  ContentContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  content: {
    width: 300,
    marginTop: 20,
    padding: 24,
    borderColor: Colors.peach_orange,
    borderWidth: 5,
    display: 'flex',
    gap: 30,
    borderRadius: 28,
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

export default Onboard3;
