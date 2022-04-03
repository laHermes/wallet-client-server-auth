import React, { useEffect, useState } from 'react';
import { Listbox } from '@headlessui/react';
import { selectUniqueColors } from '../../redux/nfts/nfts';
import { useSelector } from 'react-redux';
import { Group } from '../../hooks/useFilter';
import { INft } from '../../redux/types';

interface IFilterColor {
	toggleGroupFilter: Function;
	filters: any[];
}

const FilterColor = ({ toggleGroupFilter, filters }: IFilterColor) => {
	const [selectedColor, setSelectedColor] = useState<string>('none');

	const colors = useSelector(selectUniqueColors);

	useEffect(() => {
		const isFilteredByColor = filters.some(
			(instance) => instance.group === Group.COLOR
		);
		if (!isFilteredByColor) {
			setSelectedColor(colors[0]);
		}
	}, [colors, filters]);

	return (
		<Listbox
			value={selectedColor}
			onChange={(color: string) => {
				setSelectedColor(color);
				toggleGroupFilter(
					color,
					Group.COLOR,
					(nft: INft) => nft.metadata.attributes[0].value === color
				);
			}}>
			<Listbox.Button className='bg-white w-24 px-2 rounded-lg'>
				{selectedColor}
			</Listbox.Button>
			<Listbox.Options className='absolute bg-white w-24 px-2 rounded-lg'>
				{colors.map((color) => (
					<Listbox.Option key={color} value={color}>
						{color}
					</Listbox.Option>
				))}
			</Listbox.Options>
		</Listbox>
	);
};

export default FilterColor;
