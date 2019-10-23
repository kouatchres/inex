import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Link from 'next/link'
import DeleteRegion from './DeleteRegion'

const RegionRow = styled.div `
display:grid;
width:50vw;
grid-template-columns:2fr 2fr 1fr 1fr ;
grid-gap:15px;
background-color:${props => props.theme.lightGrey};
align-items:center;
justify-items:center;
border-bottom:1px solid black;
padding:  5px 15px;
`;
const CellBlock = styled.div `
  align-content:left;
 text-align:left;
  `;
const DeleteBlock = styled.div `
/* width:25vw; */
align-content:left;
   `;
const UpdateBlock = styled.button `
justify-content:left;
width: 7vw;
  font-weight: bold;
  border-radius:8px;
  font-size:1.5rem;
  height:30px;
  border:none;
  padding:5px;
  align-items:center;
  background-color: white;
  color: black;
  border: 2px solid #4CAF50; /* Green */
  :hover{
    cursor:pointer;
    background-color: #4CAF50;
     color: white;
}
    `;


class regionList extends Component {
    static propTypes = {
        eachRegion: PropTypes.object.isRequired
    }

    render() {
        const {regName, regCode, id} = this.props.eachRegion
        return (
            <RegionRow>
                <CellBlock>
                    <span >{regName}</span>
                </CellBlock>
                <CellBlock>
                    <span >{regCode}</span>
                </CellBlock>
                <UpdateBlock>
                    <Link
                        href={{
                        pathname: 'regionUpdate',
                        query: {id}
                    }}>
                        <a >Update</a>
                    </Link>
                </UpdateBlock>
                <DeleteBlock>
                <DeleteRegion id={id}>Delete</DeleteRegion>
                </DeleteBlock>
            </RegionRow>
        )
    }
}
export default regionList;