import React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
  Pressable,
} from "react-native";
import StarRating from "react-native-star-rating-widget";
import _ from "lodash";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const images = [
  {
    id: 1,
    source: require("@/assets/images/products/image1.png"),
    name: "Richard Milie",
    description: "This is a great product that you will love!",
    rating: 4.5,
    price: {
      original: 29.99,
      discount: 19.99,
    },
  },
  {
    id: 2,
    source: require("@/assets/images/products/image2.png"),
    name: "Jake Patoshi",
    description: "An amazing item for your collection.",
    rating: 5.0,
    price: {
      original: 49.99,
      discount: 39.99,
    },
  },
  {
    id: 3,
    source: require("@/assets/images/products/image3.png"),
    name: "Blackman Drake",
    description: "Limited edition product, get it while it lasts!",
    rating: 4.0,
    price: {
      original: 99.99,
      discount: 79.99,
    },
  },
  {
    id: 4,
    source: require("@/assets/images/products/image4.png"),
    name: "Wildo Karim",
    description: "Top quality item at an affordable price.",
    rating: 3.5,
    price: {
      original: 19.99,
      discount: 15.99,
    },
  },
];

const starRating = () => {
  console.log("Star Rating");
};

const { height } = Dimensions.get("window");

const FirstSection = () => {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          source={require("@/assets/images/products/hero-image.png")}
          style={styles.heroImage}
        />
      </View>

      
      {/* Sign in and sign up */}
      <View className="flex-row gap-3" style={styles.authHeader}>
        <View>
          <Text style={styles.signIn}>Login</Text>
        </View>
        <View>
          <Text style={styles.signUp}>Register</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.fashionText}>Fashion</Text>
        <Text style={styles.salesText}>Sales</Text>

        <View style={styles.checkBg}>
          <Text style={styles.check}>Check</Text>
        </View>
      </View>

      <View style={styles.newViewAll}>
        <Text style={styles.new}>New</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>

      <View>
        <Text style={styles.youHave}>You've never seen it before!</Text>
      </View>

      {/* Horizontally scrollable image list */}
      <View style={styles.scrollableSide}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
        >
          {images.map((image) => (
            <View key={image.id} style={styles.imageCard}>
              {/* <Link href={`./product-details/${image.id}`}> */}
              {/* <Link href={{ pathname: '/product-details/[id]', 
              params: { id: image.id.toString() } }}> */}
              <Link
                href={{
                  pathname: "./product-details/[id]",
                  params: {
                    id: image.id.toString(),
                    name: image.name,
                    description: image.description,
                    rating: image.rating,
                    discountPrice: image.price.discount,
                    originalPrice: image.price.original,
                    source: image.source,
                  },
                }}
              >
                <View>
                  <Image source={image.source} style={styles.image} />
                  <View style={styles.starSpace}>
                    <StarRating
                      onChange={starRating}
                      rating={image.rating}
                      style={styles.starRating}
                      starSize={20}
                      color="#FFD700"
                    />
                    <Text>(5)</Text>
                  </View>
                  <Text style={styles.imageName}>{image.name}</Text>
                  <Text style={styles.price}>
                    <Text style={styles.discountedPrice}>
                      ${image.price.discount}
                    </Text>
                    <Text style={styles.originalPrice}>
                      {" "}
                      ${image.price.original}
                    </Text>
                  </Text>
                </View>
              </Link>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Horizontally scrollable image list */}
      <View style={styles.newViewAll}>
        <Text style={styles.new}>Featured</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>
      <View style={styles.scrollableSide}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
        >
          {images.map((image) => (
            <View key={image.id} style={styles.imageCard}>
              <Image source={image.source} style={styles.image} />
              <View style={styles.starSpace}>
                <StarRating
                  onChange={starRating}
                  rating={image.rating}
                  style={styles.starRating}
                  starSize={20}
                  color="#FFD700"
                />
                <Text>(5)</Text>
              </View>

              <Text style={styles.imageName}>{image.name}</Text>
              {/* <Text style={styles.description}>
                {_.truncate(image.description, { length: 50 })}
              </Text> */}
              <Text style={styles.price}>
                <Text style={styles.discountedPrice}>
                  ${image.price.discount}
                </Text>
                <Text style={styles.originalPrice}>
                  {" "}
                  ${image.price.original}
                </Text>
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Top Rated */}
      <View style={styles.newViewAll}>
        <Text style={styles.new}>Top Rated</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>
      <View style={styles.scrollableSide}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
        >
          {images.map((image) => (
            <View key={image.id} style={styles.imageCard}>
              <Image source={image.source} style={styles.image} />
              <View style={styles.starSpace}>
                <StarRating
                  onChange={starRating}
                  rating={image.rating}
                  style={styles.starRating}
                  starSize={20}
                  color="#FFD700"
                />
                <Text>(5)</Text>
              </View>

              <Text style={styles.imageName}>{image.name}</Text>
              {/* <Text style={styles.description}>
                {_.truncate(image.description, { length: 50 })}
              </Text> */}
              <Text style={styles.price}>
                <Text style={styles.discountedPrice}>
                  ${image.price.discount}
                </Text>
                <Text style={styles.originalPrice}>
                  {" "}
                  ${image.price.original}
                </Text>
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default FirstSection;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#F9F9F9",
  },
  signIn: {
    color: "white",
    width: 100,
    textAlign: "center",
    fontFamily: "Metropolis-Bold",
    borderRadius: 20,
    padding: 10,
    backgroundColor: "black"
  },
  signUp: {
    color: "white",
    textAlign: "center",
    width: 100,
    fontFamily: "Metropolis-Bold",
    borderRadius: 20,
    padding: 10,
    backgroundColor: "black"

  },
  imageContainer: {
    height: height * 0.5,
    width: "100%",
  },
  heroImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  content: {
    padding: 16,
    position: "absolute",
    bottom: "75%",
  },
  authHeader: {
    gap: 10,
    padding: 16,
    position: "absolute",
    top: 30,
    // left: 0,
    // bottom: 0,
    right: 10,
    backgroundColor: "white",
    borderRadius: 30
  },
  fashionText: {
    color: "white",
    fontSize: 70,
    fontFamily: "Metropolis-Bold",
  },
  salesText: {
    color: "white",
    fontSize: 70,
    fontFamily: "Metropolis-Bold",
  },
  checkBg: {
    backgroundColor: "red",
    width: 100,
    height: 30,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  check: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Metropolis-Medium",
  },
  newViewAll: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  new: {
    color: "black",
    fontSize: 50,
    fontFamily: "Metropolis-ExtraBold",
  },
  viewAll: {
    color: "gray",
  },
  youHave: {
    paddingHorizontal: 20,
    color: "gray",
  },
  horizontalScroll: {
    paddingVertical: 20,
  },
  imageCard: {
    borderWidth: 1,
    padding: 6,
    borderRadius: 10,
    shadowColor: "black",
    // alignItems: 'center',
    // marginHorizontal: 10,
    marginRight: 10,
    // paddingBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  imageName: {
    marginTop: 2,
    color: "black",
    fontFamily: "Metropolis-Bold",
    fontSize: 20,

    textAlign: "left",
  },
  starRating: {
    paddingVertical: 1,
    paddingHorizontal: 0,
  },
  description: {
    color: "gray",
    marginTop: 5,
  },
  price: {
    marginTop: 5,
  },
  discountedPrice: {
    color: "red",
    fontWeight: "bold",
  },
  originalPrice: {
    textDecorationLine: "line-through",
    color: "gray",
    marginLeft: 5,
  },
  scrollableSide: {
    paddingTop: 2,
    paddingLeft: 20,
  },
  starSpace: {
    flexDirection: "row",
    alignItems: "center",
  },
});
