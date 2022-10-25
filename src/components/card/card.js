import React from 'react';

function Card() {
	return (
		<div className='card'>
			<picture className='card__img'>
				<img src='https://source.unsplash.com/featured/300x201' alt='' />
			</picture>
			<div className='card__caption'>
				<h5 className='card__title'>Car</h5>
			</div>
		</div>
	);
}

export default Card;
