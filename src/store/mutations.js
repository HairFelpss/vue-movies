export const SET_MOVIES = (state, movies) => {
  state.movies = movies;
};

export const ADD_TO_WAITLIST = (state, movie) => {
  const pushToMovie = Boolean(
    Object.values(state.waitList).find(item => {
      return movie.waitList.imdbID === item.waitList.imdbID;
    })
  );
  if (!pushToMovie) {
    state.waitList.push(movie);
  }
};

export const REMOVE_FROM_WAITLIST = (state, movie) => {
  const removeMovie = state.movie.indexOf(movie);
  removeMovie.splice(removeMovie, 1);
};
