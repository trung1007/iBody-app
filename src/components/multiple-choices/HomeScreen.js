import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={{ marginTop: 0 }}>
      <Image
        style={{ height: 370, width: "100%", resizeMode: "contain" }}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9k2hf2J5rbVVpb4Z1Gy4y9D0vWZHQnA1dW6GxHchAKtufJapZ_bJOkZ_ESB3nDoSvgFw&usqp=CAU",
        }}
      />

      <View style={{ padding: 5 }}>
        <Text
          style={{
            textAlign: "center",
            color: "#f89b89",
            fontSize: 20,
            fontWeight: "600",
          }}
        >
          LUẬT CHƠI
        </Text>

        <View
          style={{
            padding: 10,
            backgroundColor: "#f89b89",
            borderRadius: 6,
            marginTop: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <Text style={{ color: "white" }}>•</Text>
            <Text
              style={{
                marginLeft: 4,
                color: "#722F37",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              Với mỗi câu trả lời đúng, em sẽ nhận 5 điểm.
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <Text style={{ color: "white" }}>•</Text>
            <Text
              style={{
                marginLeft: 4,
                color: "#722F37",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              Không trừ điểm nếu em trả lời sai.
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <Text style={{ color: "white" }}>•</Text>
            <Text
              style={{
                marginLeft: 4,
                color: "#722F37",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              Mỗi câu hỏi sẽ có 15 giây đếm ngược.
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <Text style={{ color: "white" }}>•</Text>
            <Text
              style={{
                marginLeft: 4,
                color: "#722F37",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              Bắt buộc trả lời hết các câu hỏi.
            </Text>
          </View>
        </View>
      </View>

      <Pressable
      onPress={() => navigation.navigate("QuizScreen")}
        style={{
          backgroundColor: "#f89b89",
          padding: 14,
          width:120,
          borderRadius: 25,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
        }}
      >
        <Text style={{color:"white",fontWeight:"600",textAlign:"center"}}>Bắt đầu</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
