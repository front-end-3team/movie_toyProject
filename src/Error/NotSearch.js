import styled from 'styled-components';

function NotSearch({ title }) {
	return (
		<S.Wrapper>
			<S.H1>' {title} ' 검색결과 없습니다❗️</S.H1>
		</S.Wrapper>
	);
}
export default NotSearch;

const Wrapper = styled.div`
	width: 100%;
	background-color: white;
	height: 100%;
`;

const H1 = styled.div`
	font-size: 80px;
	color: black;
	text-align: center;
	margin-top: 200px;
	height: 100%;
`;

const S = { Wrapper, H1 };
