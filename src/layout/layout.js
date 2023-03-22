import { styled } from '@tanstack/react-query-devtools/build/lib/utils';

function Layout() {
	return (
		<>
			<Head>
				<h1>영화를 보CINEMA</h1>
			</Head>
		</>
	);
}
export default Layout;

const Head = styled.div`
	display: flex;
	background-color: yellow;
`;
