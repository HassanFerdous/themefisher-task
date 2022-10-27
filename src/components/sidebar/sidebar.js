import React from 'react';
import { useDispatch } from 'react-redux';
import { addFilter, removeFilter } from '../../features/filter/filterSlice';
import { useState } from 'react';
import Panel from '../panel/panel';
import filterIcon from '../../assets/filter.png';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const options = {
	color: [
		{
			value: 'Teal',
			id: 'ca97a8e0-57de-4773-8d33-e4172951d98a',
		},
		{
			value: 'Blue',
			id: 'f9f18d04-6191-4f5c-b854-e649a97df4f2',
		},
		{
			value: 'Pink',
			id: '8a0eb1a0-ba7b-49ac-9148-4a73e1c2fb14',
		},
		{
			value: 'Goldenrod',
			id: 'a815d667-87c2-484c-b0bb-7ad8c9dea82c',
		},
		{
			value: 'Maroon',
			id: '9a6ebb6e-57f2-4fca-8d35-52edcdadda10',
		},
		{
			value: 'Red',
			id: '4068c43b-7d1b-42be-acb0-107bd46c02df',
		},
		{
			value: 'Fuscia',
			id: '5ff20e0e-3c82-41e4-a206-4cb0b9769c54',
		},
		{
			value: 'Yellow',
			id: '033d13cc-3238-477c-84e5-7d91f74fe549',
		},
		{
			value: 'Orange',
			id: 'bee95762-3a9d-4981-a8a2-d75c840f3bd8',
		},
		{
			value: 'Khaki',
			id: 'dc4184ae-ecdb-445f-bcf6-37119e2bb3c6',
		},
		{
			value: 'Puce',
			id: 'd5f5358d-fe33-4d57-9730-108f841d058b',
		},
		{
			value: 'Turquoise',
			id: 'c7309e71-3dcf-42b4-8abf-76d347423c0a',
		},
		{
			value: 'Violet',
			id: '03e9d59c-8720-49c8-931d-647cfcb739be',
		},
	],
	city: [
		{
			value: 'Malata',
			id: '830d6479-d44c-4324-8d0e-0a27ee063bcc',
		},
		{
			value: 'Acas',
			id: '0d4ef0fb-9a09-43dc-a670-40b538d8f548',
		},
		{
			value: 'Manolás',
			id: '49bdeff1-1384-4169-8ed9-5609459c0e30',
		},
		{
			value: 'Pirapora',
			id: 'd06b8911-8c13-4c53-bb65-bba2265958e1',
		},
		{
			value: 'Umanggudang',
			id: '14c9a5f0-1102-4de1-80c1-87b80db3e143',
		},
		{
			value: 'Junliangcheng',
			id: '6e51c99c-bd7c-4d09-b135-20162d84a8e4',
		},
		{
			value: 'Mzuzu',
			id: 'bb19c7e1-5eec-4306-af0b-e6ad4459b1b6',
		},
		{
			value: 'Mingguang',
			id: 'b3deec60-e92e-43ec-b3d5-0fba2487298f',
		},
		{
			value: 'Xiaozhen',
			id: '4b4f4687-b82d-4576-ab4e-7610c662e39a',
		},
		{
			value: 'Xinghe',
			id: 'c6f437a2-a108-4c8e-8129-153a3a96aef4',
		},
		{
			value: 'Osiek',
			id: 'c341b924-1c08-476b-aab8-58e678d68815',
		},
		{
			value: 'Repušnica',
			id: 'fa5e462b-4993-46cc-903a-524dd7442dcc',
		},
		{
			value: 'Hannover',
			id: '5ac67328-58ca-4e20-8dba-90c00d442590',
		},
		{
			value: 'Pepe',
			id: 'e279abc4-4477-4990-80fc-35b7a0b3139f',
		},
		{
			value: 'Hovorany',
			id: '02add91b-b71f-46c8-9732-914157458159',
		},
		{
			value: 'Hiseti',
			id: 'bdbef522-ddd0-45e4-8a8e-c9d55d7187b1',
		},
		{
			value: 'Guadalupe',
			id: '4ee71294-ab96-4420-902a-e2926bff3b74',
		},
		{
			value: 'Tambulig',
			id: '3a4f2877-1965-47f5-8529-45a2ba66a72e',
		},
		{
			value: 'Komiža',
			id: '0f9eaf40-4976-435b-afd2-310fda25c706',
		},
	],
	cars: [
		{
			value: 'Volkswagen',
			id: 'bcb16e77-19ae-4d4d-adef-fc1136b9a5b9',
		},
		{
			value: 'Dodge',
			id: '616cbbc8-3c7f-4c38-b136-efc524a21575',
		},
		{
			value: 'BMW',
			id: 'bc8d1b02-c0a9-429b-aa98-7964bb82aef0',
		},
		{
			value: 'Oldsmobile',
			id: 'd88fe0e8-a32d-4e84-9021-f98d32fadbb0',
		},
		{
			value: 'Jeep',
			id: 'cd3b0216-112a-4fef-9a5a-dd037c9ecde5',
		},
		{
			value: 'Lexus',
			id: 'd21e9051-d733-4c72-a4dc-95e0d5bf52aa',
		},
		{
			value: 'Lotus',
			id: '619621a2-ab61-481d-85e3-5df2a83f3a03',
		},
		{
			value: 'Mercury',
			id: 'a6075772-2634-4711-a31b-8a5218af2c17',
		},
		{
			value: 'Kia',
			id: '7b1a8aba-5dd2-4bba-a575-b038268c9326',
		},
		{
			value: 'Chevrolet',
			id: 'f2a1cef9-32ce-4309-a6bd-46f13519f556',
		},
		{
			value: 'Smart',
			id: '0eb627e7-f83b-45db-b3b2-6ed84898bc33',
		},
		{
			value: 'Ford',
			id: '7fc7a776-e38b-4194-a89b-8821c1d08b3b',
		},
		{
			value: 'GMC',
			id: '5078ec1d-f3af-4d62-b360-09f4a63adb93',
		},
		{
			value: 'Chevrolet',
			id: 'bf418cd6-879d-4d2c-bd74-57e9c814ce02',
		},
		{
			value: 'Toyota',
			id: '4d70b8c1-3eb6-4100-b783-0226c42e798e',
		},
	],
};

