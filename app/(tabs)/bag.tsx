import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const Bag = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.shopText}>My Bag</Text>
      </View>

      <View>
        <View style={styles.middleSection}>
          <View style={styles.row}>



            <View style={styles.viewImage}>
              <Image
                source={require("@/assets/images/products/image11.png")}
                style={styles.heroImage}
              />
            </View>


            <View style={styles.viewText}>
              <View style={styles.spacingBetween}>
                <View>
                  <Text style={styles.newText}>Pull Over</Text>
                  <View style={styles.colorAndSize}>
                    <Text style={styles.colorBlack}>Color:</Text>
                    <Text style={styles.black}>Black</Text>
                    <Text style={styles.colorBlack}>Size:</Text>
                    <Text style={styles.black}>L</Text>
                  </View>

                  {/* Quantity Controls directly below color and size */}
                  <View style={styles.quantityControls}>
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
                </View>

                <TouchableOpacity>
                  <Ionicons name="menu" size={20} color="gray" />
                </TouchableOpacity>
              </View>
            </View>


          </View>
        </View>
      </View>
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
    justifyContent: "center"
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
  newText: {
    fontSize: 26,
    fontFamily: "Metropolis-Bold",
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
});
