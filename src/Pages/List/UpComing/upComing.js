import React from 'react';
import { useInfiniteQuery } from 'react-query';
import styled from 'styled-components';
import { getUpComing } from '../../../Apis/api';
import InfiniteList from '../../infiniteList';

function UpComing() {
	const { isLoading, isError, error, data, hasNextPage, fetchNextPage } =
		useInfiniteQuery(['upComing'], getUpComing, {
			getNextPageParam: currentPage => {
				const nextPage = currentPage.page + 1;
				return nextPage > currentPage.total_pages ? null : nextPage;
			},
		});

	return (
		<>
			<S.H1>상영예정작</S.H1>
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

export default UpComing;
const H1 = styled.h1`
	background-color: rgb(32, 33, 36);
	color: rgb(132, 132, 132);
	font-size: 60px;
	font-weight: bold;
	padding-left: 50px;
	padding-top: 30px;
`;
const S = {
	H1,
};
