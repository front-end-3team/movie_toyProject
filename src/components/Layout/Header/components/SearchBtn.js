import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CiSearch } from 'react-icons/ci';

function SearchBtn() {
	const [title, setTitle] = useState('');
	const navigate = useNavigate();

	const onClickSearch = () => {
		if (!title) return;
		navigate(`/search/${title}`);
	};
	const searchInput = e => {
		setTitle(e.target.value);
	};

	return (
		<>
			<Form onSubmit={onClickSearch}>
				<S.SearchInput
					onChange={searchInput}
					placeholder="제목, 사람, 장르"
				/>
				<S.Button>
					<CiSearch color={'white'} size={30} />
				</S.Button>
			</Form>
		</>
	);
}
export default SearchBtn;

const Form = styled.form`
	display: flex;
`;
const SearchInput = styled.input`
	background-color: rgb(32, 33, 36);
	color: white;
	font-size: 20px;
	text-align: right;
	border: none;
	text-align: center;
	outline: none;
`;
const Button = styled.button`
	background-color: rgb(32, 33, 36);
	color: white;
	font-size: 15px;
	text-align: right;
	border: none;
	cursor: pointer;
`;
const IconWrapper = styled.div`
	cursor: pointer;
`;
const S = {
	SearchInput,
	Button,
	Form,
	IconWrapper,
};
