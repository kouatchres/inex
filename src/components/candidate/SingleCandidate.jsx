import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Error from '../ErrorMessage';
import Link from 'next/link';
import Form from '../styles/Form';
import { format } from 'date-fns';
import { BigStyledPage } from '../styles/StyledPage';
import styled from 'styled-components';
import { singleCandidateQuery } from '../queries&Mutations&Functions/Queries';

const UpdateBtn = styled.button`
	background-color: #379;
	border-radius: 10px;
	font-size: .3rem;
	border: none;
	outline: none;
	a {
		color: white;
	}
`;

const DivBtn = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 1rem;
`;

const ImageInfo = styled.div`
	margin: 0 auto;
	max-width: 90vw;
	display: grid;
	grid-gap: 1rem;
	grid-template-columns: 1fr 1fr;
	/* box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.08); */
	border-radius: 15px;
`;

const BottomInfo = styled.div`
	padding: .5px;
	margin: .5rem auto;
    font-size: 1.6rem;
    line-height: 0.3rem;
  
`;

const CandImg = styled.div`
	padding-left: 3.5rem;
	display: flex;
	flex-direction: column;
	margin-bottom: .5rem;
	img {
		margin-top: .5rem;
		margin-left: .5rem;
		height: 15rem;
		width: 15rem;
		border-radius: 10px;
		background-size: contain;
		background-position: center;
	}
`;

class SingleCandidate extends Component {
	render() {
		return (
			<Query query={singleCandidateQuery} variables={{ id: this.props.id }}>
				{({ data, loading, error }) => {
					const { candidate } = data;
					const {
						momName,
						dadName,
						candCode,
						image,
						cand1stName,
						cand2ndName,
						cand3rdName,
						email,
						phoneNumb,
						placeOfBirth,
						gender: { genderName },
						dateOfBirth,
						birthCertNumber
					} = candidate;
					{
						loading && <p>Loading...</p>;
					}
					{
						error && <Error error={error} />;
					}
					return (
						<BigStyledPage>
							<Form>
								<h4>Info Candidat</h4>
								<fieldset>
									<ImageInfo>
										<BottomInfo>
											<p>
												<strong>Nom:</strong> <span>{cand1stName}</span>
											</p>
											<p>
												<strong>Prenoms: </strong>
												<span> {cand2ndName}</span>
											</p>
											<p>
												<strong>Autres Noms:</strong>
												<span> {cand3rdName}</span>
											</p>
											<p>
												<strong>Date Naissance:</strong>
												<span> {format(dateOfBirth, 'd MMMM, YYYY')}</span>
											</p>
											<p>
												<strong>Lieu Naissance:</strong> <span>{placeOfBirth}</span>
											</p>
											<p>
												<strong>Sexe: </strong>
												<span> {genderName}</span>
											</p>

											<p>
												<strong>Nom du Père:</strong>
												<span> {dadName}</span>
											</p>
											<p>
												<strong>Nom De la Mère:</strong>
												<span> {momName}</span>
											</p>

											<p>
												<strong>No Acte Naissance:</strong>
												<span> {birthCertNumber}</span>
											</p>
											<p>
												<strong>Tel: </strong> <span>{phoneNumb}</span>
											</p>
										</BottomInfo>
										<BottomInfo>
											<p>
												<strong>Email:</strong>
												<span> {email}</span>
											</p>

											<p>
												<strong>Code Candidat:</strong> <span> {candCode}</span>
											</p>
											<CandImg>
												<div>{candidate.image && <img src={image} alt="Upload image" />}</div>
											</CandImg>
											<DivBtn>
												<UpdateBtn>
													<Link
														href={{
															pathname: '../updates/updateCand',
															query: { id: this.props.id }
														}}
													>
														<a>Modifier </a>
													</Link>
												</UpdateBtn>
												<UpdateBtn>
													<Link
														href={{
															pathname: '../creates/newCand'
														}}
													>
														<a>Candidat Suivant</a>
													</Link>
												</UpdateBtn>
											</DivBtn>
										</BottomInfo>
									</ImageInfo>
								</fieldset>
							</Form>
						</BigStyledPage>
					);
				}}
			</Query>
		);
	}
}

export default SingleCandidate;
//bacc 2017 chinois specialty
//candCodes              //  examCandSecretCode
//fdzpk&Coh65Z          //Xp5I#RnK
//HUQDgdZRt6H1          //%zxXvYUU
//LK#fryyoI57           //RSNtIjPE
//swMwBJtT1ct           // oWMOcC2T
//6UnsPVM%#Ibl  //
//mWrmVPpcf9C2     //
