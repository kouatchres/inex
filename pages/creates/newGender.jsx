import React from 'react';
import CreateGender from '../../src/components/gender/CreateGender';
import styled from 'styled-components';

const StyledGender = styled.div`
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

const NewRegion = () => {
	return (
		<StyledGender>
			<CreateGender />
		</StyledGender>
	);
};
export default NewRegion;
