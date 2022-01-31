import React from 'react';
import { RiHammerLine } from 'react-icons/ri';
import { HiOutlineCollection } from 'react-icons/hi';
import { AiOutlineShop } from 'react-icons/ai';

interface IComponent {
	componentName: React.FC;
	label: string;
	href: string;
	key: number;
}

const SideNavStyle =
	'w-full inline-flex border-l-slate-900 border-l-8 hover:border-l-8 hover:border-l-indigo-200 hover:bg-slate-800 pl-4 py-3';

// SIDEBAR COMPONENTS
const sideComponents: IComponent[] = [
	{
		componentName: RiHammerLine,
		label: 'Minter',
		href: '',
		key: 1,
	},
	{
		componentName: HiOutlineCollection,
		label: 'Collections',
		href: '',
		key: 2,
	},
	{
		componentName: AiOutlineShop,
		label: 'Marketplace',
		href: '',
		key: 3,
	},
];

//SIDEBAR COMPONENT USED IN NAVIGATION COMPONENT
const SideBar = () => {
	return (
		<aside className='sidebar w-56 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-slate-900'>
			<div className='sidebar-header flex items-center justify-center py-4'>
				<div className='inline-flex'>
					<span className='leading-10 text-gray-100 text-2xl font-bold ml-1 inter'>
						NFTzzz
					</span>
				</div>
			</div>
			<div className='sidebar-content py-6'>
				<ul className='text-lg text-indigo-200 font-extrabold'>
					{sideComponents.map((component: any) => {
						//maps component from array of component
						//renders dynamic component from array
						const DynamicComponent: React.FC = component.componentName;
						return (
							<li key={component.key}>
								<button className={SideNavStyle}>
									<div className='inline-flex'>
										<div className='text-xl mr-2 self-center'>
											<DynamicComponent />
										</div>
										<p className='text-md'>{component.label}</p>
									</div>
								</button>
							</li>
						);
					})}
				</ul>
			</div>
		</aside>
	);
};

export default SideBar;
