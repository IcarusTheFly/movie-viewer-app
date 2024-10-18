import React from "react";
import {StyleSheet, View} from "react-native";
import Colors from "../../constants/Colors";

export default function MovieCardPlaceholder() {
  return (
    <View style={styles.movieCard}>
      <View style={styles.poster} />
      <View style={styles.movieInfo}>
        <View style={styles.title} />
        <View style={styles.year} />
        <View style={styles.voteCircle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  movieCard: {
    backgroundColor: Colors.secondaryColor,
    margin: 8,
    padding: 16,
    flexDirection: "row",
    alignItems: "center"
  },
  movieInfo: {
    marginLeft: 16,
    flex: 1,
    gap: 8
  },
  poster: {
    width: 60,
    height: 90,
    borderRadius: 4,
    backgroundColor: Colors.secondaryColorLight
  },
  title: {
    height: 20,
    width: "70%",
    backgroundColor: Colors.secondaryColorLight,
    borderRadius: 4
  },
  year: {
    height: 16,
    width: "30%",
    backgroundColor: Colors.secondaryColorLight,
    borderRadius: 4
  },
  voteCircle: {
    width: 28,
    height: 28,
    borderRadius: 24,
    backgroundColor: Colors.secondaryColorLight,
    marginLeft: 0
  }
});
