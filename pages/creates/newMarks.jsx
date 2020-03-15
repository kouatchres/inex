import React from 'react';
import EnterMarks from '../../src/components/score/EnterMarks';
import styled from 'styled-components';

const StyledCandidate = styled.div`
	margin: 0 auto;
	min-width: 220px;
	width: 50vw;
	h4 {
		margin: 0 auto;
		text-align: center;
		font-size: 3.1rem;
		font-weight: normal;
	}
`;

const newMarks = () => {
	return (
		<StyledCandidate>
			<EnterMarks />
		</StyledCandidate>
	);
};
export default newMarks;
