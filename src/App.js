import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

function App() {
	const client = new QueryClient();
	return (
		<Layout>
			<QueryClientProvider client={client}>
				<ReactQueryDevtools />
			</QueryClientProvider>
		</Layout>
	);
}

export default App;
