import styled from 'styled-components';
import { Outlet, useNavigate } from 'react-router-dom';
import '../../../accept/css/font.css';
import { FlexAlignCSS, FlexBetweenCSS } from '../../../Styles/common';
import { useEffect } from 'react';
import { useState } from 'react';
import Menu from './components/menu';
import SearchBtn from './components/SearchBtn';

function IndexHeader() {
	const navigate = useNavigate();
	const [scroll, setScroll] = useState(false);

	const handleScroll = () => {
		if (window.scrollY >= 50) {
			setScroll(true);
		} else {
			setScroll(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll); //clean up
		};
	}, []);
	return (
		<>
			<S.Wrapper scroll={scroll}>
				<S.Header>
					<S.HeaderLeft>
						<S.HeaderLogo
							className="headerFont"
							onClick={() => navigate('')}
						>
							영화를 보CINEMA
						</S.HeaderLogo>
						<Menu />
					</S.HeaderLeft>
					<SearchBtn />
				</S.Header>
			</S.Wrapper>
			<Outlet />
		</>
	);
}
export default IndexHeader;
const Wrapper = styled.div`
	width: 100%;
	position: fixed;
	top: 0;
	z-index: 9999;
	background-color: ${({ scroll }) =>
		scroll ? 'rgba(0, 0, 0, 1)' : 'transparent'};
`;
const Header = styled.div`
	${FlexBetweenCSS}
	margin: 0 auto;
	width: 80%;
	padding-top: 0.5rem;
`;

const HeaderLogo = styled.div`
	font-size: 40px;
	cursor: pointer;
	color: ${({ theme }) => theme.COLOR.main};
	margin-right: 2rem;
	-webkit-text-stroke: 1px white;
`;
const HeaderLeft = styled.div`
	${FlexAlignCSS};
`;

const S = {
	Header,
	HeaderLogo,
	HeaderLeft,
	Wrapper,
};
