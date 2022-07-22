import axios from "axios";
const url = 'http://localhost:3500'

export const getPosts = () =>
	axios.get(`${url}/`, {
		headers: {
			Authorization: localStorage.getItem('token'),
		},
	});

  export const addPost = (formData) =>
	axios.post(`${url}/post`, formData, {
		headers: {
			'Content-Type': 'multipart/form-data',
			Authorization: localStorage.getItem('token'),
		},
	});

  export const deletePost = (id) =>
	axios.delete(`${url}/post/${id}`, {
		headers: {
			Authorization: localStorage.getItem('token'),
		},
	});