import React from 'react';
import CreateEducationType from '../../src/components/educationType/CreateEducationType';
import styled from 'styled-components';

const StyledRegion = styled.div`
	display: block;
	text-align: center;
	margin: 0 auto;
	min-width: 350px;
	background: #359;
	width: 40vw;
	h4 {
		margin: 0 auto;
		text-align: center;
		font-size: 3rem;
		font-weight: normal;
	}
`;

const NewEducationType = () => {
	return (
		<StyledRegion>
			<CreateEducationType />
		</StyledRegion>
	);
};
export default NewEducationType;
