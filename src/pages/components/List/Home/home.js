import React from 'react';
import { useInfiniteQuery } from 'react-query';
import { getMovies } from '../../../../apis/api';
import CommonList from '../commonList';

const HomePage = () => {
	const { isLoading, isError, error, data, hasNextPage, fetchNextPage } =
		useInfiniteQuery(['HomePage'], getMovies, {
			getNextPageParam: currentPage => {
				const nextPage = currentPage.page + 1;
				return nextPage > currentPage.total_pages ? null : nextPage;
			},
		});
	console.log(data);
	return (
		<>
			<CommonList
				data={data}
				isLoading={isLoading}
				isError={isError}
				fetchNextPage={fetchNextPage}
				hasNextPage={hasNextPage}
				error={error}
			/>
		</>
	);
};

export default HomePage;
