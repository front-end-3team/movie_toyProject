import styled from 'styled-components';

function NotSearch({ title }) {
	return <H1>' {title} ' 검색결과 없습니다❗️</H1>;
}
export default NotSearch;

const H1 = styled.div`
	font-size: 80px;
	color: black;
	text-align: center;
	margin-top: 200px;
	background-color: white;
`;
