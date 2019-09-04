import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styled from 'styled-components';

const ItemStyled = styled.div `
 background: ${props => props.theme.darkGrey};
  border: .7px solid ${props => props.theme.lightGrey};
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  background-color: white;
  width:410px;
  border-radius: 7px;
  height:300px;
`;

const CandAllInfo = styled.div `
display: grid;
grid-template-columns: 11fr 19fr;
height: 220px;
`;

const ButtonList = styled.div `
display:grid;
grid-template-columns:repeat(2, 1fr);
    width: 100%;
    border-top: 1px solid ${props => props.theme.lightGrey};
    grid-gap: 5px;
    height:20px;
    padding: 15px;
    margin-bottom:25px ;
    font-weight:bold;
    font-size:2.5rem;
    color:white;
`;

const CandImg = styled.div `
  padding:5px;

   img {
    max-width: 100%;
    min-width: 100px;
    width:150px;
    object-fit: cover;
    border-radius: 12px;
    height:220px;
    
  }

  `;

const RestInfo =styled.div`

display: flex;
font-size:1.1rem;
flex-direction:column;
padding: 5px;
line-height:5px;
`;
const UpdateBtn =styled.button`
    background-color:#359;
    border-radius: 10px;
    font-size: 2.5rem;
    font-weight: normal;
    color:white;
 `;
  const DelBtn = styled.button`
  color: white;
  font-weight: bold;
  background-color:#375;
  border-radius:10px;
  font-size:2.5rem;
`;
 
 const ItemInfo =styled.div`
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
                            <Link href={{
                                pathname: "/update",
                                query: {id: id} }}>
                                <a> Update </a>
                            </Link>
                    </UpdateBtn>
                    <DelBtn>Delete</DelBtn>
                </ButtonList>
            </ItemStyled>
        )
    }
}
export default Candidate;