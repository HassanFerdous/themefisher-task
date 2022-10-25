import React from 'react';
import Card from '../card/card';
import Filter from './filter';

function LayoutBody() {
	return (
		<div className='layout__body'>
			<Filter />
			<div className='card-grid'>
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
}

export default LayoutBody;
