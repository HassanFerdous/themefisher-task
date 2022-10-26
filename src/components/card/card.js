import React from 'react';
import carImg from '../../assets/car.jpg';

function Card({ car }) {
	let { name, color, cars, city } = car;
	return (
		<div className='card'>
			<picture className='card__img'>
				<img src={carImg} alt='' />
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
				<span className='card__color'>
					<strong>City:</strong>
					{city.join(',')}
				</span>
			</div>
		</div>
	);
}

export default Card;
