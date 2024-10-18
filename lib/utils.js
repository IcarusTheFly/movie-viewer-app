import Colors from "../constants/Colors";

export const getVoteColor = (vote) => {
  if (vote >= 8) return Colors.voteHighRating;
  if (vote >= 5) return Colors.voteMediumRating;
  return Colors.voteLowRating;
};