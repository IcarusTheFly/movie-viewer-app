import {
  describe,
  test,
  expect,
  beforeEach,
  jest
} from "@jest/globals";
import {
  getAllMovies
} from "../../lib/api";
import {
  ImgBaseUrl,
  TmdbPopularMoviesUrl,
  TmdbSearchMoviesUrl
} from "../../constants/Urls";

const poster_path = "/test.jpg";
const API_KEY = process.env.API_KEY;

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        results: [{
          id: 1,
          title: "Test Movie",
          release_date: "2024-01-01",
          poster_path: poster_path,
          vote_average: 1,
        }, ],
      }),
  })
);

describe("getAllMovies", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test("fetches and returns popular movie details correctly", async () => {
    const expectedMovies = [{
      id: 1,
      title: "Test Movie",
      year: "2024",
      poster: `${ImgBaseUrl}${poster_path}`,
      vote: 1,
    }];

    const movies = await getAllMovies(1, "");

    expect(fetch).toHaveBeenCalledWith(
      `${TmdbPopularMoviesUrl}?api_key=${API_KEY}&page=1`, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );

    expect(movies).toEqual(expectedMovies);
  });

  test("fetches and returns searched movie details correctly", async () => {
    const expectedMovies = [{
      id: 1,
      title: "Test Movie",
      year: "2024",
      poster: `${ImgBaseUrl}${poster_path}`,
      vote: 1,
    }];

    const movies = await getAllMovies(1, "test");

    expect(fetch).toHaveBeenCalledWith(
      `${TmdbSearchMoviesUrl}?query=test&api_key=${API_KEY}&page=1`, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );

    expect(movies).toEqual(expectedMovies);
  });

  test("throws an error when fetch fails", async () => {
    fetch.mockRejectedValue(new Error("Server error"));

    await expect(getAllMovies(1, "")).rejects.toThrow("Server error");
  });
});