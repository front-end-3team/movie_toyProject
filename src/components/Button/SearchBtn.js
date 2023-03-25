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
		<Form onSubmit={onClickSearch}>
			<S.SearchInput onChange={searchInput} />
			<S.Button>검색</S.Button>
		</Form>
	);
}
export default SearchBtn;

const Form = styled.form`
	display: flex;
`;
const SearchInput = styled.input`
	padding: 10px 0px;
	border-radius: 10px 0 0 10px;
	border: 1px solid black;
	background-color: rgb(132, 132, 132);
	color: white;
	font-size: 20px;
	text-align: right;
`;
const Button = styled.button`
	padding: 9px 10px;
	border-radius: 0 7px 7px 0;
	border: 1px solid black;
	background-color: rgb(132, 132, 132);
	color: white;
	font-size: 15px;
	text-align: right;
	cursor: pointer;
`;
const S = {
	SearchInput,
	Button,
	Form,
};
