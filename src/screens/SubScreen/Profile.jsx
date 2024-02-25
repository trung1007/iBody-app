import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  Modal,
  Alert,
} from "react-native";

const Profile = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let timer;
    if (isRecording) {
      // Change back to "SOS" after 7 seconds
      timer = setTimeout(() => {
        setIsRecording(false);
        setShowModal(true);

        // After 1 second, hide the modal and reset the state
        setTimeout(() => {
          setShowModal(false);
          Alert.alert(" 'help help help me' \nBạn đang gặp nguy hiểm");
          // Reset to "SOS" after analyzing audio
          setIsRecording(false);
        }, 1000);
      }, 7000);
    }

    return () => clearTimeout(timer);
  }, [isRecording]);

  const handleSOSButtonPress = () => {
    if (!isRecording) {
      setIsRecording(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        {/* ... Existing profile content ... */}
        {/* <Text style={styles.profileText}>Profile</Text> */}
        <ImageBackground
          style={{
            resizeMode: "contain",
            height: 100,
            width: "100%",
          }}
          source={require("../../../assets/userBg.jpg")}
        />
        <Image
          style={styles.avatar}
          source={require("../../../assets/IMG_0655.jpg")}
        />
        <Text style={{ fontWeight: "700", fontSize: 16 }}>Cao Trung</Text>
        <Text>trungthanhcao.2003@gmail.com </Text>
        {/* User Details */}
        {/* <View style={styles.detailContainer}>
          <Text style={styles.detailLabel}>Fullname:</Text>
          <Text style={styles.detailValue}>John Doe</Text>
        </View>

        <View style={styles.detailContainer}>
          <Text style={styles.detailLabel}>Email:</Text>
          <Text style={styles.detailValue}>john.doe@example.com</Text>
        </View>

        <View style={styles.detailContainer}>
          <Text style={styles.detailLabel}>Username:</Text>
          <Text style={styles.detailValue}>johndoe123</Text>
        </View> */}
      </View>

      {/* SOS Button */}
      <TouchableOpacity
        style={styles.sosButton}
        onPress={handleSOSButtonPress}
        disabled={isRecording}
      >
        <Text style={styles.sosButtonText}>
          {isRecording ? "Recording" : "SOS"}
        </Text>
      </TouchableOpacity>

      {/* Analyzing Audio Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Nhận dạng âm thanh...</Text>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8BC9A",
    padding: 20,
  },
  profileContainer: {
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    display: "flex",
    alignItems: "center",
    gap: 5,
  },
  // ... Existing styles ...
  sosButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    width: "100%",
  },
  goBackText: {
    color: "#000", // or any color you prefer
    fontSize: 16,
    marginBottom: 20,
  },
  sosButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  profileText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  detailContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  detailLabel: {
    fontWeight: "bold",
    marginRight: 5,
  },
  detailValue: {
    flex: 1,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    // position:'absolute',
    // top: '50%',
    // left: '50%',
    // marginLeft: -30,
    // marginTop: 20,
    zIndex: 2,
    marginTop: -35,
  },
  logoutButton: {
    backgroundColor: "#F99B9B",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    // marginLeft:10,
    // marginRight:10,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  logoutButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Profile;
