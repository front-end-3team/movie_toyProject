import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getDetail } from '../../../apis/api';
import { useQuery } from 'react-query';

function Detail() {
	const { movieId } = useParams();

	const { isLoading, isError, error, data, hasNextPage, fetchNextPage } =
		useQuery(['detail'], getDetail, {});
	console.log(data);

	useEffect(() => {
		getDetail({ movieId });
	}, []);

	return <>{/*   */}</>;
}
export default Detail;
