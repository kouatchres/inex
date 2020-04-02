import React, { Component } from "react";
import { Query } from "react-apollo";
import Form from "../../styles/Form";
import { BiggestStyledPage } from "../../styles/StyledPage";
import Centers from './Centers'
import Error from "../../ErrorMessage";
import styled from "styled-components";
import { centersPerTownQuery } from "../../queries&Mutations&Functions/Queries";

const CenterHeadings = styled.div`
  display: grid;
  grid-template-columns:3.5fr 1fr 0.5fr 1.5fr 0.5fr;
  grid-gap: 1rem;
  color: white;
  font-size: 1.7rem;
  justify-content: left;
  background: ${props => props.theme.googleBlue};
`;

const TitleItem = styled.div`
  margin: 0 20px;
  text-align: left;

`;

const ResultsHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-gap: 0.2rem;
  font-weight: 500;
  font-size:1.5rem;
  margin: 0 20px;
justify-items: center;
align-items: center;
`;

class CenterList extends Component {
    // static propTypes = { id: PropTypes.string.isRequired };
    render() {

        return (
            <Query query={centersPerTownQuery} variables={{ id: this.props.id }}>
                {({ data, error, loading }) => {
                    const { town } = { ...data }
                    const { center, townName, townCode } = { ...town }

                    console.log(data)

                    return (

                        <BiggestStyledPage>
                            <Form
                                onSubmit={e => {
                                    e.preventDefault();
                                }}
                            >
                                <h4>
                                    Les Centres D'Examen de la ville de: {townName}
                                </h4>
                                <Error error={error} />
                                <fieldset disabled={loading} aria-busy={loading}>

                                    <CenterHeadings>

                                        <TitleItem>
                                            <span>Nom </span>
                                        </TitleItem>
                                        <TitleItem>
                                            <span>Code</span>
                                        </TitleItem>
                                        <TitleItem>
                                            <span>Numero</span>
                                        </TitleItem>
                                        <TitleItem>
                                            <span>Code pin</span>
                                        </TitleItem>
                                        <TitleItem>
                                            <span>Plus</span>
                                        </TitleItem>

                                    </CenterHeadings>
                                    {
                                        center && center.map((item) => (
                                            <Centers key={item.id} center={item} />
                                        ))
                                    }
                                </fieldset>
                            </Form>
                        </BiggestStyledPage>
                    );
                }
                }
            </Query>

        );
    }
}

export default CenterList;
