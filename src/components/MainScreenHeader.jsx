import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import { Icon } from "react-native-vector-icons/icon";
// import { FaSymbol } from "@fortawesome/fontawesome-svg-core";

import { useNavigation, useRoute } from "@react-navigation/native";

const MainScreenHeader = () => {
  const [profile, setProfile] = useState(false);
  const navigation= useNavigation()
  useEffect(()=>{
    if(profile){
      navigation.navigate('SubLayout', {profile})
    }
  },[profile])
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Logo-iBody.png")}
        style={styles.image}
      />
      <View style={styles.mana}>
        {/* <Text>stamina</Text>
        <Text>0</Text> */}
        <Image source={require('../../assets/Img/stamina.png')}/>
      </View>
      <View style={styles.mana}>
      <Image  source={require('../../assets/Img/heart.png')}/>
      </View>
      <Image source={require('../../assets/Img/alert.png')} />
      <View>
        <Pressable onPress={()=>{
          setProfile(true)
        }} onPressOut={()=>{
          setProfile(false)
        }}>
            <Image source={require('../../assets/IMG_0655.jpg')} style={styles.avatar}/>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent:'space-between',
    alignItems:'center',
    // marginLeft: 20,
    // marginRight: 20,
    // marginTop: 10,
    padding:10,
    backgroundColor:'white'
  },
  image: {
    width: 66,
    height: 66,
  },
  mana:{
    display:'flex',
    flexDirection:'row',
    gap:5
  },
  avatar:{
    width: 48,
    height: 48,
    borderRadius:24
  }
});

export default MainScreenHeader;
