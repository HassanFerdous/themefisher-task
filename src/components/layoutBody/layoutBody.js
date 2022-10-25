import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../card/card';
import Filter from './filter';

function LayoutBody() {
	const { tags } = useSelector((state) => state.filter);

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
