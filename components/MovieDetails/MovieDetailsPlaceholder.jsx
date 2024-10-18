import React from "react";
import {View, StyleSheet, ScrollView, Dimensions} from "react-native";
import Animated, {FadeIn} from "react-native-reanimated";
import Colors from "../../constants/Colors";

const AnimatedView = Animated.createAnimatedComponent(View);
const {width} = Dimensions.get("window");

export default function MovieDetailsPlaceholder() {
  return (
    <ScrollView style={styles.container}>
      <AnimatedView entering={FadeIn} style={styles.posterContainer}>
        <View style={styles.poster} />
        <View style={styles.voteCircle} />
      </AnimatedView>

      <AnimatedView entering={FadeIn.delay(200)} style={styles.infoContainer}>
        <View style={styles.title} />
        <View style={styles.year} />

        <View style={styles.genresContainer}>
          {[1, 2, 3].map((_, index) => (
            <View key={index} style={styles.genreTag} />
          ))}
        </View>

        <View style={styles.sectionTitle} />
        <View style={styles.overview} />
        <View style={styles.overview} />
        <View style={styles.overview} />
      </AnimatedView>

      <AnimatedView entering={FadeIn.delay(400)} style={styles.buttonContainer}>
        <View style={styles.button} />
        <View style={styles.button} />
      </AnimatedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondaryColor
  },
  posterContainer: {
    width: "100%",
    height: width * 1.5,
    position: "relative",
    backgroundColor: Colors.lightBackgroundColor
  },
  poster: {
    width: "100%",
    height: "100%",
    backgroundColor: Colors.secondaryColorLight
  },
  voteCircle: {
    position: "absolute",
    bottom: 16,
    right: 16,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.secondaryColorLight
  },
  infoContainer: {
    padding: 16
  },
  title: {
    height: 28,
    width: "80%",
    backgroundColor: Colors.secondaryColorLight,
    marginBottom: 8
  },
  year: {
    height: 20,
    width: "40%",
    backgroundColor: Colors.secondaryColorLight,
    marginBottom: 16
  },
  genresContainer: {
    flexDirection: "row",
    marginBottom: 16
  },
  genreTag: {
    width: 80,
    height: 32,
    backgroundColor: Colors.secondaryColorLight,
    borderRadius: 16,
    marginRight: 8
  },
  sectionTitle: {
    height: 24,
    width: "60%",
    backgroundColor: Colors.secondaryColorLight,
    marginBottom: 12
  },
  overview: {
    height: 16,
    width: "100%",
    backgroundColor: Colors.secondaryColorLight,
    marginBottom: 8
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 16,
    backgroundColor: Colors.lightBackgroundColor
  },
  button: {
    width: 120,
    height: 40,
    backgroundColor: Colors.secondaryColorLight,
    borderRadius: 8
  }
});
