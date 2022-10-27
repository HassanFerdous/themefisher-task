const useHistory = () => {
	const appendParam = (key, value) => {
		const urlSearchParams = new URLSearchParams(window.location.search);
		urlSearchParams.append(key, value);
		updateHistory(urlSearchParams.toString());
	};

	const removeParam = (key, value) => {
		const urlSearchParams = new URLSearchParams(window.location.search);
		let regex = new RegExp(`&?${key}=${encodeURIComponent(value)}`, 'i');
		let newUrl = urlSearchParams.toString().replace(regex, '');
		updateHistory(newUrl);
	};

	function updateHistory(url) {
		window.history.pushState(null, null, '?' + url);
	}

	return { appendParam, removeParam, updateHistory };
};

export default useHistory;
