import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Link from 'next/link'

const CandItem = styled.div `

  width: 100%;
  display: flex;
  flex-direction:row;
  border-bottom: 1px solid darkgrey;
  padding: 2px 0;
  font-size: 1.4rem;
  font-weight:bold;
  align-items:center;
  `;
const CellBlock = styled.div `
  width: 13%;
  align-content:left;
  `;
const ActionBlock = styled.div `
  width: 13%;
background: blue;
  `;
const PicBlock = styled.div `
   width: 13%;
  align-content:center;
  display: grid;
  margin: 0 8px;
  /* grid-template-columns: 1fr; */


`;

class CandLine extends Component {
    static propTypes = {
        eachCandidate: PropTypes.object.isRequired
    }

    render() {
        const {
            cand1stName,
            cand2ndName,
            cand3rdName,
            candCode,
            email,
            phoneNumb,
            placeOfBirth,
            image,
            id
        } = this.props.eachCandidate
        return (
            <CandItem>
                <PicBlock>
                    <img width="120px" height="70px" src={image} alt="item"/>
                </PicBlock>
                <CellBlock>
                    <span className="name">{cand1stName}</span>
                </CellBlock>
                <CellBlock>
                    <span className="name">{cand2ndName}</span>
                </CellBlock>
                <CellBlock>
                    <span className="name">{cand3rdName}</span>
                </CellBlock>
                <CellBlock>
                    <span className="name">{email}</span>
                </CellBlock>
                <CellBlock>
                    <span className="name">{candCode}</span>
                </CellBlock>
                <CellBlock>
                    <span className="name">{phoneNumb}</span>
                </CellBlock>
                <CellBlock>
                    <span className="name">{placeOfBirth}</span>
                </CellBlock>
                <ActionBlock>
                    <div className="name">
                        <Link
                            href={{
                            pathname: 'updatePage',
                            query: {id}
                        }}>
                            <a >Update</a>
                        </Link>
                    </div>
                </ActionBlock>
                <ActionBlock>
                    <div className="name">Delete</div>
                </ActionBlock>
            </CandItem>

        );
    }
}
export default CandLine;