import React from 'react';
import styled from 'styled-components';
import CreateSubDivision from '../../src/components/subDivision/CreateSubDivision';

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
const newSubDivision = (props) => {
	return (
		<DivStyled>
			<CreateSubDivision />
		</DivStyled>
	);
};
export default newSubDivision;
