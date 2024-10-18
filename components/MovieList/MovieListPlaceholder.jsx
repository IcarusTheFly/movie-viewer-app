import {StyleSheet, View, FlatList} from "react-native";
import MovieCardPlaceholder from "./MovieCardPlaceholder";
import Colors from "../../constants/Colors";

export default function MovieListPlaceholder() {
  return (
    <View style={styles.container}>
      <FlatList data={Array(10).fill({})} renderItem={() => <MovieCardPlaceholder />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainBackgroundColor,
    width: "100%",
    paddingBottom: 40
  }
});
