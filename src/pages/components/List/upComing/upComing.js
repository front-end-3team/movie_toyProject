import React from 'react';
import { useInfiniteQuery } from 'react-query';
import styled from 'styled-components';
import { getUpComing } from '../../../../apis/api';
import CommonList from '../commonList';

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
			<H1>Up Comming</H1>
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

export default UpComing;
const H1 = styled.h1`
	background-color: rgb(132, 132, 132);
	font-size: 60px;
	font-weight: bold;
	padding-left: 50px;
`;
