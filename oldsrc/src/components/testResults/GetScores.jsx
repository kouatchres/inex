import React, { Component } from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import { getAllExamsQuery } from '../queries&Mutations&Functions/Queries';

export class GetScores extends Component {
	render() {
		return (
			<Query query={getAllExamsQuery}>
				{({ data, error, loading }) => {
					const { exams } = data;
					console.log(data);
					return <ul>{exams.map((item) => <li key={item.id}>{item.examName}</li>)}</ul>;
				}}
			</Query>
		);
	}
}

export default GetScores;
