import React from 'react';
import { useInfiniteQuery } from 'react-query';
import styled from 'styled-components';
import { getNowPlaying } from '../../../../apis/api';
import InfiniteList from '../infiniteList';

/*
	fetchNextPage는 다음페이지에 데이터를 가져올때 사용한다.
	hasNextPage는 다음페이지에 존재 여부를 확인한다.  getNextPageParam 에서 반환한 값이 undefined 이면 false 아니면 true 가 된다
	isLoading은 로딩 true,false
	isError 에러 true,false
	data는 받아온 데이터가 들어있다.
 */

function NowPlaying() {
	const { isLoading, isError, error, data, hasNextPage, fetchNextPage } =
		useInfiniteQuery(['nowPlaying'], getNowPlaying, {
			getNextPageParam: currentPage => {
				const nextPage = currentPage.page + 1;
				return nextPage > currentPage.total_pages ? null : nextPage;
			},
		});

	return (
		<>
			<S.H1>현재상영작</S.H1>
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
export default NowPlaying;

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
