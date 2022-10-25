import React from 'react';
import { useDispatch } from 'react-redux';
import closeIcon from '../../assets/close.svg';
import { clearFilter, removeFilter } from '../../features/filter/filterSlice';

function Filter({ tags }) {
	const dispatch = useDispatch();

	//remove filter on click
	const handleClick = (id) => {
		let input = document.getElementById(id);
		input.checked = false;
		dispatch(removeFilter({ id }));
	};

	//handle clear filters
	const handleClearFilters = () => {
		document.querySelectorAll('.sidebar .checkbox__input').forEach((input) => (input.checked = false));
		dispatch(clearFilter());
	};

	return (
		<div className='filter'>
			<ul className='tags'>
				{tags.map((tag) => (
					<li className='tag' key={tag.id} onClick={() => handleClick(tag.id)}>
						{tag.value}
						<img className='tag__closIcon' src={closeIcon} alt='' />
					</li>
				))}
			</ul>
			<button className='filter__resetBtn' onClick={handleClearFilters}>
				Reset
			</button>
		</div>
	);
}

export default Filter;
