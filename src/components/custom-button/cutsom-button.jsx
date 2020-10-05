import React from 'react';
import { CustomButtonStyles } from './custom-button.styles';

export const CustomButton = ({ children, centered, onClick }) => {
	return (
		<CustomButtonStyles centered={centered} onClick={onClick}>
			{children}
		</CustomButtonStyles>
	);
};
