import { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Pressable,
  Modal,
  Button,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../../GlobalStyles";
import YouTube from "react-native-youtube";
import WebView from "react-native-webview";
import Video from "react-native-video";

const SubBody2 = () => {
  const route = useRoute();
  const select = route.params?.select || "";
  const navigation = useNavigation();

  const [color, setColor] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textcolor, setTextColor] = useState("");
  const [title, setTitle] = useState("");
  const [imgbg, setImgBg] = useState("");
  const [imageBody, setImageBody] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
  const [modal1Visible, setModal1Visible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);
  const [modal3Visible, setModal3Visible] = useState(false);
  const [modal4Visible, setModal4Visible] = useState(false);
  const [webViewVisible, setWebViewVisible] = useState(false);

  const toggleWebView = () => {
    setWebViewVisible(!webViewVisible);
  };
  const outModal = () => {
    setModal1Visible(false), setWebViewVisible(false);
  };
  useEffect(() => {
    if (select === "female") {
      setColor(Colors.pink);
      setBackgroundColor("white");
      setTitle("Bộ phận sinh dục nữ");
      setImgBg(require("../../../assets/Img/Component1.png"));
      setImg1(require("../../../assets/Img/Component3.png"));
      setImg2(require("../../../assets/Img/Component4.png"));
      setImg3(require("../../../assets/Img/Component5.png"));
      setImg4(require("../../../assets/Img/Group750.png"));
    }
    if (select === "male") {
      setColor(Colors.aero);
      setTitle("Bộ phận sinh dục nam");
      setBackgroundColor("#565656");
      setTextColor("white");
      setImgBg(require("../../../assets/Img/Component7.png"));
      setImg1(require("../../../assets/Img/Component8.png"));
      setImg2(require("../../../assets/Img/Component9.png"));
      setImg3(require("../../../assets/Img/Component10.png"));
      setImg4(require("../../../assets/Img/Component11.png"));
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
      <View></View>
      <View style={styles.Bottom}>
        <Image source={imgbg} style={styles.background} />
        <Pressable style={styles.img4} onPress={() => setModal1Visible(true)}>
          <Image source={img4} />
          <Modal
            visible={modal1Visible}
            animationType="slide"
            transparent={true}
            onRequestClose={() => setModal1Visible(false)}
          >
            <SafeAreaView style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Button title="Xem Video" onPress={toggleWebView}></Button>
                {webViewVisible && (
                  <WebView
                    source={{
                      uri: "https://www.youtube.com/watch?v=EUgV-2_ogl8",
                    }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    style={styles.webview}
                  />
                )}
                
                <Button title="Close Modal" onPress={outModal} style = {{position:'absolute', bottom:0}}  />
              </View>
            </SafeAreaView>
          </Modal>
        </Pressable>
        <Pressable style={styles.img1} onPress={() => setModal2Visible(true)}>
          <Image source={img1} />
          <Modal
            visible={modal2Visible}
            animationType="slide"
            transparent={true}
            onRequestClose={() => setModal2Visible(false)}
          >
            <SafeAreaView style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalText}>Cấu tạo của bộ phận</Text>
                <Button title="Xem Video" onPress={toggleWebView}></Button>
                {webViewVisible && (
                  <WebView
                    source={{
                      uri: "https://www.youtube.com/watch?v=EUgV-2_ogl8",
                    }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    style={styles.webview}
                  />
                )}
                <Button
                  title="Close Modal"
                  onPress={() => setModal2Visible(false)}
                />
              </View>
            </SafeAreaView>
          </Modal>
        </Pressable>
        <Pressable style={styles.img2} onPress={() => setModal3Visible(true)}>
          <Image source={img2} />
          <Modal
            visible={modal3Visible}
            animationType="slide"
            transparent={true}
            onRequestClose={() => setModal3Visible(false)}
          >
            <SafeAreaView style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalText}>Quan hệ và an toàn</Text>
                <Button title="Xem Video" onPress={toggleWebView}></Button>
                {webViewVisible && (
                  <WebView
                    source={{
                      uri: "https://www.youtube.com/watch?v=EUgV-2_ogl8",
                    }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    style={styles.webview}
                  />
                )}
                <Button
                  title="Close Modal"
                  onPress={() => setModal3Visible(false)}
                />
              </View>
            </SafeAreaView>
          </Modal>
        </Pressable>
        <Pressable style={styles.img3} onPress={() => setModal4Visible(true)}>
          <Image source={img3} />
          <Modal
            visible={modal4Visible}
            animationType="slide"
            transparent={true}
            onRequestClose={() => setModal4Visible(false)}
          >
            <SafeAreaView style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalText}>Vệ sinh và chăm sóc</Text>
                <Button title="Xem Video" onPress={toggleWebView}></Button>
                {webViewVisible && (
                  <WebView
                    source={{
                      uri: "https://www.youtube.com/watch?v=EUgV-2_ogl8",
                    }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    style={styles.webview}
                  />
                )}
                <Button
                  title="Close Modal"
                  onPress={() => setModal4Visible(false)}
                />
              </View>
            </SafeAreaView>
          </Modal>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "white",
    display: "flex",
  },
  arrowBack: {
    paddingLeft: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  Bottom: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    position: "relative",
    top: 200,
  },
  background: {
    position: "absolute",
    zIndex: -1,
  },
  ImgContainer: {
    display: "flex",
    flexDirection: "row",
    zIndex: 2,
  },
  img1: {
    position: "absolute",
    left: 10,
    top: 160,
    zIndex: 3,
  },
  img2: {
    position: "absolute",
    top: 70,
    zIndex: 2,
  },
  img3: {
    position: "absolute",
    right: 10,
    top: -34,
    zIndex: 1,
  },
  img4: {
    position: "absolute",
    top: -150,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: Colors.peach_orange,
  },
});

export default SubBody2;
