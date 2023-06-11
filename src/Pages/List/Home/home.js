import React from 'react';
import { useInfiniteQuery } from 'react-query';
import styled from 'styled-components';
import { getMovies } from '../../../apis/api';
import InfiniteList from '../../infiniteList';

function HomePage() {
	const { isLoading, isError, error, data, hasNextPage, fetchNextPage } =
		useInfiniteQuery(['HomePage'], getMovies, {
			getNextPageParam: currentPage => {
				const nextPage = currentPage.page + 1;
				return nextPage > currentPage.total_pages ? null : nextPage;
			},
		});
	return (
		<S.Wrapper>
			<S.H1>홈</S.H1>
			<InfiniteList
				data={data}
				isLoading={isLoading}
				isError={isError}
				fetchNextPage={fetchNextPage}
				hasNextPage={hasNextPage}
				error={error}
			/>
		</S.Wrapper>
	);
}
export default HomePage;

const Wrapper = styled.div`
	position: relative;
`;
const H1 = styled.h1`
	font-size: 60px;
	font-weight: bold;
	padding-left: 50px;
	color: rgb(132, 132, 132);
	position: absolute;
	z-index: 999;
	top: 2rem;
	left: 2rem;
`;

const S = {
	H1,
	Wrapper,
};
