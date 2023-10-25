import { ADD_MOVIE } from "../actions/movies";

const initialState = {
    movies: []
}
export const favorites = (state = initialState, action) => {
  switch (action.type){
    case ADD_MOVIE:
    return{
        ...state,
        movies: state.movies.concat(action.payload)

    }
    default:
        return state;
  }
}