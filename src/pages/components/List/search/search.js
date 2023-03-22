import { useQuery } from '@tanstack/react-query';

function Search() {
	const { data } = useQuery(['getTodo'], () =>
		axios(
			'https://api.themoviedb.org/3/search/movie?api_key=6833d41651c2d1111576e2298a838524&language=en-US&page=1&include_adult=false',
		),
	);
	console.log({ data });

	return (
		<>
			<div></div>
		</>
	);
}
export default Search;
