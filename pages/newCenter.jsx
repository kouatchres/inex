import React from 'react';
import styled from 'styled-components';
import CreateCenter from '../src/components/CreateCenter';

const DivStyled = styled.div`
	display: block;
	margin: 0 auto;
	max-width: 40vw;
`;
const newCenter = (props) => {
	return (
		<DivStyled>
			<CreateCenter />
		</DivStyled>
	);
};
export default newCenter;
