import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getSearch } from '../../../../apis/api';
import { queryConfig } from '../../../../apis/@queryConfig';
function Search() {
	const { title } = useParams();

	const { data, error, status, isLoading } = useQuery(
		['search'],
		() => getSearch({ title }),
		{ ...queryConfig },
	);
	console.log(isLoading);

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
