import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

function Menu() {
	const [locationUrl, setLocationUrl] = useState('');
	const navigate = useNavigate();
	const list = [
		{
			Title: '홈',
			url: '/',
		},
		{
			Title: '현재상영작',
			url: '/nowPlaying',
		},
		{
			Title: '상영예정작',
			url: '/upComing',
		},
		{
			Title: '인기영화',
			url: '/topRated',
		},
	];

	const location = useLocation();

	useEffect(() => {
		setLocationUrl(location.pathname);
	}, [location]);
	return (
		<S.ButtonWrap>
			{list.map((el, idx) => (
				<S.Button2 onClick={() => navigate(el.url)} key={idx}>
					<span>{el.Title}</span>
					{locationUrl === el.url && <S.Dot />}
				</S.Button2>
			))}
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
	font-size: 18px;
	text-shadow: black 1px 1px 10px;
	color: ${({ theme }) => theme.COLOR.common.gray[100]};
	cursor: pointer;
	background-color: transparent;
	position: relative;
	&:hover {
		filter: brightness(80%);
		transition: filter 0.9s;
	}
`;
const Dot = styled.div`
	position: absolute;
	width: 5px;
	height: 5px;
	border-radius: 50%;
	bottom: 8px;
	left: 0;
	right: 0;
	margin: 0 auto;
	background-color: ${({ theme }) => theme.COLOR.main};
`;

const S = {
	ButtonWrap,
	Button2,
	Dot,
};
