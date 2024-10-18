import {StyleSheet, View, FlatList} from "react-native";
import MovieCard from "./MovieCard";
import Colors from "../../constants/Colors";

export default function MovieListView({movies}) {
  return (
    <View style={styles.container}>
      <FlatList data={movies} renderItem={({item, index}) => <MovieCard movie={item} index={index} />} contentContainerStyle={styles.listContainer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainBackgroundColor,
    width: "100%",
    paddingBottom: 40
  },
  searchInput: {
    height: 40,
    margin: 12,
    padding: 10,
    borderRadius: 8,
    backgroundColor: Colors.inputBackgroundColor,
    color: Colors.textColor
  },
  listContainer: {
    paddingBottom: 20
  },
  footerLoader: {
    paddingVertical: 20,
    alignItems: "center"
  }
});
