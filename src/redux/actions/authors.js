import axios from "axios";
import { GET_AUTHORS, VIEW_AUTHOR } from "./actionType";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

export const getAuthors = () => {
  return async dispatch => {
    try {
      const response = await instance.get("/api/authors/");
      const authors = response.data;
      dispatch({
        type: GET_AUTHORS,
        payload: authors
      });
    } catch (err) {
      console.error("SOMETHING WENT WRONG: ", err);
    }
  };
};

export const viewAuthor = authorID => {
  return async dispatch => {
    try {
      const response = await instance.get(`/api/authors/${authorID}`);
      const author = response.data;
      dispatch({
        type: VIEW_AUTHOR,
        payload: author.id
      });
    } catch (err) {
      console.error("SOMETHING WENT WRONG: ", err);
    }
  };
};
