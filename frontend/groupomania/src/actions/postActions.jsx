import axios from "axios";

export const GET_POSTS = "GET_POSTS";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";
export const ADD_POST = "ADD_POST";
export const GET_POST_ERRORS = "GET_POST_ERRORS";

export const getPosts = (num) => {
    return (result) => {
      return axios
        .get(`${process.env.HOST}api/post/`)
        .then((res) => {
          const array = res.data.slice(0, num);
          result({ type: GET_POSTS, payload: array });
        })
        .catch((error) => console.log(error));
    };
  };

  export const updatePost = (id, post) => {
    return (result) => {
      return axios({
        method: "put",
        url: `${process.env.HOST}api/post/${id}`,
        data: { post },
      })
        .then((res) => {
          result({ type: UPDATE_POST, payload: { post, id } });
        })
        .catch((error) => console.log(error));
    };
  };

  export const deletePost = (id) => {
    return (result) => {
      return axios({
        method: "delete",
        url: `${process.env.HOST}api/post/${id}`,
      })
        .then((res) => {
          result({ type: DELETE_POST, payload: { id } });
        })
        .catch((error) => console.log(error));
    };
  };

  export const addPost = (data) => {
    return (result) => {
      return axios
        .post(`${process.env.HOST}api/post/`, data)
        .then((res) => {
          if (res.data.errors) {
            result({ type: GET_POST_ERRORS, payload: res.data.errors });
          } else {
            result({ type: GET_POST_ERRORS, payload: "" });
          }
        });
    };
  };