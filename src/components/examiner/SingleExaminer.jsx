import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Error from '../ErrorMessage';
import Link from 'next/link';
import Form from '../styles/Form';
import { format } from 'date-fns';
import { BigStyledPage } from '../styles/StyledPage';
import styled from 'styled-components';
import { singleExaminerQuery } from '../queries&Mutations&Functions/Queries';

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

const examinerImg = styled.div`
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

class SingleExaminer extends Component {
	render() {
		return (
			<Query query={singleExaminerQuery} variables={{ id: this.props.id }}>
				{({ data, loading, error }) => {
					const { examineridate } = data;
					const {
						examiner1stName,
						examiner2ndName,
						examinerOtherNames,
						examinerCode,
						examinerEmail,
						examinerImage,
						examinerPhone,
						examinerMatricule
					} = examineridate;
					{
						loading && <p>Loading...</p>;
					}
					{
						error && <Error error={error} />;
					}
					return (
						<BigStyledPage>
							<Form>
								<h4>Info Examinateur</h4>
								<fieldset>
									<ImageInfo>
										<BottomInfo>
											<p>
												<strong>Nom:</strong> <span>{examiner1stName}</span>
											</p>
											<p>
												<strong>Prenoms: </strong>
												<span> {examiner2ndName}</span>
											</p>
											<p>
												<strong>Autres Noms:</strong>
												<span> {examinerOtherNames}</span>
											</p>
											<p>
												<strong>Matricule:</strong>
												<span> {examinerMatricule}</span>
											</p>

											<p>
												<strong>Tel: </strong> <span>{examinerPhone}</span>
											</p>
										</BottomInfo>
										<BottomInfo>
											<p>
												<strong>Email:</strong>
												<span> {examinerEmail}</span>
											</p>

											<p>
												<strong>Code Examinateur:</strong> <span> {examinerCode}</span>
											</p>
											<examinerImg>
												<div>{examinerImage && <img src={examinerImage} alt={exminerEmail} />}</div>
											</examinerImg>
											<DivBtn>
												<UpdateBtn>
													<Link
														href={{
															pathname: '../updates/updateexaminer',
															query: { id: this.props.id }
														}}
													>
														<a target="_blank" >Modifier </a>
													</Link>
												</UpdateBtn>
												<UpdateBtn>
													<Link
														href={{
															pathname: '../creates/newExaminer'
														}}
													>
														<a target="_blank" >Nouveau Examinateur</a>
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

export default SingleExaminer;
//bacc 2017 chinois specialty
//examinerCodes              //  examexaminerSecretCode
//fdzpk&Coh65Z          //Xp5I#RnK
//HUQDgdZRt6H1          //%zxXvYUU
//LK#fryyoI57           //RSNtIjPE
//swMwBJtT1ct           // oWMOcC2T
//6UnsPVM%#Ibl  //
//mWrmVPpcf9C2     //
