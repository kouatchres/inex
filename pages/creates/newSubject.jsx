import React from 'react';
import CreateSubject from '../../src/components/subject/CreateSubject';
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

const NewSubject = () => {
	return (
		<StyledRegion>
			<CreateSubject />
		</StyledRegion>
	);
};
export default NewSubject;
