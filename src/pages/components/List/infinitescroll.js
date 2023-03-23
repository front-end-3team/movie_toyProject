import React from 'react';
import { useInfiniteQuery } from 'react-query';
import styled from 'styled-components';
import { getUpComing } from '../../../../apis/api';

function Infinitescroll() {
	const { isLoading, isError, error, data, hasNextPage, fetchNextPage } =
		useInfiniteQuery(['colors'], getUpComing, {
			getNextPageParam: currentPage => {
				const nextPage = currentPage.page + 1;
				return nextPage > currentPage.total_pages ? null : nextPage;
			},
		});
	console.log(data);

	//isLoading true일때 스켈레톤 보여주는걸로 변경하고
	if (isLoading) {
		return <h2>Loading...</h2>;
	}

	//isError true일때 error핸들링하고
	if (isError) {
		return <h2>{error.message}</h2>;
	}

	const loadMore = () => {
		if (hasNextPage) {
			fetchNextPage();
		}
	};
	//nextpage하면 pages에 객체 추가한다.
	/*
		title: 제목
		vote_average: 평점
		overview: 영화 설명 이건 조금만 보여줘야함
		poster_path: 포스터로 예상

	*/
	return (
		<>
			<List>
				{data.pages.map(db => {
					return db.results.map(el => (
						<Box>
							<Img />
							<Contents>
								<Contents_Header>
									<div>{el.title}</div>
									<div>{el.vote_average}</div>
								</Contents_Header>
								<Contents_Body>{el.overview}</Contents_Body>
							</Contents>
						</Box>
					));
				})}
			</List>
			<button onClick={loadMore}>click!</button>
		</>
	);
};


export default Infinitescroll;

const List = styled.div`
	background-color: rgb(132, 132, 132);
	border-top: 2px solid gray;
	display: flex;
	flex-wrap: wrap;
`;
const Box = styled.div`
	color: white;
	background-color: rgb(52, 52, 52);
	width: 350px;
	border-radius: 15px;
	margin: 40px;
`;
const Img = styled.img`
	height: 300px;
`;
const Contents = styled.div`
	padding: 8px 10px;
	border-top: 2px solid beige;
`;
const Contents_Header = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 20px;
`;
const Contents_Body = styled.div`
	padding: 20px;
	font-size: 18px;
`;

}

