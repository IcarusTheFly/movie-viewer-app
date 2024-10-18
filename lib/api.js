import {
  ImgBaseUrl,
  ImdbBaseUrl,
  TmdbMovieDetailsUrl,
  TmdbPopularMoviesUrl,
  TmdbSearchMoviesUrl
} from "../constants/Urls";

const API_KEY = process.env.API_KEY;

export async function getMovieDetails(movieId) {
  try {
    const rawMovieDetails = await fetch(`${TmdbMovieDetailsUrl}/${movieId}?api_key=${API_KEY}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      }
    });

    if (rawMovieDetails.status === 404) {
      return null;
    }

    const data = await rawMovieDetails.json();

    const result = {
      id: data.id,
      title: data.title,
      year: data.release_date.slice(0, 4),
      poster: `${ImgBaseUrl}${data.poster_path}`,
      vote: data.vote_average,
      overview: data.overview,
      genres: data.genres.map((genre) => genre.name),
      homepage_link: data.homepage ? data.homepage : null,
      imdb_link: data.imdb_id ? `${ImdbBaseUrl}/${data.imdb_id}` : null
    }

    return result;
  } catch (error) {
    console.error(`Error fetching movie details (ID: ${movieId}): ${error}`);
    throw new Error(error);
  }
}

export async function getAllMovies(page = 1, searchQuery = "") {
  try {
    const baseQuery = searchQuery !== "" ? `${TmdbSearchMoviesUrl}?query=${searchQuery}&` : `${TmdbPopularMoviesUrl}?`;
    const rawMovies = await fetch(`${baseQuery}api_key=${API_KEY}&page=${page}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      }
    });

    const {
      results: data
    } = await rawMovies.json();

    const result = data.map((movie) => {
      return {
        id: movie.id,
        title: movie.title,
        year: movie.release_date ? movie.release_date.slice(0, 4) : "",
        poster: `${ImgBaseUrl}${movie.poster_path}`,
        vote: movie.vote_average
      };
    });

    return result;
  } catch (error) {
    console.error(`Error fetching movies: ${error}`);
    throw new Error(error);
  }
}