import React from 'react';
import closeIcon from '../../assets/close.svg';

function Filter() {
	return (
		<div className='filter'>
			<ul className='tags'>
				<li className='tag'>
					teal
					<img className='tag__closIcon' src={closeIcon} alt='' />
				</li>
				<li className='tag'>
					teal
					<img className='tag__closIcon' src={closeIcon} alt='' />
				</li>
				<li className='tag'>
					teal
					<img className='tag__closIcon' src={closeIcon} alt='' />
				</li>
			</ul>
			<button className='filter__resetBtn'>Reset</button>
		</div>
	);
}

export default Filter;
