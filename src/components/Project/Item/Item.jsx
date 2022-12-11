import React from 'react';

const className =
	'uppercase block font-semibold text-violet-600 py-2 px-8  w-fit  border hover:border-violet-600 h-11 w-36 rounded-lg bg-violet-600 text-white hover:bg-white hover:text-violet-600';

export function Item() {
	return (
		<>
			<div className='flex flex-col justify-between gap-11'>
				<p className='text-slate-500'>you can see code of this app on Github</p>
				<a
					href='https://github.com/Alena557miles/test-task-onix'
					className={className}
				>
					See code
				</a>
			</div>
		</>
	);
}
