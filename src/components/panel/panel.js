import React from 'react';
import { useState } from 'react';
import { Collapse } from 'react-collapse';

function Panel({ children, head, open }) {
	const [isOpen, setIsOpen] = useState(open || false);

	//toggle collapse
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
