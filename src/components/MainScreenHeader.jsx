import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import { Icon } from "react-native-vector-icons/icon";
// import { FaSymbol } from "@fortawesome/fontawesome-svg-core";

const MainScreenHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Logo-iBody.png")}
        style={styles.image}
      />
      <View style={styles.mana}>
        <Text>stamina</Text>
        <Text>0</Text>
      </View>
      <View style={styles.mana}>
      <Text>Heart</Text>
        <Text>0</Text>
      </View>
      <View>
        <Text>Alert</Text>
      </View>
      <View>
        <TouchableOpacity>
            <Image source={require('../../assets/IMG_0655.jpg')} style={styles.avatar}/>
        </TouchableOpacity>
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
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
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
