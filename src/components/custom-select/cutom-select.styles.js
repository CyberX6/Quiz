import styled from 'styled-components';

export const SelectLabel = styled.label`
	font-size: 16px;
	margin-bottom: 10px;
`;

export const customStyles = {
	container: provided => ({
		...provided,
		width: '100%',
		minWidth: '200px',
		marginBottom: '10px'
	}),
	control: provided => ({
		...provided,
		backgroundColor: '#252d4a',
		border: '5px solid #234668',
		borderRadius: '15px'
	}),
	menu: provided => ({
		...provided,
		backgroundColor: '#252d4a'
	}),
	option: (provided, state) => ({
		...provided,
		color: '#fff',
		fontSize: '16px',
		backgroundColor: state.isFocused ? '#555e7d' : '#252d4a'
	}),
	placeholder: provided => ({
		...provided,
		fontSize: '16px',
		color: '#fff'
	}),
	singleValue: provided => ({
		...provided,
		color: '#fff',
		fontSize: '16px'
	})
};
