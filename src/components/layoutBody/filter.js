import React from 'react';
import { useDispatch } from 'react-redux';
import closeIcon from '../../assets/close.svg';
import { clearFilter, clearSearch, removeFilter } from '../../features/filter/filterSlice';
import useHistory from '../../hooks/useHistory';

function Filter({ tags }) {
	const dispatch = useDispatch();
	const { removeParam, updateHistory } = useHistory();
	//remove filter on click
	const handleClick = (tag) => {
		let { id, value, filterType } = tag;
		let input = document.getElementById(id);
		if (input) input.checked = false;
		removeParam(filterType, value);
		dispatch(removeFilter({ id }));
	};

	//handle clear filters
	const handleClearFilters = () => {
		document.querySelectorAll('.sidebar .checkbox__input').forEach((input) => (input.checked = false));
		document.querySelector('.search__input').value = '';
		dispatch(clearFilter());
		dispatch(clearSearch());
		updateHistory('');
	};

	return (
		<div className='filter'>
			<ul className='tags'>
				{tags.map((tag) => {
					return (
						<li className='tag' key={tag.id} onClick={() => handleClick(tag)}>
							{tag.value}
							<img className='tag__closIcon' src={closeIcon} alt='' />
						</li>
					);
				})}
			</ul>
			<button className='filter__resetBtn' onClick={handleClearFilters}>
				Reset
			</button>
		</div>
	);
}

export default Filter;
