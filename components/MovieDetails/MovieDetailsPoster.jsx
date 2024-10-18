import {Text, View, StyleSheet, Image, Dimensions} from "react-native";
import Animated, {FadeIn} from "react-native-reanimated";
import Colors from "../../constants/Colors";
import {getVoteColor} from "../../lib/utils";

const AnimatedView = Animated.createAnimatedComponent(View);
const {width} = Dimensions.get("window");

export default function MovieDetailsPoster({poster, vote}) {
  return (
    <AnimatedView entering={FadeIn} style={styles.posterContainer}>
      <Image source={{uri: poster}} resizeMode="cover" style={styles.poster} />
      <View style={[styles.voteCircle, {backgroundColor: getVoteColor(vote)}]}>
        <Text style={styles.voteText}>{vote.toFixed(1)}</Text>
      </View>
    </AnimatedView>
  );
}

const styles = StyleSheet.create({
  posterContainer: {
    width: "100%",
    height: width * 1.5,
    position: "relative"
  },
  poster: {
    width: "100%",
    height: "100%"
  },
  voteCircle: {
    position: "absolute",
    bottom: 16,
    right: 16,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  voteText: {
    color: Colors.voteTextColor,
    fontSize: 18,
    fontWeight: "bold"
  }
});
