import React from 'react';
import styled from 'styled-components';
import SelectDivisionToModify from '../../src/components/division/SelectDivisionToModify';

const DivStyled = styled.div`
	display: block;
	margin: 0 auto;
	justify-items: center;
	align-content: center;
`;
const modifyDivision = (props) => {
	return (
		<DivStyled>
			<SelectDivisionToModify />
		</DivStyled>
	);
};
export default modifyDivision;
