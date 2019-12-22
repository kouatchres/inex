import React from 'react';
import styled from 'styled-components';
import App from '../src/App';

const DivStyled = styled.div`
	display: block;
	margin: 0 auto;
	justify-items: center;
	align-content: center;
`;
const newApp = (props) => {
	return (
		<DivStyled>
			<App />
		</DivStyled>
	);
};
export default newApp;
