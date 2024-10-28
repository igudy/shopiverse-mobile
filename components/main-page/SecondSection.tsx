import { View, Text, Image,ScrollView, StyleSheet } from "react-native";
import React from "react";
import StarRating from "react-native-star-rating-widget";

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

const SecondSection = () => {

  
const starRating = () => {
  console.log("Star Rating");
};

  
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          source={require("@/assets/images/products/images6.png")}
          style={styles.heroImage}
        />
          <Text style={styles.streetClothes}>Street Clothes</Text>
      </View>

            {/* Horizontally scrollable image list */}
      <View style={styles.newViewAll}>
        <Text style={styles.new}>New</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>

      <View>
        <Text style={styles.youHave}>You've never seen it before!</Text>
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
        <Text style={styles.new}>Sale</Text>
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

export default SecondSection;

const styles = StyleSheet.create({
  imageContainer: {
    height: 250,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  heroImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  streetClothes: {
    position: "absolute",
    top: "70%",
    color: "white",
    fontSize: 50,
    fontFamily: "Metropolis-ExtraBold",
    left: 20
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
