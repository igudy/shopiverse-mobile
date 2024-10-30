import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import StarRating from "react-native-star-rating-widget";

const filters = [
  { id: "1", name: "Summer" },
  { id: "2", name: "T-shirts" },
  { id: "3", name: "Winter" },
  { id: "4", name: "Jeans" },
  { id: "5", name: "Sweaters" },
  { id: "6", name: "Cap" },
  { id: "7", name: "Phohe" },
];

const myFav = [
  {
    name: "Pullover",
    color: "Black",
    description: "Looking good.",
    size: "M",
    amount: "$30",
    image: require("@/assets/images/products/image11.png"),
  },
  {
    name: "Jacket",
    color: "Blue",
    description: "Looking good.",
    size: "L",
    amount: "$45",
    image: require("@/assets/images/products/image12.png"),
  },
  {
    name: "T-Shirt",
    color: "White",
    description: "Nicely done.",
    size: "S",
    amount: "$20",
    image: require("@/assets/images/products/image13.png"),
  },
  {
    name: "Sweater",
    color: "Gray",
    description: "Nicely done.",
    size: "M",
    amount: "$35",
    image: require("@/assets/images/products/image14.png"),
  },
  {
    name: "Hoodie",
    color: "Green",
    description: "Nicely done.",
    size: "L",
    amount: "$40",
    image: require("@/assets/images/products/image3.png"),
  },
  {
    name: "Cardigan",
    color: "Red",
    description: "Nicely done.",
    size: "M",
    amount: "$38",
    image: require("@/assets/images/products/images7.png"),
  },
  {
    name: "Blazer",
    color: "Navy",
    description: "Nicely done.",
    size: "XL",
    amount: "$50",
    image: require("@/assets/images/products/images8.png"),
  },
  {
    name: "Vest",
    color: "Black",
    description: "Nicely done.",
    size: "L",
    amount: "$28",
    image: require("@/assets/images/products/images9.png"),
  },
  {
    name: "Coat",
    color: "Brown",
    description: "Nicely done.",
    size: "M",
    amount: "$60",
    image: require("@/assets/images/products/image1.png"),
  },
  {
    name: "Shirt",
    color: "Purple",
    description: "Nicely done.",
    size: "S",
    amount: "$25",
    image: require("@/assets/images/products/image2.png"),
  },
];

const FavItem = ({
  item,
  quantity,
  increaseQuantity,
  decreaseQuantity,
}: any) => {
  const starRating = () => {
    console.log("Star Rating");
  };

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
            <Text className="mt-2 text-gray-400 uppercase">
              {item.description}
            </Text>

            <Text className="text-2xl font-bold">{item.name}</Text>

            <View className="flex-row gap-2">
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
            <Text className="font-bold text-3xl">{item.amount}</Text>
          </View>

          <View className="flex-row items-center">
            <StarRating
              onChange={starRating}
              rating={5}
              style={styles.starRating}
              starSize={20}
              color="#FFD700"
            />
            <Text className="text-gray-500">(5)</Text>
          </View>

         
          <View style={styles.cartItem}>
            <Image
            source={require("@/assets/images/products/cart.png")}
            style={{
              borderRadius: 10,
              width: 35,
              height: 35,
              resizeMode: "cover",
            }}
          />
          </View>

        </View>
      </View>
    </View>
  );
};

const Favourite = () => {
  const [quantity, setQuantity] = useState(1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const increaseQuantity = () => setQuantity((prev) => prev + 1);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.header}>
          <Text style={styles.shopText}>Favourites</Text>
        </View>

        {/* Horizontal Scroll for Filters */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScrollContent}
        >
          {filters.map((filter) => (
            <TouchableOpacity key={filter.id} style={styles.filterButton}>
              <Text style={styles.filterText}>{filter.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.filterContainer}>
        <View className="flex-row justify-between px-8">
          <View className="flex-row gap-2 items-center">
            <TouchableOpacity className="flex-row items-center gap-2">
              <Ionicons name="filter" size={20} color="black" />
              <Text>Filter</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <View className="flex-row gap-2 items-center">
              <FontAwesome5
                name="sort-amount-down-alt"
                size={15}
                color="black"
              />
              <Text>
                Price: <Text className="text-gray-600">lowest to high</Text>
              </Text>
            </View>
          </TouchableOpacity>

          <View>
            <TouchableOpacity>
              <Ionicons name="grid" size={15} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView>
        <View className="mx-4">
          {myFav.map((item, index) => (
            <FavItem
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

export default Favourite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F1F1",
  },
  header: {
    paddingVertical: 20,
    paddingLeft: 16,
  },
  shopText: {
    color: "black",
    fontSize: 32,
    fontWeight: "bold",
  },
  horizontalScrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#FFF",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 10,
  },
  filterButton: {
    backgroundColor: "#E0E0E0",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginRight: 10,
  },
  starRating: {
    paddingVertical: 1,
    paddingHorizontal: 0,
  },
  filterText: {
    color: "#333",
    fontWeight: "bold",
  },
  filterContainer: {
    backgroundColor: "#FFF",
    paddingVertical: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 10,
  },
  textGray: {
    color: "#A9A9A9",
  },
  fontBold: {
    fontFamily: "Metropolis-Bold",
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
  cartItem: {
    elevation: 10,
    position: "absolute",
    right: -20,
    top: "90%"

  }
});
