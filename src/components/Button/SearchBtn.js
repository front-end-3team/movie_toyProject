import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function SearchBtn() {
	const [title, setTitle] = useState('');
	const navigate = useNavigate();

	const onClickSearch = () => {
		navigate(`/search/${title}`);
	};
	const searchInput = e => {
		setTitle(e.target.value);
	};
	return (
		<form onSubmit={onClickSearch}>
			<S.SearchInput onChange={searchInput} />
			<S.Button>검색</S.Button>
		</form>
	);
}
export default SearchBtn;

const SearchInput = styled.input`
	padding: 20px 0px;
	border-radius: 10px 0 0 10px;
	border: none;

	background-color: rgb(32, 32, 32);

	color: white;
	font-size: 20px;
	text-align: right;
`;
const Button = styled.button`
	padding: 19px 10px;
	border-radius: 0 7px 7px 0;
	border: none;
	background-color: rgb(62, 62, 62);
	color: white;
	font-size: 20px;
	text-align: right;
	cursor: pointer;
`;
const S = {
	SearchInput,
	Button,
};
