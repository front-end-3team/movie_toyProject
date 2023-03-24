import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SearchBtn from './Button/SearchBtn';
function IndexHeader() {
	const navigate = useNavigate();
	return (
		<>
			<S.Header>
				<S.HeaderLogo onClick={() => navigate('')}>
					영화를 보CINEMA
				</S.HeaderLogo>
				<SearchBtn />
			</S.Header>
			<Outlet />
		</>
	);
}
export default IndexHeader;
const Header = styled.div`
	background-color: rgb(132, 132, 132);
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 50px;
`;

const HeaderLogo = styled.div`
	font-size: 40px;
	font-weight: bold;
	cursor: pointer;
	color: red;
`;
const S = {
	Header,
	HeaderLogo,
};
