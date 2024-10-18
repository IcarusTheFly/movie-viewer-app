import {useState, useEffect, useRef} from "react";
import {getAllMovies} from "../../lib/api";
import MovieListError from "./MovieListError";
import MovieListPlaceholder from "./MovieListPlaceholder";
import MovieListView from "./MovieListView";
import MovieListEmpty from "./MovieListEmpty";
import MovieListPaginationFooter from "./MovieListPaginationFooter";
import MovieListFilters from "./MovieListFilters";

export default function MovieListWrapper() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const prevSearchQuery = useRef(searchQuery);
  const totalPages = 10; // We will hardcode 10 pages, but it could be provided by the API response as well

  const cache = useRef({});
  // TO-DO: Implement details of each movie in the cache

  useEffect(() => {
    if (prevSearchQuery.current !== searchQuery && currentPage !== 1) {
      setCurrentPage(1);
    } else {
      const cacheKey = `${currentPage}-${searchQuery}`;
      if (cache.current[cacheKey]) {
        setMovies(cache.current[cacheKey]);
        setIsError(false);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      getAllMovies(currentPage, searchQuery)
        .then((movies) => {
          cache.current[cacheKey] = movies;
          setMovies(movies);
          setIsError(false);
          setIsLoading(false);
        })
        .catch(() => {
          setIsError(true);
          setIsLoading(false);
        });
    }
    prevSearchQuery.current = searchQuery;
  }, [currentPage, searchQuery]);

  const renderFilters = () => {
    return <MovieListFilters setSearchQuery={setSearchQuery} />;
  };

  const renderContent = () => {
    if (isLoading) return <MovieListPlaceholder />;
    if (isError) return <MovieListError />;
    if (movies.length === 0) return <MovieListEmpty />;
    return <MovieListView movies={movies} />;
  };

  const renderPagination = () => {
    return !isError ? <MovieListPaginationFooter currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} /> : null;
  };

  return (
    <>
      {renderFilters()}
      {renderContent()}
      {renderPagination()}
    </>
  );
}
