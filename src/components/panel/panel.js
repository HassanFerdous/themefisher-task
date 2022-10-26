import React from 'react';
import { useState } from 'react';
import { Collapse } from 'react-collapse';

function Panel({ children, head, open }) {
	const [isOpen, setIsOpen] = useState(open || false);
	const toggleFilterBody = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={`sidebar__panel ${isOpen ? 'sidebar__panel--open' : ''}`}>
			<div className='sidebar__panel-head' onClick={toggleFilterBody}>
				<span className='sidebar__subtitle'>{head}</span>
				<span className='sidebar__panel-icon'></span>
			</div>
			<Collapse isOpened={isOpen}>
				<div className='sidebar__panel-body'>{children}</div>
			</Collapse>
		</div>
	);
}

export default Panel;

/* <div className='sidebar__panel'>
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
											onChange={(e) => handleChange(e, { filterType: 'cars', value: car, id: id })}
										/>
										<label className='checkbox__label' htmlFor={id}>
											{car}
										</label>
									</li>
								);
							})}
						</ul>
					</div>
				</div> */
