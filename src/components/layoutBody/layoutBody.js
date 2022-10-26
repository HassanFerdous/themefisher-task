import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useGetCarsQuery } from '../../features/api/apiSlice';
import Card from '../card/card';
import Filter from './filter';

function LayoutBody() {
	const { tags } = useSelector((state) => state.filter);
	const [params, setParams] = useState([]);

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
		setParams(paramsArr);
	}, []);

	let { data: cars, isLoading, isSuccess, isError } = useGetCarsQuery(params);

	return (
		<div className='layout__body'>
			{tags.length >= 1 && <Filter tags={tags} />}

			<div className='card-grid'>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
}

export default LayoutBody;
