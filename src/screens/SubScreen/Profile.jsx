import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.goBackText}>Go Back</Text>
      </TouchableOpacity>

      <View style={styles.profileContainer}>
        <Text style={styles.profileText}>Profile</Text>

        {/* User Details */}
        <View style={styles.detailContainer}>
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
        </View>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={() => {}}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8BC9A",
    padding: 20,
  },
  goBackText: {
    color: "#000", // or any color you prefer
    fontSize: 16,
    marginBottom: 20,
  },
  profileContainer: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
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
  logoutButton: {
    backgroundColor: "#F99B9B",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  logoutButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Profile;
