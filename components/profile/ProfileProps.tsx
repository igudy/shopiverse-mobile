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

const ProfileProps = ({orderName, orderDesc}: any) => {
  return (
    <View>
      <View className="mt-5" style={styles.elevation}>
        <View className="flex-row justify-between items-center" style={styles.row}>
          <View>
            <View>
              <Text style={styles.myOrders}>{orderName}</Text>
            </View>
            <View className="mt-2 text-gray-400">
              <Text>{orderDesc}</Text>
            </View>
          </View>

          <View>
            <AntDesign name="right" size={15} color="text-gray" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileProps;

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
  row: {
    backgroundColor: "white",
    padding: 13,
    marginVertical: 10,
    borderRadius: 10
  }
});
