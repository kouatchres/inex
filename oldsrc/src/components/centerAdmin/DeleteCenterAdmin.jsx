import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { getAllCenterAdminsQuery } from '../queries&Mutations&Functions/Queries';

const DelBtn = styled.button`
  font-weight: bold;
  border-radius:8px;
  font-size:1.5rem;
  height:30px;
  border:none;
  padding-top:5px;
  padding-bottom:5px;
  align-items:center;
  background-color: white;
  color: black;
  width:10vw;
  border: 2px solid #4CAF50; /* Green */
  :hover{
    cursor:pointer;
    background-color: #4CAF50;
  color: white;
}
  }
`;

const deleteCenterAdminMutation = gql`
	mutation deleteCenterAdminMutation($id: ID!) {
		deleteCenterAdmin(id: $id) {
			id
		}
	}
`;

class DeleteExam extends Component {
	updateCache = (cache, payload) => {
		// manually update the cache so that the data are all the same
		// 1. read the cache for the data we want
		const data = cache.readQuery({ query: getAllCenterAdminsQuery });
		// the deletedselect all the other regions except the deleted one from the cache
		data.exams = data.exams.filter((item) => item.id !== payload.data.deleteExam.id);
		//  3. write the new data back to the cache
		console.log('getting payload');
		console.log(payload);
		cache.writeQuery({ query: getAllCenterAdminsQuery, data });
	};

	render() {
		return (
			<div>
				<Mutation
					mutation={deleteCenterAdminMutation}
					variables={{ id: this.props.id }}
					update={this.updateCache}
				>
					{(deleteExam, { error }) => (
						<DelBtn
							onClick={() => {
								if (confirm('Do you want to delete this Examination ?')) {
									deleteCenterAdmin();
								}
							}}
						>
							{this.props.children}
						</DelBtn>
					)}
				</Mutation>
			</div>
		);
	}
}

export default DeleteExam;
