import { createBrowserRouter } from 'react-router-dom';
import IndexHeader from '../components';
import HomePage from '../pages/components/List/Home/home';

const router = createBrowserRouter([
	{
		path: '/',
		element: <IndexHeader />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			// {
			// 	path: '/about',
			// 	element: <About />,
			// },
		],
	},
]);

export default router;
