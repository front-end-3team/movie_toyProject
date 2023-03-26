import { RouterProvider } from 'react-router-dom';
import Router from './Routes/route';
import '../src/accept/css/reset.css';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
	const queryClient = new QueryClient(); //캐시와 훅을 쓸수있게 정의
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={Router} />
			</QueryClientProvider>
		</>
	);
}

export default App;
