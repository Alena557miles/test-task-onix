import React from 'react';
import { Button } from '../../common/Button/Button';
import { Logo } from './components/Logo/Logo';
import { BUTTON_TEXT_SIGN_IN, BUTTON_TEXT_LOGIN } from '../../constants';

const className =
	'uppercase font-semibold h-11 w-36 text-violet-600 py-0.5 px-8  w-fit  border border-white hover:border-violet-600 hover:rounded-lg active:bg-violet-600 active:text-white';

export function Header() {
	return (
		<div className='flex flex-row justify-between items-center px-5 h-1/6 max-h-16'>
			<div className='flex flex-rowitems-center justify-between w-4/12'>
				<Logo />
				<ul className='flex flex-row  gap-x-12 items-center uppercase '>
					<li>
						<a
							href='https://github.com/Alena557miles/test-task-onix'
							className='hover:text-violet-600'
						>
							github
						</a>
					</li>
					<li>
						<a
							href='https://gitlab.com/OlenaNester'
							className='hover:text-violet-600'
						>
							gitlab
						</a>
					</li>
					<li>
						<a
							href='https://www.figma.com/file/CTktlT3cHumP2ek32Y4osL/Containers-%2B?node-id=0%3A1'
							className='hover:text-violet-600'
						>
							design
						</a>
					</li>
				</ul>
			</div>
			<div className='flex flex-row justify-between items-center gap-x-2'>
				<Button buttonText={BUTTON_TEXT_SIGN_IN} className={className} />
				<Button buttonText={BUTTON_TEXT_LOGIN} className={className} />
			</div>
		</div>
	);
}
