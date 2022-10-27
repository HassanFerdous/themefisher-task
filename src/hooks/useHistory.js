const useHistory = () => {
	const urlSearchParams = new URLSearchParams(window.location.search);

	const appendParam = (key, value) => {
		urlSearchParams.append(key, value);
		updateHistory(urlSearchParams.toString());
	};

	const removeParam = (key, value) => {
		let regex = new RegExp(`&?${key}=${value}`);
		let newUrl = urlSearchParams.toString().replace(regex, '');
		updateHistory(newUrl);
	};

	function updateHistory(url) {
		window.history.pushState(null, null, '?' + url);
	}

	return [appendParam, removeParam];
};

export default useHistory;
