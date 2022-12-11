import React from 'react';
export function Button({ type, onClick, buttonText, className }) {
	return (
		<button type={type} className={className} onClick={onClick}>
			{buttonText}
		</button>
	);
}
