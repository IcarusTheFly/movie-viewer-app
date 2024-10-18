import {Text, View, StyleSheet} from "react-native";
import Animated, {FadeInDown} from "react-native-reanimated";
import Colors from "../../constants/Colors";

const AnimatedView = Animated.createAnimatedComponent(View);
const AnimatedText = Animated.createAnimatedComponent(Text);

export default function MovieDetailsInfo({title, year, genres, overview}) {
  return (
    <AnimatedView entering={FadeInDown.delay(200)} style={styles.infoContainer}>
      <AnimatedText entering={FadeInDown.delay(300)} style={styles.title}>
        {title}
      </AnimatedText>
      <AnimatedText entering={FadeInDown.delay(400)} style={styles.year}>
        {year}
      </AnimatedText>

      <AnimatedView entering={FadeInDown.delay(500)} style={styles.genresContainer}>
        {genres.map((genre, index) => (
          <View key={index} style={styles.genreTag}>
            <Text style={styles.genreText}>{genre}</Text>
          </View>
        ))}
      </AnimatedView>

      <AnimatedText entering={FadeInDown.delay(600)} style={styles.sectionTitle}>
        Overview
      </AnimatedText>
      <AnimatedText entering={FadeInDown.delay(700)} style={styles.overview}>
        {overview}
      </AnimatedText>
    </AnimatedView>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    padding: 16
  },
  title: {
    color: Colors.textColor,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4
  },
  year: {
    color: Colors.secondaryColorVeryLight,
    fontSize: 18,
    marginBottom: 12
  },
  genresContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 16
  },
  genreTag: {
    backgroundColor: Colors.secondaryColorLight,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8
  },
  genreText: {
    color: Colors.textColor,
    fontSize: 14
  },
  sectionTitle: {
    color: Colors.textColor,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8
  },
  overview: {
    color: Colors.secondaryColorVeryLight,
    fontSize: 16,
    lineHeight: 24
  }
});
