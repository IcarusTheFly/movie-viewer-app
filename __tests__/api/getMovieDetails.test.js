import {
  describe,
  test,
  expect,
  beforeEach,
  jest
} from "@jest/globals";
import {
  getMovieDetails
} from "../../lib/api";
import {
  ImdbBaseUrl,
  ImgBaseUrl,
  TmdbMovieDetailsUrl
} from "../../constants/Urls";

const poster_path = "/test.jpg";
const imdb_link = "example_link";
const API_KEY = process.env.API_KEY;

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        id: 1,
        title: "Test Movie",
        release_date: "2024-01-01",
        poster_path: poster_path,
        vote_average: 1,
        overview: "Test overview",
        genres: [{
          id: 1,
          name: "Action"
        }],
        imdb_id: imdb_link,
        homepage: ""
      }),
  })
);

describe("getMovieDetails", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test("fetches and returns movie details correctly", async () => {
    const expectedMovieDetails = {
      id: 1,
      title: "Test Movie",
      year: "2024",
      poster: `${ImgBaseUrl}${poster_path}`,
      vote: 1,
      overview: "Test overview",
      genres: ["Action"],
      imdb_link: `${ImdbBaseUrl}/${imdb_link}`,
      homepage_link: null
    };

    const movieDetails = await getMovieDetails(1);

    expect(fetch).toHaveBeenCalledWith(
      `${TmdbMovieDetailsUrl}/1?api_key=${API_KEY}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );

    expect(movieDetails).toEqual(expectedMovieDetails);
  });

  test("throws an error when fetch fails", async () => {
    fetch.mockRejectedValue(new Error("Server error"));

    await expect(getMovieDetails(1)).rejects.toThrow("Server error");
  });
});