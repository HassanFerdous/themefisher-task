import LayoutBody from './components/layoutBody/layoutBody';
import SearchForm from './components/search/searchForm';
import Sidebar from './components/sidebar/sidebar';

function App() {
	return (
		<div className='App'>
			<SearchForm />
			<div className='layout container'>
				<Sidebar />
				<LayoutBody />
			</div>
		</div>
	);
}

export default App;
