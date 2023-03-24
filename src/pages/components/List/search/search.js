import React from 'react';
import { useInfiniteQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getSearch } from '../../../../apis/api';

function Search() {
	const param = useParams();

	console.log(param);

	const { isLoading, isError, error, data, hasNextPage, fetchNextPage } =
		useInfiniteQuery(['search'], getSearch, {
			getNextPageParam: currentPage => {
				const nextPage = currentPage.page + 1;
				return nextPage > currentPage.total_pages ? null : nextPage;
			},
		});

	console.log(param);
	return (
		<>
			<S.H1>Search</S.H1>
		</>
	);
}
export default Search;

const H1 = styled.h1`
	background-color: rgb(132, 132, 132);
	font-size: 60px;
	font-weight: bold;
	padding-left: 50px;
`;
const S = {
	H1,
};
