import React from 'react';
import { useDispatch } from 'react-redux';
import searchIcon from '../../assets/search.svg';
import { searched } from '../../features/filter/filterSlice';
import { debounce } from '../../utils';

function SearchForm() {
	const dispatch = useDispatch();

	//send search string into store
	const handleInputChange = (e) => {
		let value = e.target.value.toLowerCase();
		dispatch(searched(value));
	};

	return (
		<div className='search'>
			<div className='container'>
				<form className='form search__form' action='#'>
					<fieldset className='form__group'>
						<input
							placeholder='search...'
							id='search'
							className='search__input'
							type='text'
							onChange={debounce(handleInputChange, 300)}
						/>
						<label className='search__label' htmlFor='search'>
							<img src={searchIcon} alt='search' />
						</label>
					</fieldset>
				</form>
			</div>
		</div>
	);
}

export default SearchForm;
