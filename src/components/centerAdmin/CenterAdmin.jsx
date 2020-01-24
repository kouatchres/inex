import React, {Component} from "react";
import {Mutation, Query} from "react-apollo";
import Form from "../styles/Form";
import Error from "../ErrorMessage";
import styled from "styled-components";
import {createCenterAdminMutation} from '../queries&Mutations&Functions/Mutations'
import {uniqueCodeGen, getSelectedObject} from '../queries&Mutations&Functions/Functions'
import {
  getAllRanksQuery,
  getAllRegionsQuery,
  getDivisionsOfARegionQuery,
  getSubDivisionsOfADivisionQuery,
  getCentersOfATownQuery,
  getTownsOfASubDivisionQuery,
  getAllExamsQuery,
  getAllSessionsQuery,

} from "../queries&Mutations&Functions/Queries";



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



class CenterAdmin extends Component {
    state = {
       
        rankID: "12",
        divisionID: "12",
        subDivisionID: "12",
        regionID: "12",
        centerID: "12",
        examID: "12",
        sessionID: "12",
        townID: "12",
        authName: "",
        authMatricule: "",
        authCNI: "",
        authPhone: "",
    };

    handleChange = e => {
        const {name, value, type} = e.target;
        const val = type === "number"? parseInt(value): value;
        this.setState({[name]: val});
    };


   
    getSessionRank =()=>{
      const sessionRank= `${this.state.sessionID}-${this.state.rankID}`
      return sessionRank
    }


resetForm=()=>{
  this.setState({ authMatricule:"" , authCNI:"", authName:"", authPhone:""})
}

    render() {
  const { regionID, divisionID, subDivisionID, townID,centerID, examID, sessionID, rankID} = this.state
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
     const regionsOptions = regions.map(item => (
                        <option value={item.id} key={item.id}>
                            {item.regName}
                        </option>
                    ));

 //*******important function'stripping off __typename')
 const refinedRegions = regions.map(({ __typename, ...others }) => others);

                    return (
                        <Query
                            query={getDivisionsOfARegionQuery}
                            variables={ regions && (getSelectedObject(regions, regionID)|| anyRegion)}>
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
                                        query={getSubDivisionsOfADivisionQuery}
                                        variables={division && (getSelectedObject(division,divisionID)|| anyDivision)}>
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
                                            const subDivisionsOptions =arrondissement.map(item => (
                                                    <option value={item.id} key={item.id}>
                                                        {item.subDivName}
                                                    </option>
                                                ));  


                                            return (
                                                <Query
                                                    query={getTownsOfASubDivisionQuery}
                                                    variables={arrondissement && getSelectedObject(arrondissement,subDivisionID)  }
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
                                                    variables={town && getSelectedObject(town,townID)  }

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
                                                            <Query query={getAllRanksQuery}>
                                                                {({data, loading, error}) => {
                                                                  {
                                                                    loading && <p>loading...</p>;
                                                                }
                                                                {
                                                                    error && <Error error={error}/>
                                                                }

                                                                const {ranks} = data;
                                                                console.log(ranks)
                                                                const refinedRanks= ranks && ranks.map(({__typename, rankName,rankCode,...others})=>others)
                                                                 
                                                                     return (

                                                                            <Query query={getAllExamsQuery}>
                                                                                {({data, loading, error}) => {
                                                                                 {   loading && <p>loading...</p>
                                                                                }
                                                                                {
                                                                                    error && <Error error={error}/>
                                                                                }
                                                                              

                                                                                const {exams} = data;
                                                                            const refinedExams= exams && exams.map(({__typename, examName,...others})=>others)
                                                                            
                                                                               return (
                                                                                    <Mutation
                                                                                        mutation={createCenterAdminMutation}
                                                                                        variables={{
                                                                                        ...this.state,
                                                                                        exam: exams &&  getSelectedObject(refinedExams,examID),
                                                                                        rank: ranks &&  getSelectedObject(refinedRanks,rankID),
                                                                                        session: sessions  && getSelectedObject(refinedSessions,sessionID),
                                                                                        center: center && getSelectedObject(refinedCenter,centerID),
                                                                                        authCode: uniqueCodeGen(8),
                                                                                        
                                                                                        


                                                                                    }}>
                                                                                        {(createCenterAdmin, {loading, error}) => (
                                                                                          <Form
                                                                                                    onSubmit={async e => {
                                                                                                    e.preventDefault();
                                                                                                    const res = await createCenterAdmin();
                                                                                                    console.log(res);
                                                                                                    this.resetForm()
                                                                                                }}>
                                                                                                    <h4>inscription des Authorites du centre</h4>
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
                                                                                                            id="sessionID"
                                                                                                            name="sessionID"
                                                                                                            value={this.state.sessionID}
                                                                                                            onChange={this.handleChange}
                                                                                                            required>
                                                                                                            <option>Choisissez la Session</option>
                                                                                                              {sessions && sessions.map(item => (
                                                                                                              <option key={item.id} value={item.id}>{item.sessionName}</option>))  }
                                                                                                        </select>
                                                                                                        <select
                                                                                                            type="select"
                                                                                                            id="rankID"
                                                                                                            name="rankID"
                                                                                                            value={this.state.rankID}
                                                                                                            onChange={this.handleChange}
                                                                                                            required>
                                                                                                                      <option>Le Rang que vous occupez</option>
                                                                                                            {ranks && ranks.map(item=> (
                                                                                                              <option key={item.id} value={item.id}  >
                                                                                                                {item.rankName}  </option>))}
                                                                                                        </select>

                                                                                                          <input
                                                                                                              type="text"
                                                                                                              id="authName"
                                                                                                              name="authName"
                                                                                                              placeholder="Noms de l'authorite"
                                                                                                              value={this.state.authName}
                                                                                                              onChange={this.handleChange}
                                                                                                              required
                                                                                                            />
                                                                                                          <input
                                                                                                              type="text"
                                                                                                              id="authPhone"
                                                                                                              name="authPhone"
                                                                                                              placeholder="No Tel:"
                                                                                                              value={this.state.authPhone}
                                                                                                              onChange={this.handleChange}
                                                                                                              required
                                                                                                            />
                                                                                                          <input
                                                                                                              type="text"
                                                                                                              id="authMatricule"
                                                                                                              name="authMatricule"
                                                                                                              placeholder="Matricule"
                                                                                                              value={this.state.authMatricule}
                                                                                                              onChange={this.handleChange}
                                                                                                              required
                                                                                                            />
                                                                                                          <input
                                                                                                              type="text"
                                                                                                              id="authCNI"
                                                                                                              name="authCNI"
                                                                                                              placeholder="No CNI"
                                                                                                              value={this.state.authCNI}
                                                                                                              onChange={this.handleChange}
                                                                                                              required
                                                                                                            />
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

export default CenterAdmin;
