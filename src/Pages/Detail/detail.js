import { useParams } from 'react-router-dom';

import { getDetail } from '../../apis/api';
import { useQuery } from 'react-query';
import styled from 'styled-components';

function Detail() {
	const VIDEO_URL = 'https://www.youtube.com/embed/';
	const IMG_BASE_URL = 'https://image.tmdb.org/t/p/original/';

	const { movieId } = useParams();

	const { isLoading, isError, data, error } = useQuery(
		['detail'],
		() => getDetail({ movieId }),
		{
			refetchOnWindowFocus: false,
			retry: 0,
		},
	);

	if (isLoading) {
		return <span>Loading...</span>;
	}

	if (isError) {
		return <span>Error</span>;
	}
	//<Img src={IMG_BASE_URL + data.backdrop_path} />
	return (
		<S.Body>
			<S.BackImg src={IMG_BASE_URL + data.backdrop_path} />
			<S.PostImg src={IMG_BASE_URL + data.poster_path} />
			<S.Post>
				{data.videos.results.length == 0 ? (
					<S.Blank></S.Blank>
				) : (
					<S.Video
						src={
							VIDEO_URL +
							data.videos.results[0].key +
							'?autoplay=1&mute=1'
						}
					></S.Video>
				)}
			</S.Post>
			<Box>
				<Title>
					<H1>{data.title}</H1>
				</Title>
				<Title_1>
					<S.Avg>⭐️{data.vote_average.toFixed(1)}</S.Avg>
					<S.Date>제작년도: {data.release_date}</S.Date>
				</Title_1>
				<S.Genres>장르: </S.Genres>
				{data.genres.map(el => (
					<S.Genres>{el.name}</S.Genres>
				))}
				<Div>줄거리: </Div>
				<S.OverView>{data.overview}</S.OverView>
			</Box>
		</S.Body>
	);
}
export default Detail;
const Blank = styled.div`
	background-color: rgb(32, 33, 36);
	height: 101px;
`;
const Post = styled.div`
	padding: 50px 0;
	background-color: rgb(32, 33, 36);
	width: 100%;
	display: flex;
	justify-content: center;
`;
const Div = styled.div`
	font-size: 25px;
	margin-top: 30px;
`;
const OverView = styled.div`
	font-size: 25px;
	margin-top: 10px;
`;
const Genres = styled.span`
	padding: 0px 5px;
	font-size: 20px;
`;
const Title_1 = styled.div`
	display: flex;
	justify-content: space-between;
	padding-top: 20px;
	padding-bottom: 20px;
`;
const Avg = styled.div`
	font-size: 25px;
`;
const Date = styled.div`
	font-size: 22px;
`;
const PostImg = styled.img`
	width: 350px;
	height: 500px;
	position: absolute;
	left: 220px;
	top: 200px;
`;
const BackImg = styled.img`
	width: 100%;
	height: 700px;
	filter: brightness(50%);
	position: relative;
`;
const Body = styled.div`
	height: 809px;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: white;
	background-color: rgb(32, 33, 36);
`;
const Img = styled.img`
	width: 1600px;
	height: 800px;
`;
const Video = styled.iframe`
	width: 1600px;
	height: 800px;
`;

const Box = styled.div`
	padding-left: 50px;
	width: 1000px;
	position: absolute;
	left: 550px;
	top: 200px;
`;

const Title = styled.div`
	font-weight: 900;
	font-size: 50px;
`;

const H1 = styled.h1`
	font-weight: 900;
`;

const S = {
	Body,
	Video,
	Img,
	BackImg,
	PostImg,
	Avg,
	Date,
	Title_1,
	Genres,
	OverView,
	Div,
	Post,
	Blank,
};
