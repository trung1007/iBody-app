import React from "react"
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from "react-native"
import SellectHeader from "../../../components/SellectGenderHeader"
import NextBtn from "../../../components/NextBtn"

const Children = () =>{

    const goNext=()=>{

    }

    return (
        <SafeAreaView style={styles.wrapper}>
            <SellectHeader/>
            <View style={styles.ImgContainer}>
                <TouchableOpacity>
                    <Image source={require('../../../../assets/age/FemaleChild.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../../../assets/age/MaleChild.png')}/>
                </TouchableOpacity>
            </View>
            <View style={styles.goNextContainer}>
                <NextBtn goNext={goNext}/>
            </View>
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    wrapper:{
        flex:1,
        marginLeft:10,
        marginRight:10,
        
    },
    ImgContainer:{
        display:'flex',
        flexDirection:'row',
        gap: 10,
        justifyContent:'center',
        alignItems:'center'
    },
    goNextContainer:{
        position:'absolute',
        bottom:20,
        alignItems:'center',
        justifyContent:'center',
        width:'100%',

    }
})

export default Children