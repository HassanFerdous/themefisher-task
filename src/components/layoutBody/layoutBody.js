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

	let {
		data: cars,
		isLoading,
		isSuccess,
		isError,
	} = useGetCarsQuery({ params, search }, { refetchOnMountOrArgChange: true });

	//sidebar filter
	useEffect(() => {
		let filterQuery = tags.map((tag) => ({ [tag.filterType]: tag.value }));
		setParams(filterQuery);
	}, [tags]);

	//filtered content
	let content;
	if (isLoading) content = 'loading';
	if (isError) content = 'something went wrong!!';
	if (!isError && isSuccess) content = cars.map((car) => <Card key={car.id} car={car} />);
	if (!isLoading && !isError && cars?.length <= 0) content = 'not found!!';

	return (
		<div className='layout__body'>
			{tags.length >= 1 && <Filter tags={tags} />}

			<div className='card-grid'>{content}</div>
		</div>
	);
}

export default LayoutBody;
