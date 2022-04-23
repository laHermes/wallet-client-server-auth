import React from 'react';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';
import { IButton, IChildren } from '../../types';

const PageNavigationWrapper = ({ children }: IChildren) => {
	return (
		<nav className='inline-flex items-center gap-5 p-2  text-lg  border-white w-fit rounded-md text-white'>
			{children}
		</nav>
	);
};

const PreviousPage: React.FC<
	IButton & React.HTMLAttributes<HTMLButtonElement>
> = ({ ...props }) => {
	return (
		<button {...props}>
			<AiOutlineCaretLeft className='navigationArrow' />
		</button>
	);
};

const NextPage: React.FC<IButton & React.HTMLAttributes<HTMLButtonElement>> = ({
	...props
}) => {
	return (
		<button {...props}>
			<AiOutlineCaretRight className='navigationArrow' />
		</button>
	);
};

export { PageNavigationWrapper, PreviousPage, NextPage };
