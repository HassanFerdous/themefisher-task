import React from 'react';

function Sidebar() {
	return (
		<div className='sidebar'>
			<button className='sidebar__toggleBtn'></button>
			<div className='sidebar__panel'>
				<div className='sidebar__panel-head'>
					<span className='sidebar__subtitle'>Colors</span>
				</div>
				<div className='sidebar__panel-body'>
					<ul>
						<li className='checkbox'>
							<input className='checkbox__input' type='checkbox' id='checkbox-1' />
							<label className='checkbox__label' htmlFor='checkbox-1'>
								Teal
							</label>
						</li>
						<li className='checkbox'>
							<input className='checkbox__input' type='checkbox' id='checkbox-2' />
							<label className='checkbox__label' htmlFor='checkbox-2'>
								Blue
							</label>
						</li>
					</ul>
				</div>
			</div>
			<div className='sidebar__panel'>
				<div className='sidebar__panel-head'>
					<span className='sidebar__subtitle'>City</span>
				</div>
				<div className='sidebar__panel-body'>
					<ul>
						<li className='checkbox'>
							<input className='checkbox__input' type='checkbox' id='checkbox-1' />
							<label className='checkbox__label' htmlFor='checkbox-1'>
								city-1
							</label>
						</li>
						<li className='checkbox'>
							<input className='checkbox__input' type='checkbox' id='checkbox-2' />
							<label className='checkbox__label' htmlFor='checkbox-2'>
								city-2
							</label>
						</li>
						<li className='checkbox'>
							<input className='checkbox__input' type='checkbox' id='checkbox-3' />
							<label className='checkbox__label' htmlFor='checkbox-3'>
								city-3
							</label>
						</li>
					</ul>
				</div>
			</div>
			<div className='sidebar__panel'>
				<div className='sidebar__panel-head'>
					<span className='sidebar__subtitle'>Cars</span>
				</div>
				<div className='sidebar__panel-body'>
					<ul>
						<li className='checkbox'>
							<input className='checkbox__input' type='checkbox' id='checkbox-1' />
							<label className='checkbox__label' htmlFor='checkbox-1'>
								cars-1
							</label>
						</li>
						<li className='checkbox'>
							<input className='checkbox__input' type='checkbox' id='checkbox-2' />
							<label className='checkbox__label' htmlFor='checkbox-2'>
								cars-2
							</label>
						</li>
						<li className='checkbox'>
							<input className='checkbox__input' type='checkbox' id='checkbox-3' />
							<label className='checkbox__label' htmlFor='checkbox-3'>
								cars-3
							</label>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
