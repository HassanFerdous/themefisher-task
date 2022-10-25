import React from 'react';
import searchIcon from '../../assets/search.svg';

function SearchForm() {
	return (
		<div className='search'>
			<div className='container'>
				<form className='form search__form' action='#'>
					<fieldset className='form__group'>
						<input placeholder='search...' id='search' className='search__input' type='text' />
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
