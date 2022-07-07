import fetchApi from "../api/fetchApi";

const getAllPosts = (page) => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  };

  return fetchApi(`/`, page, requestOptions);
};

const deletePost = (postId, page) => {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  };

  return fetchApi(`post/${postId}`, page, requestOptions)
};

export {getAllPosts, deletePost}