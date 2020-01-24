import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import Form from '../styles/Form';
import Error from '../ErrorMessage.js';
import styled from 'styled-components';
import { updateCandidateMutation } from '../queries&Mutations&Functions/Mutations';
import { singleCandidateQuery, getAllGendersQuery } from '../queries&Mutations&Functions/Queries';

const CreateCandForm = styled.div`
	display: grid;
	grid-template-columns: 10fr 18fr;
	grid-gap: 10px;
	min-width: 40vw;
`;
const PicFrame = styled.div`
	display: flex;
	flex-direction: column;
	img {
		width: 250px;
		height: 350px;
		border-radius: 12px;
	}
`;
const DataFrame = styled.div`
	display: flex;
	flex-direction: column;
`;

class UpdateCandidate extends Component {
	state = {genderID: "235"};

	handleChange = (e) => {
		const { name, value, type } = e.target;
		const val = type === 'number' ? parseFloat(value) : value;
		this.setState({ [name]: val });
	};

	updateSingleCandidate = async (e, updateMutation) => {
		e.preventDefault();
		console.log('Updating Candidate!!');
		const res = await updateMutation({
			variables: {
				id: this.props.id,
				gender:this.getSelectedGender(this.state.genderID),
				...this.state
			}
		});
		console.log('Candidate Updated!!');
	};

	uploadFile = async (e) => {
		const files = e.target.files;
		const data = new FormData();
		data.append('file', files[0]);
		data.append('upload_preset', 'ineximages');
		const res = await fetch('https://api.cloudinary.com/v1_1/inex/image/upload', {
			method: 'POST',
			body: data
		});
		const file = await res.json();
		console.log(file);
		this.setState({
			image: file.secure_url
			// biggerPhoto: file.eager[0].secure_url
		});
		{
			// this.state.image && <img src={this.state.image} alt="Upload image" />;
		}
	};

	getSelectedGender = dataSource => {
		// 1 copy the data source
		// if (dataSource.length > 0) {
		const tempGender = [...dataSource];
		// get the region object
		const selectedGender = tempGender.find(item => item.id === this.state.genderID);
		console.log("getting selected gender");
		console.log(selectedGender);
		return selectedGender;
		// }
	  };

	render() {
		return (
			<Query query={getAllGendersQuery}>
				{({ data, loading, error }) => {
					{
						loading && <p>Loading...</p>;
					}
					{
						error && <Error error={error} />;
					}
					console.log(data);
					const { genders } = data;

					const genderOptions =
						genders &&
						genders.map((item) => (
							<option key={item.id} value={item.id}>
								{item.genderName}
							</option>
						));

					return (
						<Query query={singleCandidateQuery} variables={{ id: this.props.id }}>
							{({ data, loading, error }) => {
								{
									loading && <p>Loading...</p>;
								}
								const { candidate } = data;
								console.log(data);
								console.log(candidate);
								{
									!data.candidate && <p>No Candidate Found for ID {this.props.id}</p>;
								}
								const {
									cand1stName,
									cand2ndName,
									cand3rdName,
									email,
									image,
									phoneNumb,
									placeOfBirth,
								} = data.candidate;

								return (
									<Mutation mutation={updateCandidateMutation}
									 variables={{ id: this.props.id }}>
										{(updateCandidate, { loading, error }) => (
											<Form onSubmit={(e) => this.updateSingleCandidate(e, updateCandidate)}>
												<h5>Update a Candidate</h5>
												<Error error={error} />
												<fieldset disabled={loading} aria-busy={loading}>
													<CreateCandForm>
														<PicFrame>
															<input
																type="file"
																id="file"
																name="file"
																placeholder="Your picture"
																onChange={this.uploadFile}
																required
															/>
															<div>
																{this.state.image ? (
																	<img src={this.state.image} alt="Upload image" />
																) : (
																	<img src={image} alt="Upload image" />
																)}
															</div>
														</PicFrame>
														<DataFrame>
															 <select
																type="select"
																id="genderID"
																name="genderID"
																placeholder="Sexe"
																value={this.state.genderID}
																onChange={this.handleChange}
																required
															>
																{genderOptions}
															</select> 

															<input
																type="text"
																id="cand1stName"
																name="cand1stName"
																placeholder="First Name"
																defaultValue={cand1stName}
																onChange={this.handleChange}
																required
															/>
															<input
																type="text"
																id="cand2ndName"
																name="cand2ndName"
																placeholder="Second Name"
																defaultValue={cand2ndName}
																onChange={this.handleChange}
																required
															/>
															<input
																type="text"
																id="cand3rdName"
																name="cand3rdName"
																placeholder="Last Name"
																defaultValue={cand3rdName}
																onChange={this.handleChange}
																required
															/>
															<input
																type="email"
																id="email"
																name="email"
																placeholder="Email"
																defaultValue={email}
																onChange={this.handleChange}
																required
															/>
															<input
																type="number"
																id="phoneNumb"
																name="phoneNumb"
																placeholder="Phone Number"
																defaultValue={phoneNumb}
																onChange={this.handleChange}
																required
															/>
															<input
																type="text"
																id="placeOfBirth"
																name="placeOfBirth"
																placeholder="Birth Place"
																defaultValue={placeOfBirth}
																onChange={this.handleChange}
																required
															/>

															<div className="submitButton">
																<button type="submit">
																	Valid{loading ? 'ation en cours' : 'er '}
																</button>
															</div>
														</DataFrame>
													</CreateCandForm>
												</fieldset>
											</Form>
										)}
									</Mutation>
								);
							}}
						</Query>
					);
				}}
			</Query>
		);
	}
}

export default UpdateCandidate;
