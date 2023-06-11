import { RouterProvider } from 'react-router-dom';
import Router from './Routes/route';
import '../src/accept/css/reset.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import theme from './Styles/theme';

function App() {
	const queryClient = new QueryClient();
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider theme={theme}>
					<RouterProvider router={Router} />
				</ThemeProvider>
			</QueryClientProvider>
		</>
	);
}

export default App;
