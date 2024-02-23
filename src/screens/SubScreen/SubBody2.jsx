import { useState, useEffect } from "react"
import { View, Text, Image, SafeAreaView, StyleSheet, TouchableOpacity, ImageBackground } from "react-native"
import { useRoute } from "@react-navigation/native"
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../../GlobalStyles";


const SubBody2 = () => {
    const route = useRoute()
    const select = route.params?.select || '';
    const navigation = useNavigation()

    const [color, setColor] = useState("");
    const [backgroundColor,setBackgroundColor] = useState("")
    const [textcolor, setTextColor]=useState('')
    const [title, setTitle] = useState("");
    const [imgbg, setImgBg] = useState("");
    const [imageBody, setImageBody] = useState("");
    const [img1, setImg1] = useState('')
    const [img2, setImg2] = useState('')
    const [img3, setImg3] = useState('')

    useEffect(() => {
        if (select === "female") {
            setColor(Colors.pink);
            setBackgroundColor('white')
            setTitle("Bộ phận sinh dục nữ");
            setImgBg(require("../../../assets/Img/Component1.png"));
            setImg1(require('../../../assets/Img/Component3.png'))
            setImg2(require('../../../assets/Img/Component4.png'))
            setImg3(require('../../../assets/Img/Component5.png'))

        }
        if (select === "male") {
            setColor(Colors.aero);
            setTitle("Bộ phận sinh dục nam");
            setBackgroundColor('#565656')
            setTextColor('white')
            setImgBg(require("../../../assets/Img/Component7.png"));
            setImg1(require('../../../assets/Img/Component8.png'))
            setImg2(require('../../../assets/Img/Component9.png'))
            setImg3(require('../../../assets/Img/Component10.png'))
        }
    }, [select]);

    return (
        <View style={styles.wrapper}>
            <View style={styles.arrowBack}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <FontAwesome
                        name="long-arrow-left"
                        size={28}
                        color={color || "black"}
                    />
                </TouchableOpacity>
                <Text style={{ fontSize: 16 }}>{title}</Text>

            </View>
            <View style={styles.Bottom}>
                <Image source={imgbg} style={styles.background} />
                <Image source={img1} style={styles.img1} />
                <Image source={img2} style={styles.img2} />
                <Image source={img3} style={styles.img3} />


            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'white',
        display:'flex',
        
    },
    arrowBack: {
        paddingLeft: 10,
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        gap: 10
    },
    Bottom: {
        display: 'flex',
        flex:1,
        alignItems: 'center',
        position: 'relative',
        top:200
    },
    background: {
        position: 'absolute',
        zIndex: -1
    },
    ImgContainer: {
        display: 'flex',
        flexDirection: 'row',
        zIndex: 2,
    },
    img1: {
        position: 'absolute',
        left:10,
        top:160,
        zIndex:3
    },
    img2: {
        position: 'absolute',
        top:70,
        zIndex:2

    }, img3: {
        position: 'absolute',
        right:10,
        top:-34,
        zIndex:1
    },
})

export default SubBody2