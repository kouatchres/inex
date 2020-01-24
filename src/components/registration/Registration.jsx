import React, {Component} from "react";
import {Mutation, Query} from "react-apollo";
import Form from "../styles/Form";
import Error from "../ErrorMessage";
import styled from "styled-components";
import {createRegistrationMutation} from '../queries&Mutations&Functions/Mutations'
import {getSelectedObject} from '../queries&Mutations&Functions/Functions'
import {
  getAllRegionsQuery,
  getDivisionsOfARegionQuery,
  getSubDivisionsOfADivisionQuery,
  getCentersOfATownQuery,
  getTownsOfASubDivisionQuery,
  getAllExamsQuery,
  getAllEducTypesOfAnExam,
  getAllSeriesOfAnEducationTypeQuery,
  getAllSessionsQuery,

} from "../queries&Mutations&Functions/Queries";



const StyledDivision = styled.div `
  display: grid;
  grid-template-columns:repeat(2, 1fr);
  grid-gap:2rem;
  text-align: center;
  margin: 0 auto;
  width: 55vw;

`;

const CenterSelect = styled.div `
  display: block;
  text-align: center;
  margin: 0 auto;
  /* min-width: 40rem; */
`;

const OtherSelect = styled.div `
  display: block;
  text-align: center;
  margin: 0 auto;
  /* min-width: 40rem; */
`;



class Registration extends Component {
    state = {
         candCode: "12mn",
        divisionID: "12",
        subDivisionID: "12",
        regionID: "12",
        centerID: "12",
        townID: "12",
        sessionID: "12",
        seriesID: "12",
        examID: "12",
        educTypeID: "12",
        exam: "",
        series: "",
        session: "",
        center: "",
        candExamSession:"",
        candidate: "",
        subjects: ""
     
    };

    handleChange = e => {
        const {name, value, type} = e.target;
        const val = type === "number"? parseInt(value): value;
        this.setState({[name]: val});
    };


    
    resetForm=()=>{
        this.setState({candCode: ""})
    }
       
    // getSelectedRegion = dataSource => {
    //     // 1 copy the data source
    //     if (dataSource.length > 0) {
    //         const tempRegions = [...dataSource];
    //         // get the selected region object
    //         const selectedRegion = tempRegions.find(item => item.id === this.state.regionID);
    //         console.log("getting selected region");
    //         console.log(selectedRegion);
    //         return selectedRegion;
    //     }
    // };
    // getSelectedDivision = dataSource => {
    //     // 1 copy the data source
    //     if (dataSource.length > 0) {
    //         const tempDivisions = [...dataSource];
    //         // get the selected division object
    //         const selectedDivision = tempDivisions.find(item => item.id === this.state.divisionID);
    //         console.log(selectedDivision);
    //         return selectedDivision;
    //     }
    // };

    
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

    setSubjects=(subjectList)=>{
        this.setState({subjects:subjectList })
    }

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
    //   getCandExamSession = () => {
    //     const candExamSession = `${this.state.candCode}-${this.state.examID}-${this.state.sessionID}`
    //     console.log(candExamSession)
    //     return candExamSession;
    // }

    makeCandVariableObject = (candCodeValue) => {
        const storedCandidate = {
            "candCode": `${candCodeValue}`
        }
        return storedCandidate
    }

    getSelectedCandidate = dataSource => {
        // 1 copy the data source
        if (dataSource.length > 0) {
            const tempCandidates = [...dataSource];
            // get the selected region object
            const selectedCandidate = tempCandidates.find(item => item.candCode === this.state.candCode);
            console.log("getting selected region");
            console.log(selectedCandidate);
            return selectedCandidate;
        }
    };

    
       
