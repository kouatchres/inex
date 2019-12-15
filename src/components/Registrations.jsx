import React, {Component} from "react";
import {Mutation, Query} from "react-apollo";
import Form from "./styles/Form";
import gql from "graphql-tag";
import Error from "./ErrorMessage";
import styled from "styled-components";
import {
    storedTown,
    storedCenter ,
     storeRegion,
      storedDivision,
       storedSubDivision,
        storedExam, 
        storedSession,
          storedCandidate, 
          storedSeries,
          storedEducType,
          bestTowns
        } from "../data";

const StyledDivision = styled.div `
  display: grid;
  grid-template-columns:repeat(2, 1fr);
  grid-gap:2rem;
  text-align: center;
  margin: 0 auto;
  min-width: 82rem;

`;

const CenterSelect = styled.div `
  display: block;
  text-align: center;
  margin: 0 auto;
  min-width: 40rem;
`;

const OtherSelect = styled.div `
  display: block;
  text-align: center;
  margin: 0 auto;
  min-width: 40rem;
`;

const GET_ALL_REGIONS_QUERY = gql `
  query GET_ALL_REGIONS_QUERY {
    regions(orderBy: regName_DESC) {
    regName
    regCode
    id
  }
  }
`;

const GET_ALL_SERIES_QUERY = gql `
  query GET_ALL_SERIES_QUERY {
    serieses(orderBy: seriesName_ASC) {
      seriesName
      seriesCode
      id
    }
  }
`;

const GET_ALL_EDUCATION_TYPES_QUERY = gql `
  query GET_ALL_EDUCATION_TYPES_QUERY {
    educationTypes {
      educationTypeName
      educationTypeCode
      id
    }
  }
`;




const GET_ALL_SERIES_OF_EDUCATION_TYPE_QUERY =gql`
query GET_ALL_SERIES_OF_EDUCATION_TYPE_QUERY($id: ID!){
  educationType(id:$id){
    id
    educationTypeName
     series(orderBy: seriesName_ASC){
       seriesName
       seriesCode
     }
  }
}


`;


const GET_ALL_EXAMS_QUERY = gql `
  query GET_ALL_EXAMS_QUERY {
    exams(orderBy: examName_ASC ) {
      examName
      examCode
      id
    }
  }
`;

const GET_ALL_SESSIONS_QUERY = gql `
  query GET_ALL_SESSIONS_QUERY {
    sessions(orderBy: createdAt_DESC) {
      createdAt
      sessionName
      sessionCode
      id
    }
  }
`;
const GET_ALL_DIVISIONS_QUERY = gql `
  query GET_ALL_DIVISIONS_QUERY {
    divisions(orderBy: divName_ASC) {
      divName
      divCode
      id
    }
  }
`;
const GET_DIVISIONS_OF_A_REGION_QUERY = gql `
  query GET_DIVISIONS_OF_A_REGION_QUERY($id: ID!) {
    region(id: $id) {
      regName
      id
      division(orderBy: divName_ASC) {
        divName
        divCode
        id
      }
    }
  }
`;

const GET_SUBDIVISIONS_OF_A_DIVSION_QUERY = gql `
  query GET_SUBDIVISIONS_OF_A_DIVSION_QUERY($id: ID!) {
    division(id: $id) {
      divName
      id
      subDivision(orderBy: subDivName_ASC) {
        subDivName
        subDivCode
        id
      }
    }
  }
`;

const GET_TOWNS_OF_A_SUBDIVISIONS_QUERY = gql `
  query GET_TOWNS_OF_A_SUBDIVISIONS_QUERY($id: ID!) {
    subDivision(id: $id) {
      subDivName
      id
      town(orderBy: townName_ASC) {
        townName
        townCode
        id
      }
    }
  }
`;

const GET_CENTERS_OF_A_TOWN_QUERY = gql `
  query GET_CENTERS_OF_A_TOWN_QUERY($id: ID!) {
    town(id: $id) {
      townName
      id
      center(orderBy: centerName_ASC) {
        centerName
        centerCode
        id
      }
    }
  }
`;

const CREATE_REGISTRATION_MUTATION = gql `
  mutation CREATE_REGISTRATION_MUTATION(
      $exam: ExamWhereUniqueInput!,
      $series: SeriesWhereUniqueInput!, 
      $candidate: CandidateWhereUniqueInput!, 
      $session: SessionWhereUniqueInput!, 
      $center: CenterWhereUniqueInput!,
      ) {
    createRegistration( 
        exam:$exam,
        series: $series,
        series: $series,
         candidate: $candidate,
          center: $center
          ) {
      id
      series {
        seriesName
      }
    }
  }
`;

