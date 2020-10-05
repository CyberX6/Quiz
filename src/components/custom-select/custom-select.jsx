import React from 'react';
import Select from 'react-select';
import { customStyles, SelectLabel } from './cutom-select.styles';

export const CustomSelect = ({ labelText, value, onChange, options }) => {
	return (
		<React.Fragment>
			<SelectLabel>{labelText}</SelectLabel>
			<Select
				value={value}
				onChange={onChange}
				options={options}
				styles={customStyles}
			/>
		</React.Fragment>
	);
};
