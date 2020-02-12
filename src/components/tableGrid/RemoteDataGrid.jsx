import React, {Component} from "react";
import columns from "./Columns";
import {Query} from 'react-apollo'
import {DataGrid} from "tubular-react";
import {getAllCandidatesQuery} from '../queries&Mutations&Functions/Queries'
import styled from 'styled-components'

const GridStyles = styled.div `
background: #358;
font-size:2.9rem;


`;
class RemoteDataGrid extends Component {
    render() {
        return (
            <Query query={getAllCandidatesQuery}>
                {({data, loading, error}) => {
                    {
                        loading && <p>Loading...</p>
                    }
                    {
                        error && <Error error={error}/>
                    }
                    console.log(data)
                    const {candidates} = data
                    return (
                        <GridStyles>
                            <DataGrid gridName="Tubular-React" columns={columns} dataSource={candidates}/>
                        </GridStyles>
                    )
                }}
            </Query>
        )
    }
}

export default RemoteDataGrid;