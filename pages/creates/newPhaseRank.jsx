import React from 'react';
import RegPhaseRank from '../../src/components/phaseRank/RegPhaseRank';
import styled from 'styled-components';

const StyledRegion = styled.div`
	display: block;
	text-align: center;
	margin: 0 auto;
	h4 {
		margin: 0 auto;
		text-align: center;
		font-size: 3rem;
		font-weight: normal;
	}
`;

const newPhaseRank = () => {
	return (
		<StyledRegion>
			<RegPhaseRank />
		</StyledRegion>
	);
};
export default newPhaseRank;
