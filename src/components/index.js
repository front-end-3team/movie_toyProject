import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SearchBtn from './Button/SearchBtn';
import '../accept/css/font.css';
import Menu from './Layout/Header/menu';
import { FlexAlignCSS } from '../Styles/common';

function IndexHeader() {
	const navigate = useNavigate();
	return (
		<>
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
			<Outlet />
		</>
	);
}
export default IndexHeader;
const Header = styled.div`
	background-color: transparent;
	${FlexAlignCSS}
	justify-content: space-between;
	padding: 0 5rem;
	position: sticky;
	top: 0;
	z-index: 9999;
`;

const HeaderLogo = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.large};
	cursor: pointer;
	color: ${({ theme }) => theme.COLOR.main};
	margin-right: 2rem;
`;
const HeaderLeft = styled.div`
	${FlexAlignCSS}
`;
const S = {
	Header,
	HeaderLogo,
	HeaderLeft,
};
