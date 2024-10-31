import { View, Image, StyleSheet, Text } from "react-native";
import React from "react";

const ThirdSection = () => {
  return (
    <>
      <View style={styles.imageContainer}>
        <Image
          source={require("@/assets/images/products/images7.png")}
          style={styles.heroImage}
        />
        <Text style={styles.topTextOverlay}>New Collection</Text>
      </View>

      <View style={styles.container}>
        {/* Left Column with two images */}
        <View style={styles.leftColumn}>
          <View style={styles.imageWrapper}>
            <Image
              source={require("@/assets/images/products/hero-image.png")}
              style={styles.image}
            />
            <Text style={styles.textOverlay}>Winter Sale</Text>
          </View>
          <View style={styles.imageWrapper}>
            <Image
              source={require("@/assets/images/products/images9.png")}
              style={styles.image}
            />
            <Text style={styles.textOverlay}>Black</Text>
          </View>
        </View>

        {/* Right Column with one image stretched */}
        <View style={styles.rightColumn}>
          <Image
            source={require("@/assets/images/products/images8.png")}
            style={styles.rightImage}
          />
          <Text style={[styles.textOverlay, styles.rightTextOverlay]}>
            Men's Hoodies
          </Text>
        </View>
      </View>
    </>
  );
};

export default ThirdSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 390,
  },
  leftColumn: {
    flex: 1,
    flexDirection: "column",
  },
  rightColumn: {
    flex: 1,
    position: "relative",
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    height: 195,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  rightImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  topTextOverlay: {
    position: "absolute",
    bottom: 20,
    right: 20,
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
  },
  textOverlay: {
    position: "absolute",
    top: "50%",
    left: 20,
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
  },
  rightTextOverlay: {
    position: "absolute",
    top: "50%",
    left: 20,
    zIndex: 1,
    fontSize: 50,
    textAlign: "right"
  },
  imageContainer: {
    height: 500,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  heroImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
