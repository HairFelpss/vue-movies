import Movies from "@/api/Movies";

export const getMovies = async ({ commit }) => {
  const response = await Movies.all();
  commit("SET_MOVIES", response.data.Search);
};

export const addMovieToWaitList = ({ commit }, movie) => {
  commit("ADD_TO_WAITLIST", movie);
};

export const removeMovieFromWaitList = ({ commit }, movie) => {
  console.log(movie);
  commit("REMOVE_FROM_WAITLIST", movie);
};
