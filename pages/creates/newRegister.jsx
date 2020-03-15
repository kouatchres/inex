import React from 'react';
import Registration from '../../src/components/registration/Registration';
import styled from 'styled-components';

const StyledRegion = styled.div`
	/* display: block; */
	text-align: center;
	margin: 0 auto;
	width: 60vw;
	h4 {

		margin: 0 auto;
		text-align: center;
		font-size: 3rem;
		font-weight: normal;
		
	}
`;

const register = () => {
	return (
		<StyledRegion>
			<Registration />
		</StyledRegion>
	);
};
export default register;
