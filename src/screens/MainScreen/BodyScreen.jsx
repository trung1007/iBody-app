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
import MainScreenHeader from "../../components/MainScreenHeader";

const BodyScreen = () => {
  const route = useRoute();
  const gender = route.params?.gender || "";
  const age = route.params?.age || "";
  const [linkIMG, setLinkIMG] = useState("");
  const [imageSource1, setImageSource1] = useState(null);
  const [imageSource2, setImageSource2] = useState(null);
  const [imageSource3, setImageSource3] = useState(null);

  useEffect(() => {
    if (gender === "male"&&age==='teen') {
      setImageSource1(require("../../../assets/Img/Male/MaleFrame.png"));
    }
    if (gender === "female"&& age === 'teen') {
      setImageSource1(require("../../../assets/Img/Female/FemaleFrame.png"));
    }
    if(gender === 'male' && age==='child'){
        setImageSource1(require("../../../assets/Img/Male/MaleFrame3.png"));
    }
    if (gender === "female"&& age === 'child') {
        setImageSource1(require("../../../assets/Img/Female/FemaleFrame3.png"));
      }
    if (age === "teen") {
        setImageSource2(require('../../../assets/Img/Female/FemaleFrame2.png'))
        setImageSource3(require('../../../assets/Img/Male/MaleFrame2.png'))
    }
    if(age==='child'){
        setImageSource2(require('../../../assets/Img/Female/FemaleFrame4.png'))
        setImageSource3(require('../../../assets/Img/Male/MaleFrame4.png'))
    }
  }, [gender, age]);

  return (
    <>
      <MainScreenHeader />
      <View style={styles.container}>
        <Image source={imageSource1} />
        <View>
          <Text>Cơ thể và vùng kín của chúng mình</Text>
          <Text>Ấn vào hình ảnh của từng bạn dưới đây để hiểu về vùng kín trên cơ thể của các bạn ấy cũng như chính bạn</Text>
          <View style={styles.ImgContainer}>
            <TouchableOpacity>
              <Image source={imageSource2} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={imageSource3} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop:10,
    // marginLeft:20,
    // marginRight:20,
    // paddingTop: 10,
    // paddingLeft:20,
    // paddingRight:20,
    alignItems: "center",
    justifyContent:'center',
    backgroundColor: "white",
  },
  ImgContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    position:'relative',
    bottom:-30
  }
});
export default BodyScreen;
