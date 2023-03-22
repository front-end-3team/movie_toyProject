import axios from 'axios';
import { useEffect, useState } from 'react';

function HomePage() {
	const [posts, setPosts] = useState([]);
	const key = process.env.REACT_APP_TMDB_API_KEY;

	useEffect(() => {
		const fetchPosts = async () => {
			const res = await axios.get(
				`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
			);
			setPosts(res.data.results);
		};
		fetchPosts();
	}, []);
	console.log(posts);

	return <></>;
}
export default HomePage;
