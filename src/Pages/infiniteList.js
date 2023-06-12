import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MuiSkeleton from '../skeleton/skeleton';
import { FlexBetweenCSS, FlexJustifyCSS } from '../Styles/common';

function InfiniteList({
	data,
	isLoading,
	isError,
	fetchNextPage,
	hasNextPage,
	error,
}) {
	const IMG_BASE_URL = 'https://image.tmdb.org/t/p/original/';

	const navigate = useNavigate();
	if (isError) {
		return <h2>{error.message}</h2>;
	}
	// const [upView, setUpView]

	const handleScroll = () => {
		const scrollHeight = document.documentElement.scrollHeight;
		const scrollTop = document.documentElement.scrollTop;
		const clientHeight = document.documentElement.clientHeight;
		if (scrollTop + clientHeight >= scrollHeight) {
			loadMore();
		}
	};

	const scrollUp = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	const loadMore = () => {
		if (hasNextPage) {
			fetchNextPage();
		}
	};

	const random = Math.floor(Math.random() * 20);

	const [scroll, setScroll] = useState(false);

	const handleScroll1 = () => {
		if (window.scrollY >= 200) {
			setScroll(true);
		} else {
			setScroll(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll1);
		return () => {
			window.removeEventListener('scroll', handleScroll1); //clean up
		};
	}, []);

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
							개봉일 :{data.pages[0].results[random].release_date}
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
									<S.ContentWrapper>
										<S.Contents_Header>
											<S.Title>{el.title}</S.Title>
											<div>⭐️ {el.vote_average}</div>
										</S.Contents_Header>
										<S.Contents_Body>
											{el.overview.substr(0, 50) + '...'}
										</S.Contents_Body>
									</S.ContentWrapper>
								</S.Box>
							));
						})}
					</S.List>
					<S.UpBtn onClick={scrollUp} scroll={scroll}>
						UP
					</S.UpBtn>
				</>
			)}
		</>
	);
}

export default InfiniteList;
const MainCont1 = styled.div`
	font-size: 40px;
	position: absolute;
	bottom: 20rem;
	left: 180px;
	text-shadow: black 1px 1px 10px;
	color: ${({ theme }) => theme.COLOR.common.white};
`;
const MainCont = styled.div`
	font-size: 80px;
	font-weight: 600;
	text-shadow: black 1px 1px 10px;
	color: ${({ theme }) => theme.COLOR.common.white};
	position: absolute;
	bottom: 24rem;
	left: 180px;
`;
const MainPost = styled.img`
	width: 100%;
	height: 80vh;
	position: relative;
	opacity: 0.7;
`;
const MainPostWrap = styled.div`
	display: flex;
	justify-content: center;
	position: relative;
`;
const List = styled.div`
	background-color: ${({ theme }) => theme.COLOR.common.black};
	${FlexJustifyCSS}
	flex-wrap: wrap;
`;
const Box = styled.div`
	background-color: #111111;
	width: 300px;
	margin: 30px;
	cursor: pointer;
	&:hover {
		transform: scale(1.1);
		transition: transform 0.9s;
	}
	transform: scale(1);
	transition: transform 0.9s;
`;

const Img = styled.img`
	height: 320px;
	width: 310px;
`;

const Contents_Header = styled.div`
	${FlexBetweenCSS}
	color: white;
	font-size: 20px;
`;
const Contents_Body = styled.div`
	padding-top: 20px;
	font-size: 18px;
	color: rgb(152, 152, 152);
`;
const ImgWrap = styled.div`
	${FlexJustifyCSS}
`;
const UpBtn = styled.button`
	font-weight: bold;
	font-size: 15px;
	padding: 20px 15px;
	background-color: #000;
	color: #fff;
	border: 2px solid rgb(210, 204, 193);
	border-radius: 50%;
	outline: none;
	cursor: pointer;
	position: sticky;
	left: 92%;
	bottom: 100px;
	display: none;
	display: ${({ scroll }) => (scroll ? 'block' : 'none')};
	:hover {
		background-color: rgb(102, 102, 102);
	}
`;
const Title = styled.div`
	max-width: 150px;
`;
const ContentWrapper = styled.div`
	padding: 10px;
`;
const S = {
	List,
	Box,
	Img,
	Contents_Header,
	Contents_Body,
	ImgWrap,
	UpBtn,
	MainPost,
	MainCont,
	MainPostWrap,
	MainCont1,
	ContentWrapper,
	Title,
};
