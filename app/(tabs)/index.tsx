import React from 'react';
import { Image, StyleSheet, View, Text, Dimensions, SafeAreaView, ScrollView } from 'react-native';

const { height } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    // <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.imageContainer}>
          <Image
            source={require('@/assets/images/products/hero-image.png')}
            style={styles.heroImage}
          />
        </View>

        <View style={styles.content}>
          <Text style={styles.text}>Its Igudy</Text>
        </View>
      </ScrollView>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
        backgroundColor: '#F9F9F9',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  imageContainer: {
    height: height * 0.5,
    width: '100%',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  content: {
    padding: 16,
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
});

