import React from "react";
import {describe, test, expect, jest} from "@jest/globals";
import renderer from "react-test-renderer";
import MovieListView from "../components/MovieList/MovieListView";
import MovieCard from "../components/MovieList/MovieCard";
import Colors from "../constants/Colors";

jest.mock("../components/MovieList/MovieCard", () => {
  return jest.fn(() => null);
});

describe("MovieListView", () => {
  const movies = [
    {id: 1, title: "Movie 1", release_date: "2024-01-01", poster_path: "/poster1.jpg", vote: 8},
    {id: 2, title: "Movie 2", release_date: "2023-01-01", poster_path: "/poster2.jpg", vote: 7}
  ];

  test("renders correctly with a list of movies", async () => {
    const tree = renderer.create(<MovieListView movies={movies} />).toJSON();
    const flatList = tree.children.find((child) => child.type === "RCTScrollView");

    expect(flatList).toBeTruthy();
    expect(MovieCard).toHaveBeenCalledTimes(movies.length);
  });

  test("renders the correct number of items in FlatList", () => {
    const tree = renderer.create(<MovieListView movies={movies} />).toJSON();
    const flatList = tree.children.find((child) => child.type === "RCTScrollView");

    expect(flatList.props.data.length).toBe(movies.length);
  });

  test("renders MovieCard for each movie", () => {
    renderer.create(<MovieListView movies={movies} />);

    movies.forEach((movie, index) => {
      expect(MovieCard).toHaveBeenCalledWith(
        expect.objectContaining({
          movie: expect.objectContaining({id: movie.id}),
          index: index
        }),
        expect.anything()
      );
    });
  });

  test("renders with correct styles", () => {
    const tree = renderer.create(<MovieListView movies={movies} />).toJSON();

    expect(tree).toBeTruthy(); // Ensure the container is found
    expect(tree.props.style).toMatchObject({
      flex: 1,
      backgroundColor: Colors.mainBackgroundColor,
      width: "100%",
      paddingBottom: 40
    });
  });
});
