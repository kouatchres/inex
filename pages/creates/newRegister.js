import React from 'react';
import Registration from '../../src/components/registration/Registration';
import styled from 'styled-components';

const StyledRegion = styled.div`
	/* display: block; */
	text-align: center;
	margin: 0 auto;
	width: 60vw;
`;

const register = () => {
	return (
		<StyledRegion>
			<Registration />
		</StyledRegion>
	);
};
export default register;
