import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import Form from "../styles/Form";
import Error from "../ErrorMessage";
import styled from "styled-components";
import { StyledPage } from "../styles/StyledPage";
import { createCenterAdminMutation } from "../queries&Mutations&Functions/Mutations";
import { uniqueCodeGen, getSelectedObject } from "../queries&Mutations&Functions/Functions";
import {
  getAllRanksQuery,
  getSingleCenterExamSessionQuery,
  getAllRegionsQuery,
  getDivisionsOfARegionQuery,
  getSubDivisionsOfADivisionQuery,
  getCentersOfATownQuery,
  getTownsOfASubDivisionQuery,
  getAllExamsQuery,
  getAllSessionsQuery
} from "../queries&Mutations&Functions/Queries";

const StyledDivision = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  text-align: center;
  margin: 0 auto;
  /* width: 80%; */
`;

const CenterSelect = styled.div`
  display: block;
  text-align: center;
  margin: 0 auto;
.submitButton{
  padding-top:2rem;
}

`;

const OtherSelect = styled.div`
  display: block;
  text-align: center;
  margin: 0 auto;
  /* width: 20rem; */
`;

class createCenterAdmin extends Component {
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
    authPhone: ""
  };

  handleChange = e => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    this.setState({ [name]: val });
  };

  getSessionRank = () => {
    const sessionRank = `${this.state.sessionID}-${this.state.rankID}`;
    return sessionRank;
  };

  resetForm = () => {
    this.setState({ authMatricule: "", authCNI: "", authName: "", authPhone: "" });
  };

  render() {
    const { regionID, divisionID, subDivisionID, townID, centerID, examID, sessionID, rankID } = this.state;
    return (
      <Query query={getAllRegionsQuery}>
        {({ data, loading, error }) => {
          {
            loading && <p>Loading...</p>;
          }
          {
            error && <Error error={error} />;
          }
          const { regions } = data;
          const refinedRegion = regions && regions.map(({ __typename, ...others }) => others);
          //prepare data for the region select options
          const regionsOptions =
            refinedRegion &&
            refinedRegion.map(item => (
              <option value={item.id} key={item.id}>
                {item.regName}
              </option>
            ));
          return (
            <Query query={getDivisionsOfARegionQuery} variables={refinedRegion && getSelectedObject(refinedRegion, regionID)}>
              {({ data, loading, error }) => {
                {
                  loading && <p>Loading...</p>;
                }
                {
                  error && <Error error={error} />;
                }
                console.log(data);
                const { region } = data;
                const allDivs = { ...region };
                const { division } = allDivs;
                console.log(allDivs);
                console.log(division);
                const refinedDivision = division && division.map(({ __typename, ...others }) => others);

                const divisionsOptions =
                  refinedDivision &&
                  refinedDivision.map(item => (
                    <option value={item.id} key={item.id}>
                      {item.divName}
                    </option>
                  ));

                return (
                  <Query
                    query={getSubDivisionsOfADivisionQuery}
                    variables={refinedDivision && getSelectedObject(refinedDivision, divisionID)}
                  >
                    {({ data, loading, error }) => {
                      {
                        loading && <p>Loading...</p>;
                      }
                      {
                        error && <Error error={error} />;
                      }
                      const { division: departement } = data;

                      const allSubDivs = { ...departement };
                      const { subDivision } = allSubDivs;
                      console.log(subDivision);
                      const refinedDepartement = subDivision && subDivision.map(({ __typename, ...others }) => others);

                      const subDivisionsOptions =
                        refinedDepartement &&
                        refinedDepartement.map(item => (
                          <option value={item.id} key={item.id}>
                            {item.subDivName}
                          </option>
                        ));

                      return (
                        <Query
                          query={getTownsOfASubDivisionQuery}
                          variables={refinedDepartement && getSelectedObject(refinedDepartement, subDivisionID)}
                        >
                          {({ data, loading, error }) => {
                            {
                              loading && <p>Loading...</p>;
                            }
                            {
                              error && <Error>error={error}</Error>;
                            }

                            const village = data.subDivision;

                            const allTowns = { ...village };

                            const { town } = allTowns;
                            const refinedTown = town && town.map(({ __typename, townName, townCode, ...others }) => others);

                            return (
                              <Query
                                query={getCentersOfATownQuery}
                                variables={refinedTown && getSelectedObject(refinedTown, townID)}
                              >
                                {({ data, loading, error }) => {
                                  {
                                    loading && <p>Loding...</p>;
                                  }
                                  {
                                    error && <Error error={error} />;
                                  }
                                  const { town: ville } = data;
                                  const theTowns = { ...ville };
                                  const { center } = theTowns;
                                  console.log(center);
                                  const refinedCenter = center && center.map(({ __typename, centerName, ...others }) => others);
                                  return (
                                    <Query query={getAllSessionsQuery}>
                                      {({ data, loading, error }) => {
                                        {
                                          loading && <p>loading...</p>;
                                        }
                                        {
                                          error && <Error error={error} />;
                                        }

                                        const { sessions } = data;
                                        const refinedSessions =
                                          sessions && sessions.map(({ __typename, sessionName, ...others }) => others);

                                        return (
                                          <Query query={getAllRanksQuery}>
                                            {({ data, loading, error }) => {
                                              {
                                                loading && <p>loading...</p>;
                                              }
                                              {
                                                error && <Error error={error} />;
                                              }

                                              const { ranks } = data;
                                              console.log(ranks);
                                              const refinedRanks =
                                                ranks && ranks.map(({ __typename, rankName, rankCode, ...others }) => others);

                                              return (
                                                <Query query={getAllExamsQuery}>
                                                  {({ data, loading, error }) => {
                                                    {
                                                      loading && <p>loading...</p>;
                                                    }
                                                    {
                                                      error && <Error error={error} />;
                                                    }

                                                    const { exams } = data;
                                                    const refinedExams =
                                                      exams && exams.map(({ __typename, examName, ...others }) => others);
                                                    return (
                                                      <Query
                                                        query={getSingleCenterExamSessionQuery}
                                                        variables={{
                                                          exam: refinedExams && getSelectedObject(refinedExams, examID),
                                                          session: refinedSessions && getSelectedObject(refinedSessions, sessionID),
                                                          center: refinedCenter && getSelectedObject(refinedCenter, centerID)
                                                        }}>
                                                        {({ data, error, loading }) => {
                                                          console.log(data);
                                                          const { centerExamSessions } = {
                                                            ...data
                                                          };
                                                          console.log(centerExamSessions);
                                                          // remove typename from the object
                                                          const refinedCenterExamSessions = centerExamSessions && centerExamSessions.map(({
                                                            __typename,
                                                            ...others
                                                          }) => others);
                                                          // transform the array into a single object
                                                          const getObj = refinedCenterExamSessions && refinedCenterExamSessions.reduce((item) => item);
                                                          console.log(getObj);

                                                          return (
                                                            <Mutation
                                                              mutation={createCenterAdminMutation}
                                                              variables={{
                                                                ...this.state,
                                                                rank: refinedRanks && getSelectedObject(refinedRanks, rankID),
                                                                centerExamSession: getObj && getObj,
                                                                authCode: uniqueCodeGen(8)
                                                              }}
                                                            >
                                                              {(createCenterAdmin, { loading, error }) => (
                                                                <StyledPage>
                                                                  <Form
                                                                    method="POST"
                                                                    onSubmit={async e => {
                                                                      e.preventDefault();
                                                                      const res = await createCenterAdmin();
                                                                      console.log(res);
                                                                      this.resetForm();
                                                                    }}
                                                                  > 
                                                                    <h4>Inscription des Authorités de centre</h4>
                                                                    <Error error={error} />
                                                                    <fieldset disabled={loading} aria-busy={loading}>
                                                                      <StyledDivision>

                                                                        <OtherSelect>
                                                                          <select
                                                                            type="select"
                                                                            id="sessionID"
                                                                            name="sessionID"
                                                                            value={this.state.sessionID}
                                                                            onChange={this.handleChange}
                                                                            required
                                                                          >
                                                                            <option>La Session</option>
                                                                            {sessions &&
                                                                              sessions.map(item => (
                                                                                <option key={item.id} value={item.id}>
                                                                                  {item.sessionName}
                                                                                </option>
                                                                              ))}
                                                                          </select>
                                                                          <select
                                                                            type="select"
                                                                            id="examID"
                                                                            name="examID"
                                                                            value={this.state.examID}
                                                                            onChange={this.handleChange}
                                                                            required
                                                                          >
                                                                            <option>Le Examen</option>
                                                                            {exams &&
                                                                              exams.map(item => (
                                                                                <option key={item.id} value={item.id}>
                                                                                  {item.examName}
                                                                                </option>
                                                                              ))}
                                                                          </select>


                                                                          <select
                                                                            type="select"
                                                                            id="rankID"
                                                                            name="rankID"
                                                                            value={this.state.rankID}
                                                                            onChange={this.handleChange}
                                                                            required
                                                                          >
                                                                            <option>Le Rang occupé au Centre</option>
                                                                            {ranks &&
                                                                              ranks.map(item => (
                                                                                <option key={item.id} value={item.id}>
                                                                                  {item.rankName}
                                                                                </option>
                                                                              ))}
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
                                                                        <CenterSelect>
                                                                          <select
                                                                            type="select"
                                                                            id="regionID"
                                                                            name="regionID"
                                                                            placeholder="select a region"
                                                                            value={this.state.regionID}
                                                                            onChange={this.handleChange}
                                                                            required
                                                                          >
                                                                            <option>La region</option>
                                                                            {regionsOptions}
                                                                          </select>

                                                                          <select
                                                                            type="select"
                                                                            id="divisionID"
                                                                            name="divisionID"
                                                                            value={this.state.divisionID}
                                                                            onChange={this.handleChange}
                                                                            required
                                                                          >
                                                                            <option>Le departement</option>
                                                                            {division && divisionsOptions}
                                                                          </select>
                                                                          <select
                                                                            type="select"
                                                                            id="subDivisionID"
                                                                            name="subDivisionID"
                                                                            value={this.state.subDivisionID}
                                                                            onChange={this.handleChange}
                                                                            required
                                                                          >
                                                                            <option>L'Arrondissement</option>
                                                                            {subDivision && subDivisionsOptions}
                                                                          </select>
                                                                          <select
                                                                            type="select"
                                                                            id="townID"
                                                                            name="townID"
                                                                            value={this.state.townID}
                                                                            onChange={this.handleChange}
                                                                            required
                                                                          >
                                                                            <option>La Ville</option>
                                                                            {town &&
                                                                              town.map(item => (
                                                                                <option key={item.id} value={item.id}>
                                                                                  {item.townName}
                                                                                </option>
                                                                              ))}
                                                                          </select>

                                                                          <select
                                                                            type="select"
                                                                            id="centerD"
                                                                            name="centerID"
                                                                            value={this.state.centerID}
                                                                            onChange={this.handleChange}
                                                                            required
                                                                          >
                                                                            <option>Le Centre d'Examen</option>
                                                                            {center &&
                                                                              center.map(item => (
                                                                                <option key={item.id} value={item.id}>
                                                                                  {item.centerName}
                                                                                </option>
                                                                              ))}
                                                                          </select>

                                                                          <div className="submitButton">
                                                                            <button type="submit">
                                                                              Valid {loading ? "ation en cours" : "er"}
                                                                            </button>
                                                                          </div>
                                                                        </CenterSelect>
                                                                      </StyledDivision>
                                                                    </fieldset>
                                                                  </Form>
                                                                </StyledPage>
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

export default createCenterAdmin;
