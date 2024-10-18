import {StyleSheet, Text, View, Image, Pressable} from "react-native";
import Animated, {FadeInDown, FadeOutUp} from "react-native-reanimated";
import {Link} from "expo-router";
import Colors from "../../constants/Colors";
import {getVoteColor} from "../../lib/utils";
import {MovieDetailsRoute} from "../../constants/Routes";

const AnimatedView = Animated.createAnimatedComponent(View);

export default function MovieCard({movie, index}) {
  return (
    <Link href={MovieDetailsRoute.replace(":id", movie.id)} asChild>
      <Pressable>
        {({pressed}) => (
          <AnimatedView
            entering={FadeInDown.delay(index * 100).springify()}
            exiting={FadeOutUp}
            style={[
              styles.movieCard,
              {
                backgroundColor: pressed ? Colors.secondaryColorLight : Colors.secondaryColor
              }
            ]}
          >
            <Image source={{uri: movie.poster}} style={styles.poster} />
            <View style={styles.movieInfo}>
              <Text style={styles.title}>
                {movie.title} <Text style={styles.year}>({movie.year})</Text>
              </Text>
              <View style={[styles.voteCircle, {backgroundColor: getVoteColor(movie.vote)}]}>
                <Text style={styles.voteText}>{movie.vote.toFixed(1)}</Text>
              </View>
            </View>
          </AnimatedView>
        )}
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  movieCard: {
    backgroundColor: Colors.secondaryColor, // dark purple
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
    borderRadius: 4
  },
  title: {
    color: Colors.textColor,
    fontSize: 18,
    fontWeight: "bold"
  },
  year: {
    color: Colors.secondaryColorVeryLight,
    fontSize: 14
  },
  voteCircle: {
    width: 28,
    height: 28,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 0
  },
  voteText: {
    color: Colors.voteTextColor,
    fontSize: 14,
    fontWeight: "bold"
  }
});
