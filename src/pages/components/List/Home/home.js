import React from 'react';
import { useInfiniteQuery } from 'react-query';
import styled from 'styled-components';
import { getMovies } from '../../../../apis/api';
import InfiniteList from '../infiniteList';

function HomePage() {
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
			<S.H1>홈</S.H1>
			<InfiniteList
				data={data}
				isLoading={isLoading}
				isError={isError}
				fetchNextPage={fetchNextPage}
				hasNextPage={hasNextPage}
				error={error}
			/>
		</>
	);
}
export default HomePage;

const H1 = styled.h1`
	font-size: 60px;
	font-weight: bold;
	padding-left: 50px;
	background-color: rgb(32, 33, 36);
	color: rgb(132, 132, 132);
	padding-top: 30px;
`;

const S = {
	H1,
};
