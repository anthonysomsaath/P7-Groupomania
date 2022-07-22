import axios from 'axios';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
const url = 'http://localhost:3500'

export const login = (login) =>
	axios.post(`${url}/login`, login, {
		headers: {
			Authorization: localStorage.getItem('token'),
		},
	});

export const signup = (signup) =>
    axios.post(`${url}/signup`, signup,	{
			headers: {
				Authorization: localStorage.getItem('token'),
			},
		},
	);

export const deletUser = (id) =>
	axios.delete(`${url}/users/${id}`, {
		headers: {
			Authorization: localStorage.getItem('token'),
		},
	});

export const getAllUsers = () =>
	axios.get(`${url}/users`, {
		headers: {
			Authorization: localStorage.getItem('token'),
		},
	});

export const getOneUser = (id) =>
	axios.get(`${url}/users/${id}`, {
		headers: {
			Authorization: localStorage.getItem('token'),
		},
	});

export const updateUser = (id) =>
    axios.put(`${url}/users/${id}`, {
        headers: {
            Authorization: localStorage.getItem('token'),
        },
    });