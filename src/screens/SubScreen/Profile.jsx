import React, {useState, useEffect} from "react"
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Image,
    TouchableOpacity,
  } from "react-native";
import { useRoute } from "@react-navigation/native"
import { useNavigation } from "@react-navigation/native";

const Profile = ()=>{
    const navigation = useNavigation();

    return(
    <SafeAreaView>
        <TouchableOpacity onPress={()=>{
            navigation.goBack
        }}>
            <Text>go back</Text>
        </TouchableOpacity>
        <View>
            <Text>Profile</Text>
        </View>
    </SafeAreaView>)
    
}

export default Profile