import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Colors , Font} from "../../GlobalStyles";

const SellectHeader = () => {
  const navigation=useNavigation();  
  return(
    <View style={styles.wrapper}>
        <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <View >
          <FontAwesome name="long-arrow-left" size={28} color={Colors.pink} />
        </View>
      </TouchableOpacity>
      <View style={styles.container}>
        <Image source={require('../../assets/Logo-iBody.png')}/>
        <Text style={styles.title}>Chọn giới tính của bạn</Text>
      </View>
    </View>
  );
};

const styles=StyleSheet.create({
    container:{
       justifyContent:'center',
       alignContent:'center',
       alignItems:'center'
    },
    title:{
        fontSize:Font.bigSize,
        fontWeight:'600',
        letterSpacing:Font.spacing
    }

})

export default SellectHeader;
