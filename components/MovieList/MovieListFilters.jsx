import {View, Text, TextInput, StyleSheet} from "react-native";
import {useDebouncedCallback} from "use-debounce";
import Colors from "../../constants/Colors";

export default function MovieListFilters({setSearchQuery}) {
  const filterMovies = (query) => {
    setSearchQuery(query);
  };

  const debouncedFilterMovies = useDebouncedCallback(filterMovies, 500);

  const handleSearch = (text) => {
    debouncedFilterMovies(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Search by title:</Text>
      <TextInput style={styles.searchInput} placeholder="Search title..." placeholderTextColor={Colors.secondaryColorVeryLight} onChangeText={handleSearch} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    padding: 10,
    backgroundColor: Colors.mainBackgroundColor,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  label: {
    fontWeight: "bold",
    color: Colors.textColor
  },
  searchInput: {
    marginHorizontal: 12,
    marginVertical: 5,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.neutralColor,
    backgroundColor: Colors.inputBackgroundColor,
    color: Colors.textColor
  }
});
