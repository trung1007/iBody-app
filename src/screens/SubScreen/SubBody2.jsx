import { useState, useEffect, useRef, useRef } from "react";
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
  ScrollView,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../../GlobalStyles";
import YouTube from "react-native-youtube";
import WebView from "react-native-webview";

import HorizontalSlideCards from "../../components/slide-cards/HorizontalSlideCards";

const SubBody2 = () => {
  const outsideGirlObject = [
    {
      title: "Gò mu",
      content:
        "Vị trí của gò mu là phần tích tụ mô mỡ dưới da, nằm nhô cao ở trên âm hộ. Các bé gái khi bước vào giai đoạn dậy thì sẽ thấy bắt đầu mọc lông trên bộ phận gò mu này.",
    },
    {
      title: "Môi lớn",
      content:
        "Bộ phận môi lớn nằm bao bọc bên ngoài, có nhiệm vụ bảo vệ những cơ quan sinh dục còn lại. Lông mu sẽ bắt đầu mọc ở tuổi dậy thì tại vùng da môi lớn, đây cũng là nơi có chứa các tuyến mồ hôi và dầu.",
    },
    {
      title: "Âm vật",
      content:
        "Âm vật chính là phần nhỏ nhô ra ngoài, nơi hai môi bé gặp nhau. Bộ phận này được bao quy đầu âm vật bao phủ và rất nhạy cảm.",
    },
    {
      title: "Lỗ âm đạo",
      content:
        "Lỗ âm đạo có thể co giãn rất tốt để hỗ trợ các cặp đôi khi quan hệ tình dục cũng như quá trình sinh nở ở người phụ nữ được thuận lợi và dễ dàng hơn.",
    },
    {
      title: "Niệu đạo",
      content:
        "Lỗ niệu đạo (lỗ tiểu) có vị trí nằm dưới âm vật khoảng 2cm. Nhiệm vụ của lỗ niệu đạo là sẽ dẫn nước tiểu từ bàng quang ra ngoài cơ thể.",
    },
    {
      title: "Màng trinh",
      content:
        "Đây là một lớp màng mỏng nằm ở vị trí cửa âm đạo. màng trinh có cấu tạo từ một/nhiều lỗ nhỏ để máu kinh nguyệt có thể chảy ra ngoài. Không phải tất cả phụ nữ đều có màng trinh, bên cạnh đó màng trinh của mỗi người cũng không giống nhau.",
    },
  ];

  const insideGirlObject = [
    {
      title: "Âm đạo",
      content:
        "Cấu tạo bộ phận âm đạo có hình ống dài, bắt đầu từ âm hộ đến cổ tử cung. Khi quan hệ tình dục, bộ phận âm đạo sẽ là nơi tiếp xúc trực tiếp với dương vật. Bên cạnh đó, đường dẫn của máu kinh nguyệt đi ra bên ngoài chính là qua ngã âm đạo.",
    },
    {
      title: "Tử cung",
      content:
        "Tử cung (hay dạ con) có hình dáng tương tự như quả lê lộn ngược. Tử cung nằm ở vị trí giữa bàng quang và trực tràng, giữ vai trò quan trọng đối với quá trình lưu thông máu trong kỳ kinh nguyệt, là nơi để phôi thai làm tổ và phát triển cũng như cung cấp dưỡng chất giúp nuôi dưỡng thai nhi phát triển khỏe mạnh,…",
    },
    {
      title: "Cổ tử cung",
      content:
        "Cổ tử cung hình dạng giống như miệng cá, vị trí là nằm giữa tử cung và âm đạo. Vai trò của bộ phận này là ngăn chặn vi khuẩn, nấm hoặc ký sinh trùng xâm nhập vào bên trong tử cung gây hại.",
    },
    {
      title: "Buồng trứng",
      content:
        "Đây là bộ phận nằm vị trí ngay bên dưới eo chậu, giữa hai bên tử cung. Phụ nữ sẽ có hai buồng trứng. Khi còn nhỏ, bé gái sẽ có buồng trứng nhẵn nhụi và buồng trứng có màu hồng nhạt. Tuy nhiên, khi đến tuổi trưởng thành, buồng trứng sẽ trở nên sần sùi hơn, đồng thời sẵn sàng đảm nhận nhiệm vụ sản xuất trứng cũng như tiết ra hai loại hormone nữ là Estrogen và Progesterone.",
    },
    {
      title: "Ống dẫn trứng",
      content:
        "Phần dài ra của tử cung được gọi là ống dẫn trứng (hay vòi trứng hoặc vòi tử cung). Ống dẫn trứng nằm bên trong hố chậu, giữ vai trò hỗ trợ tinh trùng di chuyển đến gặp trứng và thụ tinh. Đó là lý do vì sao bạn hay nghe nói đến phương pháp thắt ống dẫn trứng. Trong trường hợp đã sinh đủ con và không còn muốn sinh con nữa thì thắt ống dẫn trứng để ngừa thai vĩnh viễn.",
    },
    {
      title: "Màng trinh",
      content:
        "Đây là một lớp màng mỏng nằm ở vị trí cửa âm đạo. màng trinh có cấu tạo từ một/nhiều lỗ nhỏ để máu kinh nguyệt có thể chảy ra ngoài. Không phải tất cả phụ nữ đều có màng trinh, bên cạnh đó màng trinh của mỗi người cũng không giống nhau.",
    },
  ];

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
  const [overviewFemaleImg, setOverviewFemaleImg] = useState("");
  const [modal1Visible, setModal1Visible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);
  const [modal3Visible, setModal3Visible] = useState(false);
  const [modal4Visible, setModal4Visible] = useState(false);
  const [webViewVisible, setWebViewVisible] = useState(false);
  const video = useRef(null);
  const [status, setStatus] = useState({});
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

      setOverviewFemaleImg(require("../../../assets/Img/overviewFemale.png"));
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
              <ScrollView>
                <View style={styles.titleContainer}>
                  <Text style={styles.titleText}>
                    Cấu tạo cơ quan sinh dục nữ
                  </Text>
                </View>
                <View style={styles.modalContent}>
                  <View style={styles.centeredContainer}>
                    <Image
                      source={overviewFemaleImg}
                      style={styles.resizedImage}
                    />
                  </View>
                  <View style={styles.centeredContainer}>
                    <Text style={styles.titleText}>
                      1. Cơ quan sinh dục ngoài
                    </Text>
                  </View>
                  <HorizontalSlideCards cardData={outsideGirlObject} />
                  <View style={styles.centeredContainer}>
                    <Text style={styles.titleText}>
                      2. Cơ quan sinh dục trong
                    </Text>
                  </View>
                  <HorizontalSlideCards cardData={insideGirlObject} />
                </View>
                <Button title="Exit" onPress={()=>setModal1Visible(false)}/>
              </ScrollView>
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
            <ScrollView>
                <View style={styles.titleContainer}>
                  <Text style={styles.titleText}>
                    Cấu tạo cơ quan sinh dục nữ
                  </Text>
                </View>
                <View style={styles.modalContent}>
                  <View style={styles.centeredContainer}>
                    <Image
                      source={overviewFemaleImg}
                      style={styles.resizedImage}
                    />
                  </View>
                  <View style={styles.centeredContainer}>
                    <Text style={styles.titleText}>
                      1. Cơ quan sinh dục ngoài
                    </Text>
                  </View>
                  <HorizontalSlideCards cardData={outsideGirlObject} />
                  <View style={styles.centeredContainer}>
                    <Text style={styles.titleText}>
                      2. Cơ quan sinh dục trong
                    </Text>
                  </View>
                  <HorizontalSlideCards cardData={insideGirlObject} />
                </View>
                <Button title="Exit" onPress={()=>setModal2Visible(false)}/>
              </ScrollView>
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
                {webViewVisible && <></>}
                {webViewVisible && <></>}
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
                {webViewVisible && <></>}
                {webViewVisible && <></>}
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
    backgroundColor: "white",
  },
  titleContainer: {
    marginBottom: 10,
    marginLeft: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  centeredContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10, // Adjust the margin as needed
  },

  resizedImage: {
    width: 370, // Adjust the width as needed
    height: 250, // Adjust the height as needed
    backgroundColor: "white",
  },
  titleContainer: {
    marginBottom: 10,
    marginLeft: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  centeredContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10, // Adjust the margin as needed
  },

  resizedImage: {
    width: 370, // Adjust the width as needed
    height: 250, // Adjust the height as needed
  },
});

export default SubBody2;
