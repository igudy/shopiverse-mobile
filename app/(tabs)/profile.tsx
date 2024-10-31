import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import ProfileProps from "@/components/profile/ProfileProps";

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.padVertical}>
        <TouchableOpacity style={styles.searchIcon}>
          <Ionicons name="search" size={30} color="black" />
        </TouchableOpacity>

        <View style={styles.header}>
          <Text style={styles.shopText}>My Profile</Text>
        </View>

        <View style={styles.profileRow}>
          <View style={styles.imageContainer}>
            <Image
              source={require("@/assets/images/products/images7.png")}
              style={styles.profileImage}
            />
          </View>

          <View style={styles.userInfo}>
            <Text style={styles.userName}>Matilda Brown</Text>
            <Text style={styles.userEmail}>matildabrown@mail.com</Text>
          </View>
        </View>

        <SafeAreaView>
          <ProfileProps
            orderName="My Orders"
            orderDesc="Already have 12 orders"
          />
          <ProfileProps
            orderName="Shipping Addresses"
            orderDesc="3 addresses"
          />
          <ProfileProps orderName="Payment Methods" orderDesc="Visa ****34" />
          <ProfileProps
            orderName="Promocodes"
            orderDesc="You have special promocodes"
          />
          <ProfileProps orderName="My Reviews" orderDesc="Review for 4 items" />
          <ProfileProps
            orderName="Settings"
            orderDesc="Notifications, password"
          />
        </SafeAreaView>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F1F1",
  },
  elevation: {
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  padVertical: {
    paddingHorizontal: 16,
  },
  searchIcon: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 6,
  },
  header: {
    paddingVertical: 20,
  },
  shopText: {
    color: "black",
    fontSize: 32,
    fontWeight: "bold",
    fontFamily: "Metropolis-Bold",
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  userInfo: {
    flexDirection: "column",
  },
  userName: {
    fontWeight: "bold",
    fontFamily: "Metropolis-Bold",
    fontSize: 22,
  },
  userEmail: {
    fontSize: 14,
    color: "#333",
  },
  myOrders: {
    fontSize: 25,
    fontFamily: "Metropolis-Bold",
  },
});
