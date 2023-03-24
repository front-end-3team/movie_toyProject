import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Menu() {
	const navigate = useNavigate();
	console.log(navigate);
	return (
		<S.ButtonWrap>
			<S.Button1 onClick={() => navigate('/nowPlaying')}>
				now playing
			</S.Button1>
			<S.Button2 onClick={() => navigate('/upComing')}>
				upcoming
			</S.Button2>
			<S.Button3 onClick={() => navigate('/topRated')}>
				top-rated
			</S.Button3>
		</S.ButtonWrap>
	);
}
export default Menu;

const ButtonWrap = styled.div`
	display: flex;
`;
const Button2 = styled.button`
	background-color: black;
	padding: 17px 90px;
	border: none;
	font-size: 25px;
	color: white;
	cursor: pointer;
	:hover {
		background-color: rgb(62, 62, 62);
	}
	:focus {
		background-color: rgb(32, 32, 32);
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
	:focus {
		background-color: rgb(32, 32, 32);
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
	:focus {
		background-color: rgb(32, 32, 32);
	}
`;
const S = {
	ButtonWrap,
	Button2,
	Button1,
	Button3,
};
