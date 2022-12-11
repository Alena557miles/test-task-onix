import React from 'react';

export const Footer = ({ name }) => (
	<div className='py-12'>
		<p className='text-slate-500 text-end'>
			author:{' '}
			<span className='uppercase font-semibold text-violet-600'>{name}</span>
		</p>
	</div>
);
