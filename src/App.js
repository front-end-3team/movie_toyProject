import './accept/css/reset.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routing';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
	const queryClient = new QueryClient(); //캐시와 훅을 쓸수있게 정의
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</>
	);
}

export default App;
