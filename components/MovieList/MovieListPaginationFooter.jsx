import {View, StyleSheet, Pressable, Text} from "react-native";
import Colors from "../../constants/Colors";

export default function MovieListPaginationFooter({currentPage, totalPages, setCurrentPage}) {
  const pageNumbers = [];
  const maxVisiblePages = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(
      <Pressable key={i} onPress={() => changePage(i)}>
        <Text style={[styles.pageLink, i === currentPage && styles.currentPage]}>{i}</Text>
      </Pressable>
    );
  }

  const changePage = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <View style={styles.pagination}>
      {currentPage > 1 && (
        <Pressable onPress={() => changePage(currentPage - 1)}>
          <Text style={styles.pageLink}>{"<"}</Text>
        </Pressable>
      )}
      {pageNumbers}
      {currentPage < totalPages && (
        <Pressable nPress={() => changePage(currentPage + 1)}>
          <Text style={styles.pageLink}>{">"}</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  pagination: {
    backgroundColor: Colors.mainBackgroundColor,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0
  },
  pageLink: {
    padding: 10,
    margin: 5,
    backgroundColor: Colors.accentColor,
    borderRadius: 5,
    color: Colors.textColor
  },
  currentPage: {
    backgroundColor: Colors.secondaryColor
  }
});
