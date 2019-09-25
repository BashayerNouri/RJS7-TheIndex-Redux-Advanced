import axios from "axios";
import { GET_AUTHOR_BOOKS, GET_BOOKS } from "./actionType";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

export const getBooks = () => {
  return async dispatch => {
    try {
      const response = await instance.get("/api/books/");
      const books = response.data;
      dispatch({
        type: GET_BOOKS,
        payload: books
      });
    } catch (err) {
      console.error("SOMETHING WENT WRONG: ", err);
    }
  };
};

export const getAuthorBook = authorID => {
  return async dispatch => {
    try {
      const response = await instance.get(`/api/authors/${authorID}`);
      const author = response.data;
      dispatch({
        type: GET_AUTHOR_BOOKS,
        payload: author
      });
    } catch (err) {
      console.error("SOMETHING WENT WRONG: ", err);
    }
  };
};
