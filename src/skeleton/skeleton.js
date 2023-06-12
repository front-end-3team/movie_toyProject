import Skeleton from '@mui/material/Skeleton';
import styled from 'styled-components';

const MuiSkeleton = () => {
	const length = new Array(20).fill(0);
	return (
		<>
			<MainPostWrap>
				<Skeleton
					animation="wave"
					variant="rounded"
					width={1600}
					height={550}
				/>
			</MainPostWrap>
			<List>
				{length.map((el, idx) => (
					<Wrap key={idx}>
						<Skeleton
							animation="wave"
							variant="rounded"
							width={350}
							height={550}
						/>
					</Wrap>
				))}
			</List>
		</>
	);
};
export default MuiSkeleton;
const MainPostWrap = styled.div`
	background-color: rgb(132, 132, 132);
	padding-top: 30px;
	display: flex;
	justify-content: center;
	position: relative;
`;
const List = styled.div`
	background-color: rgb(132, 132, 132);
	border-top: 2px solid gray;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	padding-top: 10px;
`;
const Wrap = styled.div`
	margin: 30px;
`;
