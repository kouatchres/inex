import React from 'react';
import RegSubjectSeries from '../../src/components/subjectSeries/RegSubjectSeries';
import styled from 'styled-components';

const StyledRegion = styled.div`
	display: block;
	text-align: center;
	margin: 0 auto;
	background: #359;
	width: 60vw;
	h4 {
		margin: 0 auto;
		text-align: center;
		font-size: 3rem;
		font-weight: normal;
	}
`;

const NewSubjectSeries = () => {
	return (
		<StyledRegion>
			<RegSubjectSeries />
		</StyledRegion>
	);
};
export default NewSubjectSeries;
