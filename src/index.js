import React from 'react';
import ReactDOM from 'react-dom/client';
// import { QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';
import App from './App';

const queryClient = new QueryClient(); //react-query를 사용하기 위한 인터스턴 생성

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<QueryClientProvider client={queryClient}>
		<ReactQueryDevtools initialIsOpen={true} />
		<App />
	</QueryClientProvider>,
);
