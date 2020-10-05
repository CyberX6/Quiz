import styled, { css } from 'styled-components';

export const CustomButtonStyles = styled.button`
	width: 100%;
	font-size: 16px;
	color: #ffffff;
	background-color: #252d4a;
	border-radius: 15px;
	display: flex;
	padding: 5px;
	justify-content: flex-start;
	align-items: center;
	border: 5px solid #234668;
	cursor: pointer;

	&:hover {
		background-color: #555e7d;
	}

	&:focus {
		outline: none;
	}

	svg {
		margin-right: 5px;
	}

	${props =>
		props.centered &&
		css`
			justify-content: center;
		`}
`;
