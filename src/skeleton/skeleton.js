import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';

const MuiSkeleton = () => {
	return (
		<Wrapper>
			<Stack spacing={1}>
				<Skeleton
					animation="wave"
					variant="rounded"
					width={320}
					height={450}
				/>
			</Stack>
		</Wrapper>
	);
};
export default MuiSkeleton;

const Wrapper = styled.div`
	display: flex;
	align-items: flex-start;
	margin-right: 5px;
	margin-bottom: 20px;
`;
