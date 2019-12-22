import React from 'react';
import styled from 'styled-components';
import UpdateRegion from '../src/components/UpdateRegionBest';

const DivStyled = styled.div`
	display: block;
	margin: 0 auto;
	justify-items: center;
	align-content: center;
`;
const newDivision = (props) => {
	return (
		<DivStyled>
			<UpdateRegion />
		</DivStyled>
	);
};
export default newDivision;
