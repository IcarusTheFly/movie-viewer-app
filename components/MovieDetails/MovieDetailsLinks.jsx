import {Text, View, StyleSheet, Pressable} from "react-native";
import Animated, {FadeInDown} from "react-native-reanimated";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {Link} from "expo-router";
import Colors from "../../constants/Colors";

const AnimatedView = Animated.createAnimatedComponent(View);

export default function MovieDetailsLinks({imdb_link, homepage_link}) {
  return imdb_link || homepage_link ? (
    <AnimatedView entering={FadeInDown.delay(800)} style={styles.buttonContainer}>
      {homepage_link ? (
        <Link href={homepage_link} asChild>
          <Pressable>
            {({pressed}) => (
              <View style={[styles.button, pressed ? styles.buttonPressed : styles.buttonDefault]}>
                <FontAwesome name="film" size={24} color={Colors.textColor} />
                <Text style={styles.buttonText}>Website</Text>
              </View>
            )}
          </Pressable>
        </Link>
      ) : null}
      {imdb_link ? (
        <Link href={imdb_link} asChild>
          <Pressable>
            {({pressed}) => (
              <View style={[styles.button, pressed ? styles.buttonPressed : styles.buttonDefault]}>
                <FontAwesome name="imdb" size={24} color={Colors.textColor} />
                <Text style={styles.buttonText}>IMDb</Text>
              </View>
            )}
          </Pressable>
        </Link>
      ) : null}
    </AnimatedView>
  ) : null;
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 16,
    backgroundColor: Colors.lightBackgroundColor
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 8
  },
  buttonPressed: {
    backgroundColor: Colors.secondaryColorVeryLightButtonPressed
  },
  buttonDefault: {
    backgroundColor: Colors.secondaryColorLight
  },
  buttonText: {
    color: Colors.textColor,
    marginLeft: 8,
    fontSize: 14,
    fontWeight: "bold"
  }
});
