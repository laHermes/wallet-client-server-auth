import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Links = () => {
	const location = useLocation();

	const navObjects = [
		{
			label: 'Mint',
			location: '/mint',
		},
		{
			label: 'Collection',
			location: '/',
		},
	];

	return (
		<ul className='inline-flex gap-8 font-semibold text-lg'>
			{navObjects.map((object) => {
				return (
					<li
						key={object.location}
						className={`${
							location.pathname === object.location
								? 'text-white/95'
								: 'text-white/60'
						} hover:text-white pt-2`}>
						<Link to={object.location}>{object.label}</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default Links;