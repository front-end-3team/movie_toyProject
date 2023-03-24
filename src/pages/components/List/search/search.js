import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getSearch } from '../../../../apis/api';
import { queryConfig } from '../../../../apis/@queryConfig';
import SearchList from '../searchList';
function Search() {
	const { title } = useParams();

	const { data, error, isLoading, isError } = useQuery(
		['search'],
		() => getSearch({ title }),
		{ ...queryConfig },
	);

	return (
		<>
			<S.H1>Search</S.H1>
			<SearchList
				data={data}
				isLoading={isLoading}
				isError={isError}
				error={error}
			/>
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
