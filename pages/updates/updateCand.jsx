import UpdateCand from '../../src/components/candidate/UpdateCandidate';
import styled from 'styled-components';

const CenterPage = styled.div`
	margin: 0 auto;
	width: 50vw;
	h5 {
		text-align: center;
		font-size: 2.5rem;
	}
`;
function updateCandidate({ query }) {
	return (
		<CenterPage>
			<UpdateCand id={query.id} />
		</CenterPage>
	);
}

export default updateCandidate;
