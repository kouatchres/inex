import CandidateList from '../../src/components/candidate/CandidateList';
import styled from 'styled-components';

const CandPresentation = styled.section`
	max-width: 98vw;
	justify-content: center;
	background: ${(props) => props.theme.darkGrey};
`;

const Candidate = (props) => {
	return (
		<div>
			<p>Liste des Candidats</p>
			<CandPresentation>
				<CandidateList />
			</CandPresentation>
		</div>
	);
};
export default Candidate;
