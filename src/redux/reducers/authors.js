import { GET_AUTHORS, VIEW_AUTHOR } from "../actions/actionType";

const initialState = {
  authors: [],
  currentAuthor: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTHORS:
      const getAuthors = action.payload;
      return {
        ...state,
        authors: state.authors.map(author =>
          author !== getAuthors ? author : { ...author, done: !author.done }
        )
      };

    case VIEW_AUTHOR:
      const authorID = action.payload;
      return {
        ...state,
        authors: state.authors.filter(author => author.id === authorID)
      };

    default:
      return state;
  }
};
