import React from 'react';

import { Item } from './Item/Item';
import { ProjectDescription } from './ProjectDescription/ProjectDescription';

import devices from './devices.png';

export function Project() {
	return (
		<div className='py-9 flex flex-row  items-center h-5/6'>
			<div className='w-2/4 flex flex-col justify-evenly h-full'>
				<ProjectDescription />
				<Item />
			</div>
			<div className='overflow-hidden' style={{ marginRight: '-190px' }}>
				<img src={devices} alt='' className='w-full h-4/5' />
			</div>
		</div>
	);
}
