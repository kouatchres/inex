import React, {Component} from "react";
import { Query} from "react-apollo";
import Form from "../styles/Form";
import gql from "graphql-tag";
import Link from 'next/link';
import Error from "../ErrorMessage";
import styled from "styled-components";
import DeleteDivision from './DeleteDivision';

const ButtonBlock =styled.div`
  display:grid;
  grid-template-columns:1fr 1fr 6fr;
  grid-gap:2rem;
`;
const DeleteBlock = styled.div `align-content: left;`;
const UpdateBlock = styled.button `
	font-weight: bold;
	border-radius: 8px;
	font-size: 1.3rem;
	height: 30px;
	border: none;
	padding: 5px;
	align-items: center;
	background-color: white;
	color: black;
	border: 2px solid #4caf50; /* Green */
	:hover {
		cursor: pointer;
		background-color: #4c50;
		color: #4caf50;
	}
`;

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

const GET_ALL_REGIONS_QUERY = gql `
  query GET_ALL_REGIONS_QUERY {
    regions(orderBy: regName_DESC) {
    regName
    regCode
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

class SelectTownToModify extends Component {
    state = { 
        regionID: '125',
        divisionID: '125',
        subDivisionID: '125',
        townID: '125',
        centerID: '125',
        id: '125'
    };

    handleChange = e => {
        const {name, value, type} = e.target;
        const val = type === "number"? parseInt(value): value;
        this.setState({[name]: val});
    };

    getselectedRegion = dataSource => {
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

    getselectedDivision = dataSource => {
        // 1 copy the data source
        if (dataSource.length > 0) {
            const tempDivisions = [...dataSource];
            // get the selected division object
            const selectedDivision = tempDivisions.find(item => item.id === this.state.divisionID);
            console.log(selectedDivision);
            return selectedDivision;
        }
    };

    getselectedSubDivision = (dataSource) => {
        // 1 copy the data source
        if (dataSource.length > 0) {
            const tempSubDivisions = [...dataSource];
            // get the selected division object
            const selectedSubDivision = tempSubDivisions.find(item => item.id === this.state.subDivisionID);

            console.log(selectedSubDivision);
            return selectedSubDivision;
        }
    };

    getselectedTown = dataSource => {
        // 1 copy the data source
        if (dataSource.length > 0) {
            const tempTown = [...dataSource];
            // get the selected division object
            const selectedTown = tempTown.find(item => item.id === this.state.townID);

            console.log(selectedTown);
            return selectedTown;
        }
    };

    getselectedCenter = dataSource => {
        // 1 copy the data source
        if (dataSource.length > 0) {
            const tempCenter = [...dataSource];
            // get the selected division object
            const selectedCenter = tempCenter.find(item => item.id === this.state.id);

            console.log(selectedCenter);
            return selectedCenter;
        }
    };

    
    render() {
// make theses variables available in the render method
        const {id } = this.state
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
                            variables={this.getselectedRegion(regions) || anyRegion}>
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
                                        variables={division && (this.getselectedDivision(division) || anyDivision)}>
                                        {({data, loading, error}) => {
                                            {
                                                loading && <p>Loading...</p>;
                                            }
                                            {
                                                error && <Error error={error}/>;
                                            }
                                            const {division: departement} = data;
                                            const {subDivision} = departement;
const anySubDivision = subDivision[0]

                                            const subDivisionsOptions = subDivision.map(item => (
                                                <option value={item.id} key={item.id}>
                                                    {item.subDivName}
                                                </option>
                                            ));

                                            return (
                                                <Query
                                                    query={GET_TOWNS_OF_A_SUBDIVISIONS_QUERY}
                                                    variables={subDivision && (this.getselectedSubDivision(subDivision)|| anySubDivision)}>
                                                    {({data, loading, error}) => {
                                                        {
                                                            loading && <p>Loding...</p>;
                                                        }
                                                        {
                                                            error && <Error error={error}/>;
                                                        }

                                                        console.log("these are the towns of the selected Sub division");

                                                        const {subDivision} = data;
                                                        console.log(data)
                                                        const newTowns = {...subDivision}
                                                        const {town} = newTowns
                                                        const anyTown = town[0]
                                                        console.log(newTowns)
                                                        console.log(town)
                                                                    return (

                                                                            <Form
                                                                                    onSubmit={async e => {
                                                                                    e.preventDefault();
                                                                                    const res = await updateCenter();
                                                                                    console.log(res);
                                                                                }}>
                                                                                    <h4>Moddifie une Ville</h4>
                                                                                    <Error error={error}/>
                                                                                    <fieldset disabled={loading} aria-busy={loading}>
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
                                                                                                    {regionsOptions}
                                                                                                </select>

                                                                                                <select
                                                                                                    type="select"
                                                                                                    id="divisionID"
                                                                                                    name="divisionID"
                                                                                                    value={this.state.divisionID}
                                                                                                    onChange={this.handleChange}
                                                                                                    required>
                                                                                                    <option>Choisissez un departement</option>
                                                                                                    {divisionsOptions}
                                                                                                </select>
                                                                                                <select
                                                                                                    type="select"
                                                                                                    id="subDivisionID"
                                                                                                    name="subDivisionID"
                                                                                                    value={this.state.subDivisionID}
                                                                                                    onChange={this.handleChange}
                                                                                                    required>
                                                                                                    <option>choisissez un Arrondissement</option>
                                                                                                    {subDivisionsOptions}
                                                                                                </select>

                                                                                                <select
                                                                                                    type="select"
                                                                                                    id="id"
                                                                                                    name="id"
                                                                                                    value={this.state.id}
                                                                                                    onChange={this.handleChange}
                                                                                                    required>

                                                                                                    <option>Choisissez une Ville</option>
                                                                                                    {town && (town.map(item => (
                                                                                                        <option key={item.id} value={item.id}>
                                                                                                {item.townName} </option>
                                                                                                    )))}
                                                                                                </select>

                                                                                            </CenterSelect>

                                                                                         <ButtonBlock>

                                                                                            <UpdateBlock>
                                                                                                <Link href={{ pathname: "../updates/updateTown", query: { id } }}>
                                                                                                    <a>Valider</a>
                                                                                                </Link>
                                                                                            </UpdateBlock>
                                                                                            <DeleteBlock>
                                                                                                <DeleteDivision id={this.state.id}>Delete</DeleteDivision>
                                                                                            </DeleteBlock>
                                                                                         </ButtonBlock>
                                                                                    </fieldset>
                                                                                </Form>
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
export default SelectTownToModify;
