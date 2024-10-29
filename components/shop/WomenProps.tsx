 import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const WomenProps = ({ source, text }: any) => {
  return (
  <View style={styles.middleSection}>
        <View style={styles.viewText}>
          <Text style={styles.newText}>{text}</Text>
        </View>
        <View style={styles.viewImage}>
          <Image
          source={source}
          style={styles.heroImage}
        />
        </View>
      </View>
  )
}

export default WomenProps

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