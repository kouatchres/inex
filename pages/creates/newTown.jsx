import React from 'react';
import styled from 'styled-components';
import CreateTown from '../../src/components/town/CreateTown';

const DivStyled = styled.div`
	display: block;
	margin: 0 auto;
	max-width: 40vw;
	h4 {
		margin: 0 auto;
		text-align: center;
		font-size: 3rem;
		font-weight: normal;
	}
`;
const newTown = (props) => {
	return (
		<DivStyled>
			<CreateTown />
		</DivStyled>
	);
};
export default newTown;
