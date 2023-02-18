import { Image, StyleSheet, useWindowDimensions } from "react-native";
import React from "react";

const HeroImageCard = ({ src }) => {
  const { width, height } = useWindowDimensions();
  return <Image source={src} style={[styles.image, { width: width, height: height / 2, resizeMode: "contain" }]} />;
};

const styles = StyleSheet.create({
  image: {
    marginTop: 20,
    marginBottom: 40,
    justifyContent: "center",
  },
});

export default HeroImageCard;
