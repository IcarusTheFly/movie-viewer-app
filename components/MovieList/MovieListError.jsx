import ErrorPage from "../ErrorPage";

export default function MovieListError() {
  return <ErrorPage errorTitle="Failed to load movies" errorMessage="An unexpected error occurred while fetching the movie list" retryLink={""} />;
}
