import React from 'react';
import { useDispatch } from 'react-redux';
import { addFilter, removeFilter } from '../../features/filter/filterSlice';
import { v4 as uuidv4 } from 'uuid';

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

	//toggle filter on change
	const handleChange = (e, filter) => {
		let self = e.currentTarget;
		if (self.checked) {
			dispatch(addFilter({ ...filter, value: filter?.value?.toLowerCase() }));
			return;
		}
		dispatch(removeFilter({ id: filter?.id }));
	};

	return (
		<div className='sidebar'>
			<button className='sidebar__toggleBtn'></button>
			{/* filter by color */}
			<div className='sidebar__panel'>
				<div className='sidebar__panel-head'>
					<span className='sidebar__subtitle'>Colors</span>
				</div>
				<div className='sidebar__panel-body'>
					<ul>
						{colors.map((color, index) => {
							let id = uuidv4();
							return (
								<li className='checkbox' key={id}>
									<input
										className='checkbox__input'
										type='checkbox'
										id={id}
										onChange={(e) => handleChange(e, { value: color, id: id })}
									/>
									<label className='checkbox__label' htmlFor={id}>
										{color}
									</label>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			{/* filter by city */}
			<div className='sidebar__panel'>
				<div className='sidebar__panel-head'>
					<span className='sidebar__subtitle'>City</span>
				</div>
				<div className='sidebar__panel-body'>
					<ul>
						{cities.map((city, index) => {
							let id = uuidv4();
							return (
								<li className='checkbox' key={id}>
									<input
										className='checkbox__input'
										type='checkbox'
										id={id}
										onChange={(e) => handleChange(e, { value: city, id: id })}
									/>
									<label className='checkbox__label' htmlFor={id}>
										{city}
									</label>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			{/* filter by car */}
			<div className='sidebar__panel'>
				<div className='sidebar__panel-head'>
					<span className='sidebar__subtitle'>Cars</span>
				</div>
				<div className='sidebar__panel-body'>
					<ul>
						{cars.map((car, index) => {
							let id = uuidv4();
							return (
								<li className='checkbox' key={id}>
									<input
										className='checkbox__input'
										type='checkbox'
										id={id}
										onChange={(e) => handleChange(e, { value: car, id: id })}
									/>
									<label className='checkbox__label' htmlFor={id}>
										{car}
									</label>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
