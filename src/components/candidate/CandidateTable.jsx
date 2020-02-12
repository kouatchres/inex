import React, { Component } from 'react'
import { forwardRef } from 'react';
import MaterialTable from 'material-table'
import {Query} from 'react-apollo'
import { 
    AddBox, 
    ArrowDownward,
    Check,
    ChevronLeft,
    ChevronRight,
    Clear,
    DeleteOutline,
    Edit,
    FilterList,
    FirstPage,
    LastPage,
    Remove,
    SaveAlt,
    Search,
    ViewColumn,

} from "@material-ui/icons";
import { getAllCandidatesQuery } from '../queries&Mutations&Functions/Queries';
import styled from 'styled-components'

const ImgStyles = styled.div`
            img{
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          &:hover {
           transition: all 2s ease-in-out;
           transform: scale(2.5);
    }
            }
`;
const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

  {/* <MaterialTable
  icons={tableIcons}
/> */}
class CandidateTable extends Component {
  render() {
    return (
      <Query  query={getAllCandidatesQuery}  >
      {({data, loading, error})=>{

          {loading && <p>Loading...</p>}
          {error && <Error error={error}  />}
          const {candidates}= data
          console.log(candidates)
          return(
<MaterialTable
title="Candidate Data Preview"
icons={tableIcons}
columns={[ 
    
    {title: 'image', filed:'candidates.image',
     render:candidates=>(
        <ImgStyles>
         <img  src={candidates.image}  alt={candidates.cand1stName} />
        </ImgStyles>    
     ),},
    {title: 'First Name', field: 'cand1stName'},
    {title:'Last Name'  , field:  'cand2ndName'  },
    {title:'Sex'  , field:'genderName'  },
    {title:'Email'  , field:'email'  },
    {title:'Phone'  , field:'phoneNumb'  },
    {title:'Code'  , field:'candCode'  },
    ]}
data={candidates}
/>
          )
      }}  
      </Query>
    )
  }
}

export default CandidateTable