class Registration extends Component {
    state = {
        townName: "",
        townCode: "",
        townID: "12",
        divisionID: "12",
        subDivisionID: "12",
        regionID: "12",
        centerID: "12",
        examID: "12",
        sessionID: "12",
        seriesID: "12",
        educTypeID: "12",
        candidateID: "12",
        region: storeRegion,
        division: storedDivision,
        subDiv: storedSubDivision,
        town: storedTown,
        center: storedCenter,
        exam: storedExam,
        session: storedSession,
        series: storedSeries,
        educationType: storedEducType,
        candidate: storedCandidate
    };

    handleChange = e => {
        const {name, value, type} = e.target;
        const val = type === "number"? parseInt(value): value;
        this.setState({[name]: val});
    };

    getSelectedRegion = dataSource => {
        // 1 copy the data source
        if (dataSource.length > 0) {
            const tempRegions = [...dataSource];
            // get the selected region object
            const selectedRegion = tempRegions.find(item => item.id === this.state.regionID);
            console.log("getting selected region");
            console.log(selectedRegion);
            return selectedRegion;
        }
    };

    getSelectedDivision = dataSource => {
        // 1 copy the data source
        if (dataSource.length > 0) {
            const tempDivisions = [...dataSource];
            // get the selected division object
            const selectedDivision = tempDivisions.find(item => item.id === this.state.divisionID);
            console.log(selectedDivision);
            return selectedDivision;
        }
    };

    getSelectedSubDivision = (dataSource) => {
        // 1 copy the data source
        if (dataSource.length > 0) {
            const tempSubDivisions = [...dataSource];
            // get the selected division object
            const selectedSubDivision = tempSubDivisions.find(item => item.id === this.state.subDivisionID);

            console.log(selectedSubDivision);
            return selectedSubDivision;
        }
    };

    getSelectedTown = dataSource => {
        // 1 copy the data source
        if (dataSource.length > 0) {
            const tempTown = [...dataSource];
            // get the selected division object
            const selectedTown = tempTown.find(item => item.id === this.state.townID);

            console.log(selectedTown);
            return selectedTown;
        }
    };

