import React from 'react';
import CreateReport from '../src/components/report/CreateReport';
import styled from 'styled-components';

const StyledRegion = styled.div`
	display: block;
	text-align: center;
	margin: 0 auto;
	min-width: 350px;
	background: #359;
	width: 40vw;
`;

const NewReport = () => {
	return (
		<StyledRegion>
			<CreateReport />
		</StyledRegion>
	);
};
export default NewReport;
