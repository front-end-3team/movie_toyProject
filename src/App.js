import IndexHeader from './components/Layout';
import './accept/css/reset.css';
import UpComing from './pages/components/List/upComing/upComing';
function App() {
	return (
		<>
			<IndexHeader />
			{/* <HomePage /> */}
			<UpComing />
		</>
	);
}

export default App;
