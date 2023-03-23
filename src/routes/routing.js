import { createBrowserRouter } from 'react-router-dom';
import IndexHeader from '../components';
import HomePage from '../pages/components/List/Home/home';
import NowPlaying from '../pages/components/List/nowPlaying/nowPlaying';
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
				path: '/upComing',
				element: <UpComing />,
			},
			{
				path: '/topRated',
				element: <TopRated />,
			},
			{
				path: '/nowPlaying',
				element: <NowPlaying />,
			},
		],
	},
]);

export default router;
