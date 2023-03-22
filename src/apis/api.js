import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.themoviedb.org/3/',
});

export const getMovies = async ({ pageParam }) => {
	const res = await api.get(
		`/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${pageParam}`,
	);
	return res.data;
};
