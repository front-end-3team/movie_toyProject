import React from 'react';
import { useInfiniteQuery } from 'react-query';
import styled from 'styled-components';
import { getNowPlaying } from '../../../../apis/api';
import CommonList from '../infiniteScroll';

function NowPlaying() {
	const { isLoading, isError, error, data, hasNextPage, fetchNextPage } =
		useInfiniteQuery(['NowPlaying'], getNowPlaying, {
			getNextPageParam: currentPage => {
				const nextPage = currentPage.page + 1;
				return nextPage > currentPage.total_pages ? null : nextPage;
			},
		});

	return (
		<>
			<S.H1>NowPlaying</S.H1>
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
}

export default NowPlaying;
const H1 = styled.h1`
	background-color: rgb(132, 132, 132);
	font-size: 60px;
	font-weight: bold;
	padding-left: 50px;
`;
const S = {
	H1,
};
