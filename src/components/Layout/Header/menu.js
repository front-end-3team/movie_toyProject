import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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
	padding: 17px 20px;
	border: none;
	font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
	color: white;
	cursor: pointer;
	background-color: transparent;
`;

const S = {
	ButtonWrap,
	Button2,
};
