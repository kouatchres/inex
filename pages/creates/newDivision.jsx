import React from 'react';
import styled from 'styled-components';
import CreateDivision from '../../src/components/division/CreateDivision';

const DivStyled = styled.div`
	display: block;
	margin: 0 auto;
	max-width: 40vw;
	h4 {
		margin: 0 auto;
		text-align: center;
		font-size: 3rem;
		font-weight: normal;
	}
`;
const newDivision = (props) => {
	return (
		<DivStyled>
			<CreateDivision />
		</DivStyled>
	);
};
export default newDivision;
