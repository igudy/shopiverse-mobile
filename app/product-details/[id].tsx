import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import DropDownPicker from "react-native-dropdown-picker";
import { Ionicons } from "@expo/vector-icons";

const ProductDetails = () => {
  const params = useLocalSearchParams();

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);

  const options1 = [
    { label: "Option 1A", value: "option1A" },
    { label: "Option 1B", value: "option1B" },
    { label: "Option 1C", value: "option1C" },
  ];

  const options2 = [
    { label: "Option 2A", value: "option2A" },
    { label: "Option 2B", value: "option2B" },
    { label: "Option 2C", value: "option2C" },
  ];

  console.log("Paramss==>", params.source);

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/products/hero-image.png")}
        style={{
          width: "100%",
          height: "70%",
          resizeMode: "cover",
        }}
      />
      <View className="mx-1 mt-5">
        <View style={styles.dropdownContainer}>
          <View style={styles.widthDropdown}>
            <DropDownPicker
              open={open1}
              value={selectedOption1}
              items={options1}
              setOpen={setOpen1}
              setValue={setSelectedOption1}
              placeholder="Select Option 1"
            />
          </View>

          <View style={styles.widthDropdown}>
            <DropDownPicker
              open={open2}
              value={selectedOption2}
              items={options2}
              setOpen={setOpen2}
              setValue={setSelectedOption2}
              placeholder="Select Option 2"
            />
          </View>

          <TouchableOpacity>
            <Ionicons name="heart-outline" size={50} style={styles.heartIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9F9F9",
    flex: 1,
  },
  dropdownContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    justifyContent: "space-evenly",
  },
  dropdown: {
    fontFamily: "Metropolis-Bold",
  },
  widthDropdown: {
    width: "40%",
  },
  heartIcon: {
    color: "gray",
    width: 50,
    height: 50,
    backgroundColor: "white",
    borderRadius: 30,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});
