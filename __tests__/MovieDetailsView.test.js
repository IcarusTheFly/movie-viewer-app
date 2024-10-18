import React from "react";
import {describe, test, expect, jest} from "@jest/globals";
import renderer from "react-test-renderer";
import MovieDetailsView from "../components/MovieDetails/MovieDetailsView";
import MovieDetailsPoster from "../components/MovieDetails/MovieDetailsPoster";
import MovieDetailsInfo from "../components/MovieDetails/MovieDetailsInfo";
import MovieDetailsLinks from "../components/MovieDetails/MovieDetailsLinks";
import Colors from "../constants/Colors";
import {ImdbBaseUrl} from "../constants/Urls";

jest.mock("../components/MovieDetails/MovieDetailsPoster", () => {
  return jest.fn(() => null);
});

jest.mock("../components/MovieDetails/MovieDetailsInfo", () => {
  return jest.fn(() => null);
});

jest.mock("../components/MovieDetails/MovieDetailsLinks", () => {
  return jest.fn(() => null);
});

describe("MovieDetailsView", () => {
  const movieDetails = {
    poster: "test-poster.jpg",
    vote: 8,
    title: "Test Movie",
    year: "2024",
    genres: ["Action", "Adventure"],
    overview: "This is a test movie overview",
    imdb_link: `${ImdbBaseUrl}/12345`,
    homepage_link: "https://www.test.com"
  };

  test("renders correctly with movie details", () => {
    const tree = renderer.create(<MovieDetailsView movieDetails={movieDetails} />).toJSON();

    expect(tree).toBeTruthy();
    expect(MovieDetailsPoster).toHaveBeenCalledWith(
      expect.objectContaining({
        poster: movieDetails.poster,
        vote: movieDetails.vote
      }),
      expect.anything()
    );
    expect(MovieDetailsInfo).toHaveBeenCalledWith(
      expect.objectContaining({
        title: movieDetails.title,
        year: movieDetails.year,
        genres: movieDetails.genres,
        overview: movieDetails.overview
      }),
      expect.anything()
    );
    expect(MovieDetailsLinks).toHaveBeenCalledWith(
      expect.objectContaining({
        imdb_link: movieDetails.imdb_link,
        homepage_link: movieDetails.homepage_link
      }),
      expect.anything()
    );
  });

  test("renders with correct styles", () => {
    const tree = renderer.create(<MovieDetailsView movieDetails={movieDetails} />).toJSON();

    expect(tree.props.style).toMatchObject({
      flex: 1,
      backgroundColor: Colors.secondaryColor
    });
  });
});
