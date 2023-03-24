import { useParams } from 'react-router-dom';
import { getDetail } from '../../../apis/api';
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

	/*
- 비디오 있는 경우, 페이지 진입 시 자동으로 비디오 플레이
- 제목, 포스터, 별점, 제작 연도, 장르 데이터 활용해서 UI 표기
*/

	console.log(data);

	return (
		<S.Body>
			<S.Video
				src={VIDEO_URL + data.videos.results[0].key}
				autoplay
			></S.Video>

			<Box>
				<Title>
					<H1>{data.title}</H1>
				</Title>
				<div>
					<div>⭐️{data.vote_average}</div>
					<div>제작 년도: {data.release_date}</div>
					{data.genres.map(el => (
						<div>{el.name}</div>
					))}
				</div>
				<div>
					<div>{data.overview}</div>
				</div>
			</Box>
		</S.Body>
	);
}
export default Detail;

const Body = styled.div`
	padding: 50px;
	height: 809px;
	/* background-color: green; */
	display: flex;
`;

const Video = styled.iframe`
	/* background-color: yellow; */

	width: 700px;
	height: 500px;
`;

const Box = styled.div`
	margin-left: 50px;
`;

const Title = styled.div`
	font-weight: 900;
`;

const H1 = styled.h1`
	font-weight: 900;
`;

const S = {
	Body,
	Video,
};
