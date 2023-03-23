import { Axios } from './@core';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const PATH = '/movie';
const LANGUAGE = 'en-US';

export const getMovies = async ({ pageParam }) => {
	const res = await Axios.get(
		`${PATH}/popular?api_key=${API_KEY}&page=${pageParam}`,
	);
	return res.data;
};

export const getUpComing = async ({ pageParam }) => {
	const res = await Axios.get(
		`${PATH}/upcoming?api_key=${API_KEY}&language=${LANGUAGE}&page=${pageParam}`,
	);
	return res.data;
};


export const getTopRated = async ({ pageParam }) => {
	const res = await Axios.get(
		`${PATH}/top_rated?api_key=${API_KEY}&language=${LANGUAGE}&page=${pageParam}`,

	);
	return res.data;
};
