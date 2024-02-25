import { useState, useEffect, useRef } from "react";
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

  const safeSexActivities = [
    {
      title: "Tình dục an toàn là gì",
      content:
        "Tình dục an toàn là những hành vi tình dục bao gồm cả 2 yếu tố: không có nguy cơ nhiễm khuẩn lây qua đường tình dục và mang thai ngoài ý muốn.",
    },
    {
      title: "Tránh thai",
      content:
        "Về phương diện tránh thai, tình dục an toàn gồm sử dụng biện pháp tránh thai an toàn, hiệu quả và đúng cách.",
    },
    {
      title: "Phòng nhiễm khuẩn",
      content:
        "Về phương diện phòng nhiễm khuẩn lây truyền qua đường tình dục, tình dục an toàn có thể chia thành 3 nhóm",
    },
    {
      title: "Tình dục an toàn (không có nguy cơ hoặc nguy cơ rất ít):",
      content:
        "Mơ tưởng tình dục, tự mình thủ dâm, vuốt ve trên mặt da lành lặn, ôm bạn tình, kiềm chế không quan hệ tình dục, chung thủy với một bạn tình, sử dụng bao cao su khi quan hệ tình dục, tình dục bằng tay với âm đạo hoặc dương vật.",
    },
    {
      title: "Tình dục an toàn tương đối (nguy cơ trung bình):",
      content:
        "Quan hệ tình dục theo đường hậu môn có sử dụng bao cao su, bằng miệng với âm đạo hay với dương vật không sử dụng bao cao su.",
    },
    {
      title: "Tình dục không an toàn (nguy cơ cao):",
      content:
        "Quan hệ tình dục theo đường âm đạo hay hậu môn mà không dùng bao cao su.",
    },
  ];

  const healthySexActivities = [
    {
      title: "Tự nguyện",
      content: "Quan hệ tình dục phải dựa trên sự tự nguyện của hai bên.",
    },
    {
      title: "Đồng thuận",
      content:
        "Hai bên phải thống nhất với nhau về tất cả các chi tiết liên quan đến việc quan hệ tình dục: thời gian, thời điểm, địa điểm, cách thức, các biện pháp an toàn,...",
    },
    {
      title: "Có trách nhiệm",
      content:
        "Những người tham gia hoạt động tình dục thể hiện trách nhiệm của mình bằng việc trang bị cho mình những kiến thức đầy đủ về tình dục để giúp mình và bạn tình có thể thoải mái và đạt khoái cảm khi quan hệ, chuẩn bị phương tiện tình dục an toàn và thực hiện tình dục an toàn, cùng nhau giải quyết các hậu quả liên quan đến quan hệ tình dục nếu có.",
    },
    {
      title: "Tôn trọng lẫn nhau",
      content:
        "Quan điểm về tình dục của mỗi người thường là khác nhau kể cả giữa hai người rất yêu nhau. Mỗi người đều có quyền thực hiện các mong muốn về tình dục của mình nhưng bên cạnh đó lại luôn phải tuân thủ nguyên tắc tôn trọng các mong muốn của người khác. Sự trao đổi cởi mở sẽ giúp mọi người có thể tôn trọng nhau tốt hơn.",
    },
  ];

  const femaleCleanData = [
    {
      title: "6 lưu ý để chị em vệ sinh vùng kín đúng cách",
      content:
        "Việc vệ sinh vùng kín luôn quan trọng, nhất là với phụ nữ. Nếu khu vực này không đảm bảo vệ sinh sẽ dẫn đến nhiều bệnh lý đáng lo ngại như nấm âm đạo, viêm âm đạo, thậm chí các bệnh ung thư vùng kín. Sau đây là 6 lưu ý giúp chị em vệ sinh vùng kín đúng cách.",
    },
    {
      title: "Không thụt rửa âm đạo bằng vòi sen",
      content:
        "Có một số  chị em chưa đủ kiến thức hiểu biết nên đã dùng vòi sen, thậm chí vòi xịt để thụt vào âm đạo. Nếu mắc phải sai lầm này khi vệ sinh vùng kín sẽ khiến bộ phận nhạy cảm này dễ bị tổn thương, tạo cơ hội cho vi sinh vật có hại tấn công. \n Thậm chí có người còn dùng vòi sen thụt rửa sâu bên trong âm đạo nên càng gây hại nặng nề hơn. Bên trong vùng kín không chỉ có vi khuẩn có hại mà còn có hệ thống các lợi khuẩn giúp cân bằng độ pH và ngăn chặn vi khuẩn xâm nhập từ bên ngoài. Thụt rửa mạnh và sâu vào âm đạo sẽ khiến cả vi khuẩn có lợi và có hại bị tiêu diệt. Vì vậy sẽ làm mất cân bằng môi trường PH ở âm đạo. Ngoài ra, điều này cũng sẽ tạo điều kiện để vi khuẩn xấu thâm nhập vào cơ thể, làm tăng nguy cơ nhiễm trùng vùng kín.",
    },
    {
      title: "Vệ sinh tập trung vào các khu vực xung quanh âm đạo",
      content:
        "Chỉ cần các vùng xung quanh kề cận âm đạo được sạch sẽ cũng đủ để giúp âm đạo được khỏe mạnh và sạch sẽ. Bởi âm đạo phụ nữ có khả năng tự làm sạch khá hiệu quả. Vì vậy chị em không cần thụt rửa sâu vào bên trong mà chỉ cần thường xuyên vệ sinh khu vực bên ngoài của vùng kín. \nBạn rửa nhẹ nhàng bên ngoài vùng kín bằng xà phòng dịu nhẹ, không mùi hoặc dung dịch vệ sinh phụ nữ. Ngoài ra, bạn cần chú ý làm sạch khu vực đáy chậu ở giữa âm đạo và hậu môn để tránh vi khuẩn từ vùng này lây lan sang âm đạo.",
    },
    {
      title: "Không nên dùng các sản phẩm vệ sinh có mùi hương",
      content:
        "Chị em không nên dùng những sản phẩm có mùi hương như dầu thơm, sữa tắm... để rửa vùng kín. Bởi chúng có thể làm phá vỡ sự cân bằng tự nhiên của khu vực bên trong âm đạo. Thực tế, bạn chỉ cần làm sạch vùng kín bằng nước và các loại xà phòng không mùi là đủ. \nNgoài ra, nếu âm đạo có mùi khó chịu, bạn không nên dùng các sản phẩm có hương thơm để át mùi vì chúng có thể gây kích ứng và làm mùi nặng hơn. Thay vào đó, bạn nên đến gặp bác sĩ để được thăm khám và tư vấn cách khắc phục phù hợp.",
    },
    {
      title: "Không rửa nhiều lần trong ngày",
      content:
        "Nếu bạn không vệ sinh mỗi ngày, vùng kín sẽ bị ảnh hưởng bởi sự tích tụ của mồ hôi và chất bài tiết, dẫn đến nhiễm trùng. Tuy nhiên, nếu vệ sinh nhiều hơn một lần mỗi ngày, chị em có thể khiến sự cân bằng của khu vực âm đạo bị phá vỡ.      ",
    },
    {
      title: "Chỉ dùng tay hoặc khăn mềm khi vệ sinh vùng kín",
      content:
        "Nếu dùng khăn hay vật dụng chất liệu quá dày và thô cứng khi vệ sinh vùng kín, bạn sẽ khiến lớp da mỏng manh ở vùng kín dễ bị tổn thương, gây viêm nhiễm.",
    },
    {
      title: "Rửa bằng nước sạch thật nhẹ nhàng trong ngày đèn đỏ",
      content:
        "Những ngày “đèn đỏ” luôn là nỗi e ngại của phụ nữ, nhất là các bước vệ sinh vùng kín. Chị em chỉ nên rửa bằng nước sạch thật nhẹ nhàng trong thời gian nhạy cảm này để giữ cho vùng kín đảm bảo vệ sinh.",
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
  const safeSexImg = require("../../../assets/safe-sex.jpg");
  const femaleClean = require("../../../assets/female-clean.jpg");
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
              <Text style={styles.titleText}>Cấu tạo cơ quan sinh dục nữ</Text>
              <ScrollView>
                <View style={styles.titleContainer}></View>
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
                  <View style={styles.bottomButtonContainer}>
                    <TouchableOpacity
                      onPress={() => setModal2Visible(false)}
                      style={[
                        styles.closeButton,
                        {
                          height: 50,
                          width: 120,
                          backgroundColor: "#f89b89",
                          borderColor: "#f89b89",
                          borderRadius: 25,
                        },
                      ]}
                    >
                      <View style={styles.buttonContent}>
                        <Text style={styles.buttonText}>Close</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
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
              <Text style={styles.titleText}>Quan hệ an toàn</Text>
              <ScrollView>
                <View style={styles.titleContainer}></View>
                <View style={styles.modalContent}>
                  <View style={styles.centeredContainer}>
                    <Image source={safeSexImg} style={styles.resizedImage} />
                  </View>
                  <View style={styles.centeredContainer}>
                    <Text style={styles.titleText}>
                      1. Hành vi tình dục an toàn
                    </Text>
                  </View>
                  <HorizontalSlideCards cardData={safeSexActivities} />
                  <View style={styles.centeredContainer}>
                    <Text style={styles.titleText}>2. Tình dục lành mạnh</Text>
                  </View>
                  <HorizontalSlideCards cardData={healthySexActivities} />
                  <View style={styles.bottomButtonContainer}>
                    <TouchableOpacity
                      onPress={() => setModal3Visible(false)}
                      style={[
                        styles.closeButton,
                        {
                          height: 50,
                          width: 120,
                          backgroundColor: "#f89b89",
                          borderColor: "#f89b89",
                          borderRadius: 25,
                        },
                      ]}
                    >
                      <View style={styles.buttonContent}>
                        <Text style={styles.buttonText}>Close</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
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
              <Text style={styles.titleText}>
                Vệ sinh vùng kín cho nữ đúng cách
              </Text>
              <ScrollView>
                <View style={styles.titleContainer}></View>
                <View style={styles.modalContent}>
                  <View style={styles.centeredContainer}>
                    <Image source={safeSexImg} style={styles.resizedImage} />
                  </View>

                  <HorizontalSlideCards cardData={femaleCleanData} />

                  <View style={styles.bottomButtonContainer}>
                    <TouchableOpacity
                      onPress={() => setModal4Visible(false)}
                      style={[
                        styles.closeButton,
                        {
                          height: 50,
                          width: 120,
                          backgroundColor: "#f89b89",
                          borderColor: "#f89b89",
                          borderRadius: 25,
                        },
                      ]}
                    >
                      <View style={styles.buttonContent}>
                        <Text style={styles.buttonText}>Close</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            </SafeAreaView>
          </Modal>
        </Pressable>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={[
          styles.closeButton,
          {
            height: 50,
            width: 160,
            backgroundColor: "#f89b89",
            borderColor: "#f89b89",
            borderRadius: 25,
            marginHorizontal: 130,
          },
        ]}
      >
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>Hoàn thành khóa học</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "white",
    display: "flex",
  },
  buttonContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#ffffff",
  },

  bottomButtonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20, // Adjust this value based on your design preferences
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
  },
});

export default SubBody2;