    getSelectedCenter = dataSource => {
        // 1 copy the data source
        if (dataSource.length > 0) {
            const tempCenter = [...dataSource];
            // get the selected division object
            const selectedCenter = tempCenter.find(item => item.id === this.state.centerID);

            console.log(selectedCenter);
            return selectedCenter;
        }
    };
    getSelectedExam = dataSource => {
        // 1 copy the data source
        if (dataSource.length > 0) {
            const tempExam = [...dataSource];
            // get the selected division object
            const selectedExam = tempExam.find(item => item.id === this.state.examID);

            console.log(selectedExam);
            return selectedExam;
        }
    };
    getSelectedSession = dataSource => {
        // 1 copy the data source
        if (dataSource.length > 0) {
            const tempSession = [...dataSource];
            // get the selected division object
            const selectedSession = tempSession.find(item => item.id === this.state.sessionID);

            console.log(selectedSession);
            return selectedSession;
        }
    };
    getSelectedSeries = dataSource => {
        // 1 copy the data source
        if (dataSource.length > 0) {
            const tempSeries = [...dataSource];
            // get the selected division object
            const selectedSeries = tempSeries.find(item => item.id === this.state.seriesID);

            console.log(selectedSeries);
            return selectedSeries;
        }
    };
    getSelectedEducType = dataSource => {
        // 1 copy the data source
        if (dataSource.length > 0) {
            const tempEducType = [...dataSource];
            // get the selected division object
            const selectedEducType = tempEducType.find(item => item.id === this.state.educTypeID);

            console.log(selectedEducType);
            return selectedEducType;
        }
    };

    
    render() {
        return (
            <Query query={GET_ALL_REGIONS_QUERY}>
                {({data, loading, error}) => {
                    {
                        loading && <p>Loading...</p>;
                    }
                    {
                        error && <Error error={error}/>;
                    }
                    const {regions} = data;
                    const anyRegion = regions[0];

                    //prepare data for the region select options
                    const regionsOptions = regions.map(item => (
                        <option value={item.id} key={item.id}>
                            {item.regName}
                        </option>
                    ));
                    return (
                        <Query
                            query={GET_DIVISIONS_OF_A_REGION_QUERY}
                            variables={this.getSelectedRegion(regions) || anyRegion}>
                            {({data, loading, error}) => {
                                {
                                    loading && <p>Loading...</p>;
                                }
                                {
                                    error && <Error error={error}/>;
                                }

                                const {region: province} = data;
                                const {division} = province;
                                const anyDivision = division[0];

                                const divisionsOptions = division.map(item => (
                                    <option value={item.id} key={item.id}>
                                        {item.divName}
                                    </option>
                                ));
                                return (
                                    <Query
                                        query={GET_SUBDIVISIONS_OF_A_DIVSION_QUERY}
                                        variables={division && (this.getSelectedDivision(division) || anyDivision)}>
                                        {({data, loading, error}) => {
                                            {
                                                loading && <p>Loading...</p>;
                                            }
                                            {
                                                error && <Error error={error}/>;
                                            }
                                            const {division:departement} = data;
                                            const {subDivision} = departement;

                                            const subDivisionsOptions =
                                                subDivision
                                                .map(item => (
                                                    <option value={item.id} key={item.id}>
                                                        {item.subDivName}
                                                    </option>
                                                ));

                                            return (
                                                <Query
                                                    query={GET_TOWNS_OF_A_SUBDIVISIONS_QUERY}
                                                    variables={this.getSelectedSubDivision(subDivision)}>
                                                    {({data, loading, error}) => {
                                                        {
                                                            loading && <p>Loding...</p>;
                                                        }
                                                        {
                                                            error && <Error error={error}/>;
                                                        }

                                                        console.log("these are the towns of the selected Sub division");
                                                      
                                                        const village = data.subDivision; 
                                                    const allTowns = { ...village };
                                                       const { town } = allTowns;
                                                       console.log(town)

                                     return (
                                                <Query
                                                    query={GET_CENTERS_OF_A_TOWN_QUERY}
                                                    variables={ town &&  this.getSelectedTown(town) }
                                                     >
                                                    {({data, loading, error}) => {
                                                        {
                                                            loading && <p>Loding...</p>;
                                                        }
                                                        {
                                                            error && <Error error={error}/>;
                                                        }
                                        const { town: ville} =data

                                        const theTowns= {...ville}
                                       const { center}= theTowns
                                        console.log(center)
                                                       
                                                        //*******important function'stripping off __typename')
                                                        return (

                                                            <Query query={GET_ALL_SESSIONS_QUERY}>
                                                                {({data, loading, error}) => {
                                                                  {
                                                                    loading && <p>loading...</p>;
                                                                }
                                                                {
                                                                    error && <Error error={error}/>
                                                                }

                                                                const {sessions} = data;
                                                                return (
                                                            <Query query={GET_ALL_EDUCATION_TYPES_QUERY}>
                                                                {({data, loading, error}) => {
                                                                  {
                                                                    loading && <p>loading...</p>;
                                                                }
                                                                {
                                                                    error && <Error error={error}/>
                                                                }

                                                                const {educationTypes} = data;

                                                                return (
                                                                    <Query query={GET_ALL_SERIES_OF_EDUCATION_TYPE_QUERY}
                                                                    variables={educationTypes && this.getSelectedEducType(educationTypes)}
                                                                    >
                                                                        {({data, loading, error}) => {
                                                                        {
                                                                            loading && <p>loading...</p>
                                                                        }
                                                                        {
                                                                            error && <Error error={error}/>
                                                                        }
                                                                  const {educationType} = data
                                                            const seriesEducType = {...educationType}
                                                                        const {series}= seriesEducType
                                                                        return (

                                                                            <Query query={GET_ALL_EXAMS_QUERY}>
                                                                                {({data, loading, error}) => {
                                                                                 {   loading && <p>loading...</p>
                                                                                }
                                                                                {
                                                                                    error && <Error error={error}/>
                                                                                }
                                                                              

                                                                                const {exams} = data;
             
                   return (

                                                                                    <Mutation
                                                                                        mutation={CREATE_REGISTRATION_MUTATION}
                                                                                        variables={{
                                                                                        ...this.state

                                                                                    }}>
                                                                                        {(createRegistration, {loading, error}) => (
                                                                                                <Form
                                                                                                    onSubmit={async e => {
                                                                                                    e.preventDefault();
                                                                                                    const res = await createRegistration();
                                                                                                    console.log(res);
                                                                                                }}>
                                                                                                    <h4>S'inscrire a un examen</h4>
                                                                                                    <Error error={error}/>
                                                                                                    <fieldset disabled={loading} aria-busy={loading}>
                                                                                            <StyledDivision>
                                                                                                    <CenterSelect>
                                                                                                  <select
                                                                                                            type="select"
                                                                                                            id="regionID"
                                                                                                            name="regionID"
                                                                                                            placeholder="Select a region"
                                                                                                            value={this.state.regionID}
                                                                                                            onChange={this.handleChange}
                                                                                                            required>
                                                                                                            {regionsOptions }
                                                                                                        </select>

                                                                                                        <select
                                                                                                            type="select"
                                                                                                            id="divisionID"
                                                                                                            name="divisionID"
                                                                                                            value={this.state.divisionID}
                                                                                                            onChange={this.handleChange}
                                                                                                            required>
                                                                                                            {divisionsOptions }
                                                                                                        </select>
                                                                                                        <select
                                                                                                            type="select"
                                                                                                            id="subDivisionID"
                                                                                                            name="subDivisionID"
                                                                                                            value={this.state.subDivisionID}
                                                                                                            onChange={this.handleChange}
                                                                                                            required>
                                                                                                            {subDivisionsOptions}
                                                                                                        </select>
                                                                                                        <select
                                                                                                            type="select"
                                                                                                            id="townID"
                                                                                                            name="townID"
                                                                                                            value={this.state.townID}
                                                                                                            onChange={this.handleChange}
                                                                                                            required>
                                                                                                            {town && town.map(item => (
                                                                                                              <option key={item.id} value={item.id}  >{item.townName}</option>
                                                                                                            ))  }


                                                                                                        </select>

                                                                                                        <select
                                                                                                            type="select"
                                                                                                            id="centerD"
                                                                                                            name="centerID"
                                                                                                            value={this.state.centerID}
                                                                                                            onChange={this.handleChange}
                                                                                                            required>
                                                                                                            {center && center.map(item => (
                                                                                                              <option key={item.id} value={item.id}  >{item.centerName}</option>
                                                                                                            ))  }
                                                                                                        </select>
    
                                                                                                        </CenterSelect>
                                                                                                        <OtherSelect>

                                                                                                        <select
                                                                                                            type="select"
                                                                                                            id="examID"
                                                                                                            name="examID"
                                                                                                            value={this.state.examID}
                                                                                                            onChange={this.handleChange}
                                                                                                            required>
                                                                                                            {exams && exams.map(item => (
                                                                                                              <option key={item.id} value={item.id}  >{item.examName}</option>
                                                                                                            ))  }
                                                                                                        </select>

                                                                                                        <select
                                                                                                            type="select"
                                                                                                            id="sessionID"
                                                                                                            name="sessionID"
                                                                                                            value={this.state.sessionID}
                                                                                                            onChange={this.handleChange}
                                                                                                            required>
                                                                                                            {sessions && sessions.map(item => (
                                                                                                              <option key={item.id} value={item.id}  >{item.sessionName}</option>
                                                                                                            ))  }
                                                                                                        </select>
                                                                                                        <select
                                                                                                            type="select"
                                                                                                            id="educTypeID"
                                                                                                            name="educTypeID"
                                                                                                            value={this.state.educTypeID}
                                                                                                            onChange={this.handleChange}
                                                                                                            required>
                                                                                                            {educationTypes && educationTypes.map(item => (
                                                                                                              <option key={item.id} value={item.id}  >{item.educationTypeName}</option>
                                                                                                            ))  }
                                                                                                        </select>
                                                                                                        <select
                                                                                                            type="select"
                                                                                                            id="seriesID"
                                                                                                            name="seriesID"
                                                                                                            value={this.state.seriesID}
                                                                                                            onChange={this.handleChange}
                                                                                                            required>
                                                                                                            {series && series.map(item => (
                                                                                                              <option key={item.id} value={item.id}  >{item.seriesName}</option>
                                                                                                            ))  }
                                                                                                        </select>
                                                                                                        <input
                                                                                                            type="text"
                                                                                                            id="candidateRegistrationID"
                                                                                                            name="candidateRegistrationID"
                                                                                                            placeholder="Candidate Registration ID"
                                                                                                            value={this.state.candidateRegistrationID}
                                                                                                            onChange={this.handleChange}
                                                                                                            required/>
                                                                                                        </OtherSelect>
                                                                                                       
                                                                                                        <div className="submitButton">
                                                                                                            <button type="submit">Submit{loading? "ting" : ""}</button>
                                                                                                        </div>
                                                                                            </StyledDivision>
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
                                                                }}
                                                            </Query>
                                                                );
                                                                }}
                                                            </Query>
                                                        );
                                                    }}
                                                </Query>
                                            );
                                        }}
                                    </Query>
                                );
                            }}
                        </Query>
                    );
                }}
            </Query>
                    );
                }}
            </Query>
        );
    }
}

export default Registration;
