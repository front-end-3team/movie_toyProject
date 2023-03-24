import { Axios } from './@core';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const PATH = '/movie';
const LANGUAGE = 'ko-KR';

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

export const getNowPlaying = async ({ pageParam }) => {
	const res = await Axios.get(
		`${PATH}/now_playing?api_key=${API_KEY}&language=${LANGUAGE}&page=${pageParam}`,
	);
	return res.data;
};

//api.themoviedb.org/3/search/movie?api_key=6833d41651c2d1111576e2298a838524&language=ko-KR&page=1&query=범죄도시

export const getSearch = async () => {
	const res = await Axios.get(
		`/search/movie?api_key=${API_KEY}&language=${LANGUAGE}&page=1&query=${title}`,
	);
	console.log(title);
	return res.data;
};

export const getDetail = async ({ movieId }) => {
	const res = await Axios.get(
		`${PATH}/${movieId}?api_key=${API_KEY}&language=${LANGUAGE}&append_to_response=videos,images`,
	);
	console.log(res);
	return res.data;
};