    render() {
const { regionID,divisionID, subDivisionID,townID,educTypeID, centerID, examID, sessionID, seriesID, candCode}= this.state
        return (
            <Query query={getAllRegionsQuery}>
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
     const regionsOptions = regions && regions.map(item => (
                        <option value={item.id} key={item.id}>
                            {item.regName}
                        </option>
                    ));

 //*******important function'stripping off __typename')
 const refinedRegions = regions.map(({ __typename, ...others }) => others);

                    return (
                        <Query
                            query={getDivisionsOfARegionQuery}
                            variables={regions && (getSelectedObject(regions,regionID) || anyRegion)}>
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

                                const divisionsOptions =division && division.map(item => (
                                    <option value={item.id} key={item.id}>
                                        {item.divName}
                                    </option>
                                ));

                         
                                return (
                                    <Query
                                        query={getSubDivisionsOfADivisionQuery}
                                        variables={division && (getSelectedObject(division, divisionID) || anyDivision)}>
                                        {({data, loading, error}) => {
                                            {
                                                loading && <p>Loading...</p>;
                                            }
                                            {
                                                error && <Error error={error}/>;
                                            }
                                          const {division} = data;
                                            const {subDivision:arrondissement } = division
                                        console.log(arrondissement)
                                            const subDivisionsOptions =arrondissement && arrondissement.map(item => (
                                                    <option value={item.id} key={item.id}>
                                                        {item.subDivName}
                                                    </option>
                                                ));  


                                            return (
                                                <Query
                                                    query={getTownsOfASubDivisionQuery}
                                                    variables={arrondissement && getSelectedObject(arrondissement, subDivisionID)  }
                                                    >
                                                    {({data, loading, error}) => {
                                                        {
                                                            loading && <p>Loding...</p>;
                                                        }
                                                        {
                                                            error && <Error error={error}/>;
                                                        }

                                                        console.log("these are the towns of the selected Sub division");
                                                      
                                                       const {subDivision: district} = data; 
                                                       console.log(data)
                                                       const {  town} = {...district}
                                                       console.log(town)
                                                                                            
                                                return (
                                                <Query
                                                    query={getCentersOfATownQuery}
                                                    variables={town && getSelectedObject(town, townID)  }

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
                                          const refinedCenter = center && center.map(({__typename, centerName,...others})=> others)
                                                                    return(                            
                                                <Query query={getAllExamsQuery}>
                                                    {({ data, loading, error }) => {
                                                    {
                                                        loading && <p>loading...</p>;
                                                    }
                                                    {
                                                        error && <Error error={error} />;
                                                    }

                                                   const { exams } = data;
                                                    console.log(exams);
                                                   
  const refinedExams = exams && exams.map(({__typename, examName, ...others})=>others)
                                                    return (
                                                        <Query query={getAllEducTypesOfAnExam}
                                                         variables={exams && getSelectedObject(exams, examID)}>
                                                        {({ data, loading, error }) => {
                                                            {
                                                            loading && <p>loading...</p>;
                                                            }
                                                            {
                                                            error && <Error error={error} />;
                                                            }
                                                            console.log(data);
                                                            const { exam } = data;
                                                            const educTypeList = { ...exam };
                                                            const { educationType } = educTypeList;
                                                             console.log(educationType);
                                                            const educTypeOptions =
                                                            educationType &&
                                                            educationType.map(item => (
                                                                <option key={item.id} value={item.id}>
                                                                {item.educationTypeName}
                                                                </option>
                                                            )); 

                                                            return (
                                                            <Query
                                                                query={getAllSeriesOfAnEducationTypeQuery}
                                                                variables={educationType && getSelectedObject(educationType, educTypeID)}
                                                            >
                                                                {({ data, loading, error }) => {
                                                                {
                                                                    loading && <p>loading...</p>;
                                                                }
                                                                {
                                                                    error && <Error error={error} />;
                                                                }
                                                                console.log(data);

                                                                const { educationType } = data;

                                                                const seriesEducType = { ...educationType };
                                                                const { series } = seriesEducType;
                                                                console.log(series);

                                                                const refinedSeries = series && series.map(({ __typename, seriesName, ...others }) => others);
                                                                const seriesOptions =
                                                                    series &&
                                                                    series.map(item => (
                                                                    <option key={item.id} value={item.id}>
                                                                        {item.seriesName}
                                                                    </option>
                                                                    )); 
                                                                  return (
                       
                                                            <Query query={getAllSessionsQuery}>
                                                                {({data, loading, error}) => {
                                                                  {
                                                                    loading && <p>loading...</p>;
                                                                }
                                                                {
                                                                    error && <Error error={error}/>
                                                                }

                                                                const {sessions} = data;
                                                                const refinedSessions =sessions && sessions.map(({__typename, sessionName,...others})=>others)
                                                                               return (
                                                                                    <Mutation
                                                                                        mutation={createRegistrationMutation}
                                                                                        variables={{
                                                                                            ...this.state,
                                                                                         series: series && getSelectedObject(refinedSeries,seriesID),
                                                                                         exam: exams && getSelectedObject(refinedExams,examID),
                                                                                         session: sessions && getSelectedObject(refinedSessions,sessionID),
                                                                                         center: center && getSelectedObject(refinedCenter,centerID),
                                                                                         candidate: this.makeCandVariableObject(this.state.candCode),

                                                                                    }}>
                                                                                        {(createCenterAdmin, {loading, error}) => (
                                                                                          <Form
                                                                                                    onSubmit={async e => {
                                                                                                    e.preventDefault();
                                                                                                    const res = await createCenterAdmin();
                                                                                                    console.log(res);
                                                                                                    this.resetForm()
                                                                                                }}>
                                                                                                    <h4>Inscription a l'Examen</h4>
                                                                                                    <Error error={error}/>
                                                                                                    <fieldset disabled={loading} aria-busy={loading}>
                                                                                            <StyledDivision>
                                                                                                    <CenterSelect>
                                                                                                  <select
                                                                                                            type="select"
                                                                                                            id="regionID"
                                                                                                            name="regionID"
                                                                                                            placeholder="select a region"
                                                                                                            value={this.state.regionID}
                                                                                                            onChange={this.handleChange}
                                                                                                            required>
                                                                                                            <option>Choisissez une region</option>
                                                                                                            {regionsOptions }
                                                                                                        </select>

                                                                                                        <select
                                                                                                            type="select"
                                                                                                            id="divisionID"
                                                                                                            name="divisionID"
                                                                                                            value={this.state.divisionID}
                                                                                                            onChange={this.handleChange}
                                                                                                            required>
                                                                                                            <option>Choisissez un departement</option>
                                                                                                            {division && divisionsOptions }
                                                                                                        </select>
                                                                                                        <select
                                                                                                            type="select"
                                                                                                            id="subDivisionID"
                                                                                                            name="subDivisionID"
                                                                                                            value={this.state.subDivisionID}
                                                                                                            onChange={this.handleChange}
                                                                                                            required>
                                                                                                            <option>choisissez un Arrondissement</option>
                                                                                                            {arrondissement && subDivisionsOptions}
                                                                                                        </select>
                                                                                                        <select
                                                                                                            type="select"
                                                                                                            id="townID"
                                                                                                            name="townID"
                                                                                                            value={this.state.townID}
                                                                                                            onChange={this.handleChange}
                                                                                                            required>
                                                                                                            <option>choisissez une Ville</option>
                                                                                                           {town && town.map(item=>(
                                                                                                            <option key={item.id} value={item.id} >
                                                                                                              {item.townName}  </option>
                                                                                                          ))}


                                                                                                        </select>

                                                                                                        <select
                                                                                                            type="select"
                                                                                                            id="centerD"
                                                                                                            name="centerID"
                                                                                                            value={this.state.centerID}
                                                                                                            onChange={this.handleChange}
                                                                                                            required>
                                                                                                            
                                                                                                              <option>Choisissez un Centre d'Examen</option>
                                                                                                              {center && center.map(item => (
                                                                                                              <option key={item.id} value={item.id}>
                                                                                                                {item.centerName}</option>))  } 
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
 
                                                                                                            <option>Choisissez un Examen</option>
                                                                                                              {exams && exams.map(item => (
                                                                                                              <option key={item.id} value={item.id}>{item.examName}</option>))  }
                                                                                                        </select>
                                                                                                        <select
                                                                                                            type="select"
                                                                                                            id="educTypeID"
                                                                                                            name="educTypeID"
                                                                                                            value={this.state.educTypeID}
                                                                                                            onChange={this.handleChange}
                                                                                                            required>
 
                                                                                                            <option>Choisissez un Type D'enseignement</option>
                                                                                                            {educTypeOptions}
                                                                                                             
                                                                                                          </select>
                                                                                                        <select
                                                                                                            type="select"
                                                                                                            id="seriesID"
                                                                                                            name="seriesID"
                                                                                                            value={this.state.seriesID}
                                                                                                            onChange={this.handleChange}
                                                                                                            required>
 
                                                                                                            <option>Choisissez une Serie</option>
                                                                                                              {seriesOptions}
                                                                                                        </select>
                                                                                                      
                                                                                                        <select
                                                                                                            type="select"
                                                                                                            id="sessionID"
                                                                                                            name="sessionID"
                                                                                                            value={this.state.sessionID}
                                                                                                            onChange={this.handleChange}
                                                                                                            required>
                                                                                                            <option>Choisissez la Session</option>
                                                                                                              {sessions && sessions.map(item => (
                                                                                                              <option key={item.id} value={item.id}>{item.sessionName}</option>))  }
                                                                                                        </select>
                                                                                                     
                                                                                                            <input
                                                                                                               type="text"
                                                                                                               id="candCode"
                                                                                                               name="candCode"
                                                                                                               placeholder="Code Candidat"
                                                                                                               value={this.state.candCode}
                                                                                                               onChange={this.handleChange}
                                                                                                               required/>
                                                                                                        </OtherSelect>
                                                                                                       
                                                                                                        <div className="submitButton">
                                                                                                            <button type="submit">Valid{loading? "ation en cours" : "er"}</button>
                                                                                                        </div>
                                                                                            </StyledDivision>
                                                                                                    </fieldset>
                                                                                                </Form>
                                                                                        )}
                                                                                    </Mutation>
                                                                               
                                                                        );
                                                                      }
                                                                    }
                                                                    </Query>
                                                                        );
                                                                      }
                                                                    }
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