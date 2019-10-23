import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styled from 'styled-components';
import DeleteCandidate from './DeleteCandidate'

const ItemStyled = styled.div `
 background: ${props => props.theme.darkGrey};
  border: .7px solid ${props => props.theme.lightGrey};
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  background-color: white;
  width:410px;
  border-radius: 15px;
  height:300px;
  grid-gap:10px;
  box-shadow: 0 4px 10px 0 rgba(0.4,0,0,0.09);

`;

const CandAllInfo = styled.div `
display: grid;
grid-template-columns: 11fr 19fr;
height: 220px;
`;

const ButtonList = styled.div `
display:grid;
grid-template-columns: 4fr 7fr;
    width: 100%;
    border-top: 1px solid ${props => props.theme.lightGrey};
    grid-gap: 5px;
    height:45px;
    padding: 0 20px;
    padding-top:15px;
    margin-bottom:5px ;
    font-weight:bold;
    align-content:center;
    /* justify-content:center; */
    font-size:2rem;
    color:white;
`;

const CandImg = styled.div `
  padding:5px;
     height:240px;
     width:200px;
   img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
       background-size:cover;
	background-position:center;
	background-repeat:no-repeat;
  } 

  `;

const RestInfo = styled.div `

display: flex;
font-size:1.1rem;
flex-direction:column;
padding: 5px;
line-height:5px;
`;
const UpdateBtn = styled.button `
    background-color:#379;
    border-radius: 10px;
    font-size: 1.8rem;
    font-weight: bold;
    height:40px;
    a{
        color:white;
    }
 `;

const ItemInfo = styled.div `
 display:flex;
 flex-direction:row;
 text-align:left;
 `;

class Candidate extends Component {
    static propTypes = {
        eachCandidate: PropTypes.object.isRequired
    }

    render() {
        const {
            image,
            id,
            candCode,
            cand1stName,
            cand2ndName,
            cand3rdName,
            email,
            phoneNumb,
            placeOfBirth
        } = this.props.eachCandidate
        return (

            <ItemStyled>
                <CandAllInfo>
                    <CandImg>
{image && <img src={image} alt={cand1stName}/>}
                    </CandImg>
                    <RestInfo>
                        <ItemInfo>
                            <p>1st Name: {cand1stName}</p>
                        </ItemInfo>
                        <ItemInfo>
                            <p>2nd Name: {cand2ndName}</p>
                        </ItemInfo>
                        <ItemInfo>
                            <p>Last Name: {cand3rdName}</p>
                        </ItemInfo>
                        <ItemInfo>
                            <p>Birth Date: {phoneNumb}</p>
                        </ItemInfo>
                        <ItemInfo>
                            <p>Birth Place: {placeOfBirth}</p>
                        </ItemInfo>
                        <ItemInfo>
                            <p>Phone: {phoneNumb}</p>
                        </ItemInfo>
                        <ItemInfo>
                            <p>Code: {candCode}</p>
                        </ItemInfo>
                        <ItemInfo>
                            <p>Email: {email}</p>
                        </ItemInfo>
                    </RestInfo>
                </CandAllInfo>
                <ButtonList>
                    <UpdateBtn>
                        <Link
                            href={{
                            pathname: "updateCand",
                            query: {
                                id
                            }
                        }}>
                            <a>Update </a>
                        </Link>
                    </UpdateBtn>
                        <DeleteCandidate id={id}>Delete Candidate</DeleteCandidate>
                </ButtonList>
            </ItemStyled>
        )
    }
}
export default Candidate;