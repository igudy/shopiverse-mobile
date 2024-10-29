import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import WomenProps from './WomenProps'

const Men = () => {
  return (
    <View>
      {/* Top Bar */}
      <View style={styles.summerSales}>
        <Text style={styles.summerText}>
          SUMMER SALES
        </Text>
        <Text style={styles.uptoText}>Up to 50% off</Text>
      </View>

      {/* Middle Section */}
      <WomenProps text={"New"} source={require("@/assets/images/products/image11.png")} />
      <WomenProps text={"Clothes"} source={require("@/assets/images/products/image12.png")} />
      <WomenProps text={"Shoes"} source={require("@/assets/images/products/image13.png")} />
      <WomenProps text={"Accessories"} source={require("@/assets/images/products/image14.png")} />
    
    </View>
  )
}

export default Men

const styles = StyleSheet.create({
  summerSales: {
    width: "100%",
    backgroundColor: "red",
    height: 130,
    borderRadius: 30,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center"
  },
  summerText: {
    fontFamily: "Metropolis-Bold",
    fontSize: 40,
    color: "white"
  },
  uptoText: {
    fontSize: 20,
    fontFamily: "Metropolis-Medium",
    color: "white"
  },
  middleSection: {
    marginTop: 10,
    borderRadius: 10,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    height: 150,
    backgroundColor: "white"
  },
  viewText: {
    width: "50%",
  
  },
  viewImage: {
    width: "50%",
  },
  heroImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10
  },
  newText: {
    marginLeft: 20,
    fontSize: 30,
    fontFamily: "Metropolis-Bold"
  }

})