function Sidebar({ query }) {
	const dispatch = useDispatch();
	const [showFilter, setShowFilter] = useState(false);

	//toggle filter on change
	const handleChange = (e, filter) => {
		let self = e.currentTarget;
		if (self.checked) {
			dispatch(addFilter({ ...filter, value: filter?.value.toLowerCase() }));
			return;
		}
		dispatch(removeFilter({ id: filter?.id }));
	};

	// toggle filter
	const toggleFilters = () => {
		setShowFilter(!showFilter);
	};

	//show selected filter from query params
	useEffect(() => {
		query.forEach((param) => {
			let { filterType, value } = param;
			if (filterType === 'name') return dispatch(addFilter({ ...param, id: uuidv4() }));
			let selectedOption = findSelectedOption(filterType, value);
			if (!selectedOption) return;
			let selectedElement = document.getElementById(selectedOption.id);
			selectedElement.checked = true;
			dispatch(addFilter({ ...selectedOption, value: selectedOption?.value.toLowerCase(), filterType }));
		});
	}, [query, dispatch]);

	//find selected option
	function findSelectedOption(filterType, value) {
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
				{/* filter by color */}
				<Panel head='colors' open={true}>
					<ul>
						{options.color.map(({ value, id }) => {
							return (
								<li className='checkbox' key={id}>
									<input
										className='checkbox__input'
										type='checkbox'
										id={id}
										onChange={(e) => handleChange(e, { filterType: 'color', value, id })}
									/>
									<label className='checkbox__label' htmlFor={id}>
										{value}
									</label>
								</li>
							);
						})}
					</ul>
				</Panel>
				{/* filter by city */}
				<Panel head='Cities'>
					<ul>
						{options.city.map(({ value, id }) => {
							return (
								<li className='checkbox' key={id}>
									<input
										className='checkbox__input'
										type='checkbox'
										id={id}
										onChange={(e) => handleChange(e, { filterType: 'city', value, id })}
									/>
									<label className='checkbox__label' htmlFor={id}>
										{value}
									</label>
								</li>
							);
						})}
					</ul>
				</Panel>
				{/* filter by car */}
				<Panel head='cars'>
					<ul>
						{options.cars.map(({ value, id }) => {
							return (
								<li className='checkbox' key={id}>
									<input
										className='checkbox__input'
										type='checkbox'
										id={id}
										onChange={(e) => handleChange(e, { filterType: 'cars', value, id })}
									/>
									<label className='checkbox__label' htmlFor={id}>
										{value}
									</label>
								</li>
							);
						})}
					</ul>
				</Panel>
			</div>
		</div>
	);
}

export default Sidebar;
