import React from 'react';
import { useInfiniteQuery } from 'react-query';
import { getUpComing } from '../../../../apis/api';
import CommonList from '../commonList';

const UpComing = () => {
	const { isLoading, isError, error, data, hasNextPage, fetchNextPage } =
		useInfiniteQuery(['upComing'], getUpComing, {
			getNextPageParam: currentPage => {
				const nextPage = currentPage.page + 1;
				return nextPage > currentPage.total_pages ? null : nextPage;
			},
		});

	return (
		<>
			<CommonList
				data={data}
				isLoading={isLoading}
				isError={isError}
				fetchNextPage={fetchNextPage}
				hasNextPage={hasNextPage}
				error={error}
			/>
		</>
	);
};

export default UpComing;
