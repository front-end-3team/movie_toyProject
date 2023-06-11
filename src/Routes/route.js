import { createBrowserRouter } from 'react-router-dom';
import IndexHeader from '../components/index';
import HomePage from '../Pages/List/Home/home';
import TopRate from '../Pages/List/TopRated/topRated';
import NowPlaying from '../Pages/List/NowPlaying/nowPlaying';
import UpComing from '../Pages/List/UpComing/upComing';
import Search from '../Pages/List/Search/search';
import Detail from '../Pages/Detail/detail';
const Router = createBrowserRouter([
	{
		path: '/',
		element: <IndexHeader />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/topRated',
				element: <TopRate />,
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

export default Router;
