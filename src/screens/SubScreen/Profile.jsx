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
    <SafeAreaView style={styles.wrapper}>
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

const styles=StyleSheet.create({
    wrapper:{
        display:'flex',
        flex:1
    }
})

export default Profile