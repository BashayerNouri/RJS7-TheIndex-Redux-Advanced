import { GET_AUTHOR_BOOKS, GET_BOOKS } from "../actions/actionType";

const initialState = {
  books: [],
  authors: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      const getBooks = action.payload;
      return {
        ...state,
        books: state.books.map(book =>
          book !== getBooks ? book : { ...book, done: !book.done }
        )
      };

    case GET_AUTHOR_BOOKS:
      const authorID = action.payload;
      return {
        ...state,
        authors: state.authors.filter(author => author.id === authorID)
      };

    default:
      return state;
  }
};
