import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Shop = () => {
  const [selectedTab, setSelectedTab] = useState("Women");

  return (
    <SafeAreaView style={styles.container}>
      {/* Shop Header */}
      <View style={styles.shadow}>
        <Text style={styles.shopText}>Categories</Text>
      </View>

      {/* Tabs for Women, Men, and Kids */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === "Women" && styles.activeTab
          ]}
          onPress={() => setSelectedTab("Women")}
        >
          <Text style={[
            styles.tabText,
            selectedTab === "Women" && styles.activeTabText
          ]}>Women</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === "Men" && styles.activeTab
          ]}
          onPress={() => setSelectedTab("Men")}
        >
          <Text style={[
            styles.tabText,
            selectedTab === "Men" && styles.activeTabText
          ]}>Men</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === "Kids" && styles.activeTab
          ]}
          onPress={() => setSelectedTab("Kids")}
        >
          <Text style={[
            styles.tabText,
            selectedTab === "Kids" && styles.activeTabText
          ]}>Kids</Text>
        </TouchableOpacity>
      </View>

            {/* Content based on selected tab */}
      {selectedTab === "Women" && (
        <View><Text>Women</Text></View>
      )}
      {selectedTab === "Men" && (
        <View><Text>Men</Text></View>
      )}
      {selectedTab === "Kids" && (
        <View><Text>Kids</Text></View>
      )}
    </SafeAreaView>
  );
};

export default Shop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  shadow: {
    shadowColor: 'gray',
  },
  shopText: {
    color: "black",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "#E0E0E0",
  },
  activeTab: {
    backgroundColor: "black",
  },
  tabText: {
    fontSize: 18,
    color: "black",
  },
  activeTabText: {
    color: "white",
    fontWeight: "bold",
  },
});
