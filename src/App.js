import { useEffect, useState } from 'react';
import LayoutBody from './components/layoutBody/layoutBody';
import SearchForm from './components/search/searchForm';
import Sidebar from './components/sidebar/sidebar';

function App() {
	let [query, setQuery] = useState([]);

	//create params array from uri
	useEffect(() => {
		const urlSearchParams = new URLSearchParams(window.location.search);
		let queryString = urlSearchParams.toString();
		if (!queryString.trim().length) return;
		let paramsArr = queryString.split('&').map((str) => {
			let param = str.split('=');
			let key = param[0];
			let value = param[1];

			return { filterType: key, value: decodeURIComponent(value) };
		});
		setQuery(paramsArr);
	}, []);

	return (
		<div className='App'>
			<SearchForm />
			<div className='layout container'>
				<Sidebar query={query} />
				<LayoutBody />
			</div>
		</div>
	);
}

export default App;
