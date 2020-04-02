import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CandRegis from './CandRegis'

const RegionRow = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 1rem;
    font-size:1.4rem;
	background-color: ${(props) => props.theme.lightGrey};
	align-items: left;
	justify-items: left;
	border-bottom: 1px solid black;
    padding-left: 20px;
`;

const CellBlock = styled.div`
	align-content: left;
	text-align: left;
`;


const TitleItem = styled.div`
  margin: 0 20px;
  text-align: left;
  /* min-width:7vw; */
  /* border-right: 1px solid black; */
  /* width: 25%; */
  /* padding-left: 15px; */
`;

const SeriesHeadings = styled.div`
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	grid-gap: 0.5rem;
    font-size:1.3rem;
	align-items: left;
	justify-items: left;
   
    background-color: ${(props) => props.theme.goldenBrown};
	border-bottom: 1px solid black;
`;

class SeriesTitles extends Component {
    static propTypes = {
        CESS: PropTypes.object.isRequired
    };

    render() {
        const { registration, series } = { ...this.props.CESS };
        return (
            <>

                <RegionRow>
                    <CellBlock>
                        <span>{series.seriesName}</span>
                    </CellBlock>
                    <CellBlock>
                        <span>{series.seriesCode}</span>
                    </CellBlock>
                </RegionRow>
                <SeriesHeadings>

                    <TitleItem>
                        <strong> <span>Nom :</span></strong>
                    </TitleItem>
                    <TitleItem>
                        <strong> <span>Prenom:</span></strong>
                    </TitleItem>
                    <TitleItem>
                        <strong> <span>Autres:</span></strong>
                    </TitleItem>
                    <TitleItem>
                        <strong> <span>Date:</span></strong>
                    </TitleItem>
                    <TitleItem>
                        <strong> <span>Lieu:</span></strong>
                    </TitleItem>
                    <TitleItem>
                        <strong>  <span>Sexe:</span></strong>
                    </TitleItem>
                    <TitleItem>
                        <strong>  <span>Tel::</span></strong>
                    </TitleItem>

                    <TitleItem>
                        <strong>  <span>Resultat:</span></strong>
                    </TitleItem>

                </SeriesHeadings>
                {
                    registration && registration.map((item) => (
                        <CandRegis key={item.id} regisInfo={item} />
                    ))
                }
            </>
        );
    }
}
export default SeriesTitles;
