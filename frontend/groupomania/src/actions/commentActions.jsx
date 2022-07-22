import axios from "axios";
const url = 'http://localhost:3500'

export const addCom = (post, createComment) =>
	axios.post(
		`${url}/${post.id}/comments`,
		createComment,
		{
			headers: {
				Authorization: localStorage.getItem('token'),
			},
		},
	);

export const getComs = (post) =>
axios.get(`${url}/${post.id}/comments`, {
	headers: {
		Authorization: localStorage.getItem('token'),
	},
});

export const deleteCom = (post, id) =>
	axios.delete(`${url}/${post.id}comments/${id}`, {
		headers: {
			Authorization: localStorage.getItem('token'),
		},
	});