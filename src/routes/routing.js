import { createBrowserRouter } from 'react-router-dom';
import IndexHeader from '../components';
import Detail from '../pages/components/detail/detail';
import HomePage from '../pages/components/List/Home/home';
import NowPlaying from '../pages/components/List/nowPlaying/nowPlaying';
import Search from '../pages/components/List/search/search';
import TopRated from '../pages/components/List/topRated/topRated';
import UpComing from '../pages/components/List/upComing/upComing';

const router = createBrowserRouter([
	{
		path: '/',
		element: <IndexHeader />,
		children: [
			{
				path: '',
				element: <HomePage />,
			},
			{
				path: '/topRated',
				element: <TopRated />,
			},
			{
				path: '/nowPlaying',
				element: <NowPlaying />,
			},
			{
				path: '/upComing',
				element: <UpComing />,
			},
			{
				path: '/search/:title',
				element: <Search />,
       },
       {
				path: '/detail/:movieId',
				element: <Detail />,
			 },
		],
	},
]);

export default router;
