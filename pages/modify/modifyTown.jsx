import React from 'react';
import styled from 'styled-components';
import SelectTownToModify from '../../src/components/town/SelectTownToModify';

const DivStyled = styled.div`
	display: block;
	margin: 0 auto;
	justify-items: center;
	align-content: center;
`;
const modifyTown = (props) => {
	return (
		<DivStyled>
			<SelectTownToModify />
		</DivStyled>
	);
};
export default modifyTown;
