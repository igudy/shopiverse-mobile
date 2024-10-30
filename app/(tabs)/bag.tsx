import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { ScrollView } from "react-native-gesture-handler";

const BagItem = ({
  key,
  quantity,
  increaseQuantity,
  decreaseQuantity,
}: any) => {
  return (
    <>
      <View
        className="flex-row my-4 h-[110px] bg-white rounded-lg"
        key={key}
      >
        <View className="w-[30%]">
          <Image
            source={require("@/assets/images/products/image11.png")}
            style={{
              borderRadius: 10,
              width: "100%",
              height: "100%",
              resizeMode: "cover",
            }}
          />
        </View>

        <View className="w-[70%] px-4">
          <View className="flex-row justify-between items-center">
            <View>
              <View>
                <Text className="text-3xl mt-1" style={styles.fontBold}>
                  Pullover
                </Text>
              </View>

              <View className="flex-row mt-2 gap-2">
                <Text className="text-gray-400">
                  Color: <Text className="font-bold text-black">Black</Text>
                </Text>
                <Text className="text-gray-400">
                  Size: <Text className="font-bold text-black">L</Text>
                </Text>
              </View>
            </View>

            <View>
              <TouchableOpacity>
                <Ionicons name="menu" size={30} color="gray" />
              </TouchableOpacity>
            </View>
          </View>

          <View className="flex-row justify-between w-[60%] items-center mt-4">
            <View>
              <TouchableOpacity
                onPress={decreaseQuantity}
                style={styles.controlButton}
              >
                <Text style={styles.controlText}>-</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.quantityText}>{quantity}</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={increaseQuantity}
                style={styles.controlButton}
              >
                <Text style={styles.controlText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
const Bag = () => {
  const [quantity, setQuantity] = useState(1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const increaseQuantity = () => setQuantity((prev) => prev + 1);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.shopText} className="mx-4 mt-6">My Bag</Text>
        </View>

        <View className="mx-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <BagItem
              key={index}
              quantity={quantity}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Bag;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F1F1",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  header: {
    marginBottom: 20,
  },
  shopText: {
    color: "black",
    fontSize: 32,
    fontWeight: "bold",
  },
  middleSection: {
    marginTop: 10,
    borderRadius: 10,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    height: 150,
    backgroundColor: "white",
  },
  viewText: {
    width: "70%",
    paddingHorizontal: 8,
    flexDirection: "column",
    justifyContent: "center",
  },
  viewImage: {
    width: "30%",
  },
  heroImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  colorAndSize: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  spacingBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  colorBlack: {
    color: "gray",
    fontSize: 15,
  },
  black: {
    color: "black",
    fontSize: 15,
    fontFamily: "Metropolis-Bold",
    paddingRight: 15,
  },
  row: {
    flexDirection: "row",
  },
  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  controlButton: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  controlText: {
    fontSize: 18,
    color: "gray",
  },
  quantityText: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 5,
  },
  fontBold: {
    fontFamily: "Metropolis-Bold",
  },
});
