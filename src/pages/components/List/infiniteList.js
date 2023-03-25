import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MuiSkeleton from '../../../skeleton/skeleton';

function InfiniteList({
	data,
	isLoading,
	isError,
	fetchNextPage,
	hasNextPage,
	error,
}) {
	const IMG_BASE_URL = 'https://image.tmdb.org/t/p/original/';

	// if (isLoading) {
	// 	return <h2>Loading...</h2>;
	// }
	const navigate = useNavigate();
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
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	//다음장 열리는 함수
	const loadMore = () => {
		if (hasNextPage) {
			fetchNextPage();
		}
	};

	const random = Math.floor(Math.random() * 20);
	console.log(data);
	return (
		<>
			{isLoading ? (
				<MuiSkeleton />
			) : (
				<>
					<S.MainPostWrap>
						<S.MainPost
							src={
								IMG_BASE_URL +
								data.pages[0].results[random].backdrop_path
							}
						></S.MainPost>
						<S.MainCont>
							{data.pages[0].results[random].original_title}
						</S.MainCont>
						<S.MainCont1>
							개봉일 :{' '}
							{data.pages[0].results[random].release_date}
						</S.MainCont1>
					</S.MainPostWrap>
					<S.List>
						{data.pages.map(db => {
							return db.results.map(el => (
								<S.Box
									onClick={() => navigate(`/detail/${el.id}`)}
								>
									<S.ImgWrap>
										<S.Img
											src={IMG_BASE_URL + el.poster_path}
										/>
									</S.ImgWrap>
									<S.Contents>
										<S.Contents_Header>
											<div>{el.title}</div>
											<div>{el.vote_average}</div>
										</S.Contents_Header>
										<S.Contents_Body>
											{el.overview.substr(0, 100) + '...'}
										</S.Contents_Body>
									</S.Contents>
								</S.Box>
							));
						})}
					</S.List>
					<UpBtn onClick={scrollUp}>UP!</UpBtn>
				</>
			)}
		</>
	);
}

export default InfiniteList;
const MainCont1 = styled.div`
	font-size: 40px;
	color: white;
	position: absolute;
	bottom: 40px;
	left: 80px;
`;
const MainCont = styled.div`
	font-size: 100px;
	font-weight: bold;
	color: white;
	position: absolute;
	bottom: 80px;
	left: 80px;
`;
const MainPost = styled.img`
	width: 92%;
	height: 550px;
	margin: 30px 0;
	background-color: rgb(132, 132, 132);
	position: relative;
`;
const MainPostWrap = styled.div`
	background-color: rgb(32, 33, 36);
	display: flex;
	justify-content: center;
	position: relative;
`;
const List = styled.div`
	background-color: rgb(32, 33, 36);

	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;
const Box = styled.div`
	color: white;
	background-color: rgb(32, 33, 36);
	width: 300px;
	border-radius: 15px;
	margin: 30px;
	cursor: pointer;
`;
const Img = styled.img`
	height: 320px;
	width: 300px;
`;
const Contents = styled.div`
	padding: 10px 0;
`;
const Contents_Header = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 20px;
`;
const Contents_Body = styled.div`
	padding: 20px;
	font-size: 18px;
	color: rgb(152, 152, 152);
`;
const ImgWrap = styled.div`
	display: flex;
	justify-content: center;
`;
const UpBtn = styled.button`
	padding: 22px;
	border-radius: 50%;
	background-color: rgb(152, 152, 152);
	position: sticky;
	left: 92%;
	bottom: 100px;
	box-shadow: -5px -5px rgb(102, 102, 102) inset;
	border: none;
	:hover {
		background-color: rgb(102, 102, 102);
	}
`;
const S = {
	List,
	Box,
	Img,
	Contents,
	Contents_Header,
	Contents_Body,
	ImgWrap,
	UpBtn,
	MainPost,
	MainCont,
	MainPostWrap,
	MainCont1,
};
