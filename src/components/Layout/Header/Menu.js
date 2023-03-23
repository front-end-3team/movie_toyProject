import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Menu() {
	const navigate = useNavigate();
	return (
		<ButtonWrap>
			<Button1>now playing</Button1>
			<Button onClick={() => navigate('/upComing')}>upcoming</Button>
			<Button3>top-rated</Button3>
		</ButtonWrap>
	);
}
export default Menu;

const ButtonWrap = styled.div`
	display: flex;
`;
const Button = styled.button`
	background-color: black;
	padding: 17px 90px;
	border: none;
	font-size: 25px;
	color: white;
	cursor: pointer;
	:hover {
		background-color: rgb(62, 62, 62);
	}
`;
const Button1 = styled.button`
	background-color: black;
	padding: 17px 90px;
	border-radius: 20px 0 0 20px;
	border: none;
	font-size: 25px;
	color: white;
	cursor: pointer;
	:hover {
		background-color: rgb(62, 62, 62);
	}
`;
const Button3 = styled.button`
	background-color: black;
	padding: 17px 90px;
	border-radius: 0 20px 20px 0;
	border: none;
	font-size: 25px;
	color: white;
	cursor: pointer;
	:hover {
		background-color: rgb(62, 62, 62);
	}
`;
