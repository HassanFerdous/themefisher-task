import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useGetCarsQuery } from '../../features/api/apiSlice';
import Card from '../card/card';
import Filter from './filter';

function LayoutBody() {
	const { tags, search } = useSelector((state) => state.filter);
	const [params, setParams] = useState([]);
	let [query, setQuery] = useState([]);
	let {
		data: cars,
		isLoading,
		isSuccess,
		isError,
	} = useGetCarsQuery({ params, search }, { refetchOnMountOrArgChange: true });

	//sidebar filter
	useEffect(() => {
		let filterQuery = tags.map((tag) => ({ [tag.filterType]: tag.value }));
		if (!filterQuery.length) {
			setParams(query);
			return;
		}
		setParams(filterQuery);
	}, [tags, query]);

	//create params array from uri
	useEffect(() => {
		const urlSearchParams = new URLSearchParams(window.location.search);
		let queryString = urlSearchParams.toString();
		if (!queryString.trim().length) return;
		let paramsArr = queryString.split('&').map((str) => {
			let param = str.split('=');
			let key = param[0];
			let value = param[1];

			return { [key]: value };
		});
		setQuery(paramsArr);
	}, []);

	//filtered content
	let content;
	if (isLoading) content = 'loading';
	if (isError) content = 'something went wrong!!';
	if (!isError && isSuccess) content = cars.map((car) => <Card key={car.id} car={car} />);

	return (
		<div className='layout__body'>
			{tags.length >= 1 && <Filter tags={tags} />}

			<div className='card-grid'>{content}</div>
		</div>
	);
}

export default LayoutBody;
