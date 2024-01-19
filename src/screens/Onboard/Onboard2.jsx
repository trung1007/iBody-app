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
import { Colors } from "../../../GlobleStyles";
const Onboard2 = () => {
  const navigation = useNavigation();
  const goNext=()=>{
    navigation.navigate('Onboard3')
  }
  return (
    <SafeAreaView style={styles.wrapper}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <View style={styles.arrowBack}>
          <FontAwesome name="long-arrow-left" size={28} color={Colors.pink} />
        </View>
      </TouchableOpacity>
      <View style={{ flex: 1, alignItems: "center", marginTop: 10 }}>
        <Image source={require("../../../assets/Logo-iBody.png")} />
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={2}>
            Giá trị cốt lõi của ứng dụng
          </Text>
        </View>
       
        <TouchableOpacity style={styles.goNextContainer} onPress={goNext}>
          <View style = {styles.goNextView}>
            <Text style ={styles.goNextText} >Tiếp tục</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  arrowBack: {
    width: 40,
    paddingLeft: 10,
  },
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
  goNextView:{
    width:300,
    height:50,
    backgroundColor:Colors.caramel,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20
  },
  goNextText:{
    fontSize:18,
    fontWeight:700,
    color:Colors.pink,
    letterSpacing:2,
  }

});

export default Onboard2;
