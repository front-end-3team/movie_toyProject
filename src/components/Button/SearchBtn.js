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

	background-color: rgb(32, 33, 36);
	color: white;
	font-size: 20px;
	text-align: right;
	border: none;
	border-bottom: 2px solid rgb(132, 132, 132);
`;
const Button = styled.button`
	padding: 9px 10px;
	background-color: rgb(32, 33, 36);
	color: white;
	font-size: 15px;
	text-align: right;
	border: none;
	border-bottom: 2px solid rgb(132, 132, 132);
`;
const S = {
	SearchInput,
	Button,
	Form,
};
