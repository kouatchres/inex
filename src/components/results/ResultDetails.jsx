import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { roundFloatNumber } from '../queries&Mutations&Functions/Functions';

const RegionRow = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 15px;
	background-color: ${(props) => props.theme.lightGrey};
	align-items: left;
	justify-items: left;
	border-bottom: 1px solid black;
	padding-left: 15px;
`;

const CellBlock = styled.div`
	align-content: left;
	text-align: left;
`;

class ResultDetails extends Component {
	// static propTypes = {
	// 	data: PropTypes.object.isRequired
	// };

	render() {
		const { subjectAve, coeff, subjectSeries } = { ...this.props.score };
		return (
			<RegionRow>
				<CellBlock>
					<span>{subjectSeries.subjectName}</span>
				</CellBlock>
				<CellBlock>
					<span>{coeff}</span>
				</CellBlock>
				<CellBlock>
					<span>{subjectAve}</span>
				</CellBlock>
				<CellBlock>
					<span>{roundFloatNumber(coeff * subjectAve, 	4)}</span>
				</CellBlock>
			</RegionRow>
		);
	}
}
export default ResultDetails;
