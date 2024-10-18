import {useEffect, useState} from "react";
import {getMovieDetails} from "../../lib/api";
import MovieDetailsPlaceholder from "./MovieDetailsPlaceholder";
import MovieDetailsError from "./MovieDetailsError";
import MovieDetailsView from "./MovieDetailsView";

export default function MovieDetailsWrapper({id}) {
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorType, setErrorType] = useState(null);

  useEffect(() => {
    getMovieDetails(id)
      .then((movie) => {
        if (movie === null) {
          setErrorType(404);
        } else {
          setErrorType(null);
          setMovieDetails(movie);
        }
        setIsLoading(false);
      })
      .catch(() => {
        setErrorType(500);
        setIsLoading(false);
      });
  }, [id]);

  return !isLoading ? movieDetails !== null ? <MovieDetailsView movieDetails={movieDetails} /> : <MovieDetailsError id={id} errorType={errorType} /> : <MovieDetailsPlaceholder />;
}
