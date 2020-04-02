import React from 'react';
import styled from 'styled-components';
import CenterTakesSeries from '../../src/components/centerExamSessionSeries/CenterTakesSeries';

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
			<CenterTakesSeries />
		</DivStyled>
	);
};
export default newDivision;
