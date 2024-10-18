import {StyleSheet, ScrollView} from "react-native";
import Colors from "../../constants/Colors";
import MovieDetailsPoster from "./MovieDetailsPoster";
import MovieDetailsInfo from "./MovieDetailsInfo";
import MovieDetailsLinks from "./MovieDetailsLinks";

export default function MovieDetailsView({movieDetails}) {
  return (
    <ScrollView style={styles.container}>
      <MovieDetailsPoster poster={movieDetails.poster} vote={movieDetails.vote} />
      <MovieDetailsInfo title={movieDetails.title} year={movieDetails.year} genres={movieDetails.genres} overview={movieDetails.overview} />
      <MovieDetailsLinks imdb_link={movieDetails.imdb_link} homepage_link={movieDetails.homepage_link} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondaryColor
  }
});
