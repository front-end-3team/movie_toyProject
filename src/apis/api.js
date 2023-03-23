import { Axios } from './@core';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const getMovies = async ({ pageParam }) => {
	const res = await Axios.get(
		`/movie/popular?api_key=${API_KEY}&page=${pageParam}`,
	);
	return res.data;
};

export const getUpComing = async ({ pageParam }) => {
	const res = await Axios.get(
		`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${pageParam}`,
	);
	return res.data;
};
