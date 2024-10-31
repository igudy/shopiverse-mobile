import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ProductDetails = () => {
  return (
    <View style={styles.container}>
      <Text
        className="text-black"
        //   style={styles.productText}
      >
        ProductDetails
      </Text>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F9F9F9",
        flex: 1
    }
  // productText: {
  //     color: "white"
  // }
});
