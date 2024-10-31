import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const myBag = [
  {
    name: "Pullover",
    color: "Black",
    size: "M",
    amount: "$30",
    image: require("@/assets/images/products/image11.png"),
  },
  {
    name: "Jacket",
    color: "Blue",
    size: "L",
    amount: "$45",
    image: require("@/assets/images/products/image12.png"),
  },
  {
    name: "T-Shirt",
    color: "White",
    size: "S",
    amount: "$20",
    image: require("@/assets/images/products/image13.png"),
  },
  {
    name: "Sweater",
    color: "Gray",
    size: "M",
    amount: "$35",
    image: require("@/assets/images/products/image14.png"),
  },
  {
    name: "Hoodie",
    color: "Green",
    size: "L",
    amount: "$40",
    image: require("@/assets/images/products/image3.png"),
  },
  {
    name: "Cardigan",
    color: "Red",
    size: "M",
    amount: "$38",
    image: require("@/assets/images/products/images7.png"),
  },
  {
    name: "Blazer",
    color: "Navy",
    size: "XL",
    amount: "$50",
    image: require("@/assets/images/products/images8.png"),
  },
  {
    name: "Vest",
    color: "Black",
    size: "L",
    amount: "$28",
    image: require("@/assets/images/products/images9.png"),
  },
  {
    name: "Coat",
    color: "Brown",
    size: "M",
    amount: "$60",
    image: require("@/assets/images/products/image1.png"),
  },
  {
    name: "Shirt",
    color: "Purple",
    size: "S",
    amount: "$25",
    image: require("@/assets/images/products/image2.png"),
  },
];

const BagItem = ({
  item,
  quantity,
  increaseQuantity,
  decreaseQuantity,
}: any) => {
  return (
    <View className="flex-row my-4 h-[110px] bg-white rounded-lg">
      <View className="w-[30%]">
        <Image
          source={item.image}
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
            <Text className="text-3xl mt-1" style={styles.fontBold}>
              {item.name}
            </Text>

            <View className="flex-row mt-2 gap-2">
              <Text className="text-gray-400">
                Color:{" "}
                <Text className="font-bold text-black">{item.color}</Text>
              </Text>
              <Text className="text-gray-400">
                Size: <Text className="font-bold text-black">{item.size}</Text>
              </Text>
            </View>
          </View>

          <TouchableOpacity>
            <Ionicons name="menu" size={30} color="gray" />
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-between items-center mt-4">
          <View className="flex-row justify-between items-center">
            <TouchableOpacity
              onPress={decreaseQuantity}
              style={styles.controlButton}
            >
              <Text style={styles.controlText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.quantityText}>{quantity}</Text>

            <TouchableOpacity
              onPress={increaseQuantity}
              style={styles.controlButton}
            >
              <Text style={styles.controlText}>+</Text>
            </TouchableOpacity>
          </View>

          <Text className="font-bold text-3xl">{item.amount}</Text>
        </View>
      </View>
    </View>
  );
};

const Bag = () => {
  const [quantity, setQuantity] = useState(1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const increaseQuantity = () => setQuantity((prev) => prev + 1);

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.shopText} className="mx-4 mt-6">
            My Bag
          </Text>
        </View>

      <ScrollView>
        <View className="mx-4">
          {myBag.map((item, index) => (
            <BagItem
              key={index}
              item={item}
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
        fontFamily: "Metropolis-Bold"
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
