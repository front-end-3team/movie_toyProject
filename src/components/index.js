import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SearchBtn from './Button/SearchBtn';
import '../accept/css/font.css';
import Menu from './Layout/Header/Menu';

function IndexHeader() {
	const navigate = useNavigate();
	return (
		<>
			<S.Header>
				<S.HeaderLogo
					className="headerFont"
					onClick={() => navigate('')}
				>
					영화를 보CINEMA
				</S.HeaderLogo>
				<Menu />
				<SearchBtn />
			</S.Header>
			<Outlet />
		</>
	);
}
export default IndexHeader;
const Header = styled.div`
	background-color: rgb(32, 33, 36);
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 50px;
	box-shadow: 1px -11px 9px -4px inset rgba(16, 10, 10, 0.75);
`;

const HeaderLogo = styled.div`
	font-size: 40px;
	font-weight: bold;
	cursor: pointer;
	color: rgb(147, 31, 32);
`;
const S = {
	Header,
	HeaderLogo,
};
