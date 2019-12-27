import React, { Component } from "react";
import { Query } from "react-apollo";
import Form from "../styles/Form";
import Link from "next/link";
import gql from "graphql-tag";
import Error from "../ErrorMessage";
import styled from "styled-components";
import DeleteRegion from "../region/DeleteRegion";

const DeleteBlock = styled.div`
  align-content: left;
`;
const UpdateBlock = styled.button`
  font-weight: bold;
  border-radius: 8px;
  font-size: 1.5rem;
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

const SelectBlock = styled.div`
  display: block;
`;
const StyledDivision = styled.div`
  display: grid;
  grid-template-columns: 7fr auto auto;
  grid-gap: 20px;
  text-align: center;
  margin: 0 auto;
  width: 70vw;
`;

const GET_ALL_EXAM_QUERY = gql`
  query GET_ALL_EXAM_QUERY {
    exams(orderBy: examName_ASC) {
      id
      examName
      examCode
    }
  }
`;

class SelectExamToModify extends Component {
  state = {
    examID: "",
    id: ""
  };

  handleChange = e => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    this.setState({ [name]: val });
  };

  render = () => {
    const { id } = this.state;
    return (
      <Query query={GET_ALL_EXAM_QUERY}>
        {({ data, loading, error }) => {
          {
            loading && <p>Loading...</p>;
          }
          {
            error && <Error error={error} />;
          }
          const { exams } = data;
          //'getting region from the state')
          console.log(exams);

          const getExam = exams.map(item => (
            <option value={item.id} key={item.id}>
              {item.examName} - {item.examCode}
            </option>
          ));

          return (
            <Form
              onSubmit={async e => {
                e.preventDefault();
                const res = await updateExam();
                console.log(res);
              }}
            >
              <h5>Modification d'un Examen</h5>
              <Error error={error} />
              <fieldset disabled={loading} aria-busy={loading}>
                <StyledDivision>
                  <SelectBlock>
                    <select type="select" id="id" name="id" value={this.state.id} onChange={this.handleChange} required>
                      <option>Choisissez l'Examen a modifier </option>
                      {getExam}
                    </select>
                  </SelectBlock>

                  <UpdateBlock>
                    <Link href={{ pathname: "../updates/updateExam", query: { id } }}>
                      <a>Update</a>
                    </Link>
                  </UpdateBlock>
                  <DeleteBlock>
                    <DeleteRegion id={this.state.id}>Delete</DeleteRegion>
                  </DeleteBlock>
                </StyledDivision>
              </fieldset>
            </Form>
          );
        }}
      </Query>
    );
  };
}

export default SelectExamToModify;
