import React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";

import FirstSection from "@/components/main-page/FirstSection";
import SecondSection from "@/components/main-page/SecondSection";
import ThirdSection from "@/components/main-page/ThirdSection";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.scrollView}>
      {/* Top Section */}
      <FirstSection />

      {/* Second Section  */}
      <SecondSection />

      {/* Third Section */}
      <ThirdSection />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#F9F9F9",
  },
});
