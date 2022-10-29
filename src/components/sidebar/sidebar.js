import React from 'react';
import { useDispatch } from 'react-redux';
import { addFilter, removeFilter } from '../../features/filter/filterSlice';
import { useState } from 'react';
import Panel from '../panel/panel';
import filterIcon from '../../assets/filter.png';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useHistory from '../../hooks/useHistory';
import { useGetCarsQuery } from '../../features/api/apiSlice';

function Sidebar({ query }) {
	const dispatch = useDispatch();
	const [showFilter, setShowFilter] = useState(false);
	const { appendParam, removeParam } = useHistory();

	let { data } = useGetCarsQuery();

	//options from cars data
	let optionsData = data?.reduce(
		(acc, curr) => {
			return {
				color: [...new Set([...acc.color, ...curr.color])],
				city: [...new Set([...acc.city, ...curr.city])],
				cars: [...new Set([...acc.cars, ...curr.cars])],
			};
		},
		{ color: [], city: [], cars: [] }
	);

	//generate options
	function generateOptions(options) {
		if (options) {
			let modifiedOptions = { color: [], city: [], cars: [] };
			Object.entries(options).forEach(([type, values]) => {
				modifiedOptions[type] = values.map((value) => ({ filterType: type, value, id: uuidv4() }));
			});

			return modifiedOptions;
		}
	}

	let options = generateOptions(optionsData);
	let { color, city, cars } = options || {};

	//toggle filter on change
	const handleChange = (e, filter) => {
		let self = e.currentTarget;
		if (self.checked) {
			dispatch(addFilter({ ...filter, value: filter?.value.toLowerCase() }));

			//append query param
			appendParam(filter?.filterType, filter?.value);
			return;
		}

		//remove query param
		removeParam(filter?.filterType, filter?.value);
		dispatch(removeFilter({ id: filter?.id }));
	};

	// toggle filter
	const toggleFilters = () => {
		setShowFilter(!showFilter);
	};

	//show selected filter from query params
	useEffect(() => {
		if (options) {
			query.forEach((param) => {
				let { filterType, value } = param;
				if (filterType === 'name') return dispatch(addFilter({ ...param, id: uuidv4() }));
				let selectedOption = findSelectedOption(filterType, value);
				if (!selectedOption) return;
				let selectedElement = document.getElementById(selectedOption.id);
				selectedElement.checked = true;
				dispatch(addFilter({ ...selectedOption, value: selectedOption?.value.toLowerCase(), filterType }));
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query, dispatch, options]);

	//find selected option
	function findSelectedOption(filterType, value) {
		if (!options) return;
		let selectedOption = options[filterType].find((option) => option.value.toLowerCase() === value.toLowerCase());
		return selectedOption;
	}

	return (
		<div className='sidebar'>
			<button className='sidebar__toggleBtn' onClick={toggleFilters}>
				Filter
				<img src={filterIcon} alt='' />
			</button>
			<div className={`sidebar__panels ${showFilter ? 'show' : ''}`}>
				<Panel head='colors' open={true}>
					{color?.length ? (
						<ul>
							{color?.map(({ value, id, filterType }) => {
								return (
									<li className='checkbox' key={id}>
										<input
											className='checkbox__input'
											type='checkbox'
											id={id}
											onChange={(e) => handleChange(e, { filterType, value, id })}
										/>
										<label className='checkbox__label' htmlFor={id}>
											{value}
										</label>
									</li>
								);
							})}
						</ul>
					) : null}
				</Panel>
				<Panel head='Cities'>
					{city?.length ? (
						<ul>
							{city?.map(({ value, id, filterType }) => {
								return (
									<li className='checkbox' key={id}>
										<input
											className='checkbox__input'
											type='checkbox'
											id={id}
											onChange={(e) => handleChange(e, { filterType, value, id })}
										/>
										<label className='checkbox__label' htmlFor={id}>
											{value}
										</label>
									</li>
								);
							})}
						</ul>
					) : null}
				</Panel>
				<Panel head='cars'>
					{cars?.length ? (
						<ul>
							{cars?.map(({ value, id, filterType }) => {
								return (
									<li className='checkbox' key={id}>
										<input
											className='checkbox__input'
											type='checkbox'
											id={id}
											onChange={(e) => handleChange(e, { filterType, value, id })}
										/>
										<label className='checkbox__label' htmlFor={id}>
											{value}
										</label>
									</li>
								);
							})}
						</ul>
					) : null}
				</Panel>
			</div>
		</div>
	);
}

export default Sidebar;
