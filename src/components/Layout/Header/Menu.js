import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Menu() {
	const navigate = useNavigate();
	return (
		<S.ButtonWrap>
			<S.Button2 onClick={() => navigate('/')}>홈</S.Button2>
			<S.Button2 onClick={() => navigate('/nowPlaying')}>
				현재상영작
			</S.Button2>
			<S.Button2 onClick={() => navigate('/upComing')}>
				상영예정작
			</S.Button2>
			<S.Button2 onClick={() => navigate('/topRated')}>
				인기영화
			</S.Button2>
		</S.ButtonWrap>
	);
}
export default Menu;

const ButtonWrap = styled.div`
	display: flex;
`;
const Button2 = styled.button`
	padding: 17px 50px;
	border: none;
	font-size: 20px;
	color: white;
	cursor: pointer;
	background-color: rgb(32, 33, 36);
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
};
