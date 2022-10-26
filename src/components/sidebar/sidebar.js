import React from 'react';
import { useDispatch } from 'react-redux';
import { addFilter, removeFilter } from '../../features/filter/filterSlice';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Panel from '../panel/panel';
import filterIcon from '../../assets/filter.png';

const colors = [
	'Teal',
	'Blue',
	'Pink',
	'Goldenrod',
	'Maroon',
	'Red',
	'Fuscia',
	'Yellow',
	'Orange',
	'Khaki',
	'Puce',
	'Turquoise',
	'Violet',
];
const cities = [
	'Malata',
	'Acas',
	'Manolás',
	'Pirapora',
	'Umanggudang',
	'Junliangcheng',
	'Mzuzu',
	'Mingguang',
	'Xiaozhen',
	'Xinghe',
	'Osiek',
	'Repušnica',
	'Hannover',
	'Pepe',
	'Hovorany',
	'Hiseti',
	'Guadalupe',
	'Tambulig',
	'Komiža',
];
const cars = [
	'Volkswagen',
	'Dodge',
	'BMW',
	'Oldsmobile',
	'Jeep',
	'Lexus',
	'Lotus',
	'Mercury',
	'Kia',
	'Chevrolet',
	'Smart',
	'Ford',
	'GMC',
	'Chevrolet',
	'Toyota',
];

function Sidebar() {
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

	// useEffect(() => {
	// 	let media = window.matchMedia('(max-width: 991.98px)');
	// 	if(media.matches) {
	// 		setShowFilter(false)
	// 	}
	// }, []);

	const toggleFilters = () => {
		setShowFilter(!showFilter);
	};

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
						{colors.map((color, index) => {
							let id = uuidv4();
							return (
								<li className='checkbox' key={id}>
									<input
										className='checkbox__input'
										type='checkbox'
										id={id}
										onChange={(e) => handleChange(e, { filterType: 'color', value: color, id: id })}
									/>
									<label className='checkbox__label' htmlFor={id}>
										{color}
									</label>
								</li>
							);
						})}
					</ul>
				</Panel>
				{/* filter by city */}
				<Panel head='Cities'>
					<ul>
						{cities.map((city, index) => {
							let id = uuidv4();
							return (
								<li className='checkbox' key={id}>
									<input
										className='checkbox__input'
										type='checkbox'
										id={id}
										onChange={(e) => handleChange(e, { filterType: 'city', value: city, id: id })}
									/>
									<label className='checkbox__label' htmlFor={id}>
										{city}
									</label>
								</li>
							);
						})}
					</ul>
				</Panel>
				{/* filter by car */}
				<Panel head='cars'>
					<ul>
						{cars.map((car, index) => {
							let id = uuidv4();
							return (
								<li className='checkbox' key={id}>
									<input
										className='checkbox__input'
										type='checkbox'
										id={id}
										onChange={(e) => handleChange(e, { filterType: 'cars', value: car, id: id })}
									/>
									<label className='checkbox__label' htmlFor={id}>
										{car}
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
