import React from 'react';

function Card({ car }) {
	let { name, color, cars } = car;
	return (
		<div className='card'>
			<picture className='card__img'>
				<img src='https://source.unsplash.com/featured/300x201' alt='' />
			</picture>
			<div className='card__caption'>
				<div className='card__row'>
					<h5 className='card__title'>{name}</h5>
					<span className='card__color'>
						<strong>Colors:</strong>
						{color.join(',')}
					</span>
				</div>
				<p className='card__cars'>
					<strong>Cars:</strong>
					{cars.join(',')}
				</p>
			</div>
		</div>
	);
}

export default Card;
