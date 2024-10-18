import {StyleSheet, View, Text} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Colors from "../../constants/Colors";

export default function MovieListEmpty() {
  return (
    <View style={styles.container}>
      <FontAwesome name="film" size={48} color={Colors.errorColor} />
      <Text style={styles.emptyText}>No movies available</Text>
      <Text style={styles.subText}>Please check back later</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.secondaryColor,
    padding: 20,
    paddingBottom: 40
  },
  emptyText: {
    color: Colors.textColor,
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 16
  },
  subText: {
    color: Colors.secondaryColorVeryLight,
    fontSize: 16,
    textAlign: "center"
  }
});
