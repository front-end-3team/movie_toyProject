import React, { useEffect } from 'react';
import styled from 'styled-components';

function InfiniteList({
	data,
	isLoading,
	isError,
	fetchNextPage,
	hasNextPage,
	error,
}) {
	const IMG_BASE_URL = 'https://image.tmdb.org/t/p/original/';

	if (isLoading) {
		return <h2>Loading...</h2>;
	}

	//isError true일때 error핸들링하고
	if (isError) {
		return <h2>{error.message}</h2>;
	}

	//scrolltop + clientHeigt 가 scrollHeight보다 높으면 스크롤 다 내린거임
	const handleScroll = () => {
		const scrollHeight = document.documentElement.scrollHeight;
		const scrollTop = document.documentElement.scrollTop;
		const clientHeight = document.documentElement.clientHeight;
		if (scrollTop + clientHeight >= scrollHeight) {
			loadMore();
		}
	};
	const scrollUp = () => {
		// top:0 >> 맨위로  behavior:smooth >> 부드럽게 이동할수 있게 설정하는 속성
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
	//넘어갈때마다 effect실행
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		console.log('다음장');
		return () => {
			window.removeEventListener('scroll', handleScroll);
			console.log('1');
		};
	});

	//다음장 열리는 함수
	const loadMore = () => {
		if (hasNextPage) {
			fetchNextPage();
		}
	};

	return (
		<>
			<List>
				{data.pages.map(db => {
					return db.results.map(el => (
						<Box>
							<ImgWrap>
								<Img src={IMG_BASE_URL + el.poster_path} />
							</ImgWrap>
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
			<UpBtn onClick={scrollUp}>UP!</UpBtn>
		</>
	);
}

export default InfiniteList;

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
	width: 250px;
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
const ImgWrap = styled.div`
	display: flex;
	justify-content: center;
`;
const UpBtn = styled.button`
	padding: 30px;
	border-radius: 50%;
	background-color: yellow;
	position: sticky;
	left: 90%;
	bottom: 100px;
	:hover {
		background-color: orange;
	}
`;
