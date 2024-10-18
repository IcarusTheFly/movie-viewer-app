import {MovieDetailsRoute} from "../../constants/Routes";
import ErrorPage from "../ErrorPage";

export default function MovieDetailsError({id, errorType}) {
  const errorTitle = errorType === 404 ? "Movie Not Found" : "Failed to Load Movie Details";
  const errorMessage = errorType === 404 ? `We couldn't find the movie with ID: ${id}` : `We couldn't load the details for the movie with ID: ${id}`;

  return <ErrorPage errorTitle={errorTitle} errorMessage={errorMessage} retryLink={MovieDetailsRoute.replace(":id", id)} />;
}
