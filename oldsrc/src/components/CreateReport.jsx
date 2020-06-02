import React, { Component } from "react";
import { Mutation } from "react-apollo";
import Form from "./styles/Form";
import gql from "graphql-tag";
import Error from "./ErrorMessage";

const CREATE_NEW_REPORT_MUTATION = gql`
  mutation CREATE_NEW_REPORT_MUTATION($reportName: String!, $reportCode: String!) {
    createReport(reportName: $reportName, reportCode: $reportCode) {
      id
      reportName
    }
  }
`;

const CREATE_REPORT_MUTATION = gql`
  mutation CREATE_REPORT_MUTATION($reportName: String!, $reportCode: String!) {
    CreateReport(reportName: $regName, reportCode: $reportCode) {
      id
      reportName
    }
  }
`;

class CreateReport extends Component {
  state = {
    reportName: "",
    reportCode: ""
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    this.setState({ [name]: val });
  };

  render() {
    return (
      <Mutation mutation={CREATE_NEW_REPORT_MUTATION} variables={this.state}>
        {(createReport, { loading, error }) => (
          <Form
            onSubmit={async e => {
              e.preventDefault();
              const res = await createReport();
              console.log(res);
            }}
          >
            <h5>New Report</h5>
            <Error error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <input
                type="text"
                id="reportName"
                name="reportName"
                placeholder="Report Name"
                value={this.state.reportName}
                onChange={this.handleChange}
                required
              />
              <input
                type="text"
                id="reportCode"
                name="reportCode"
                placeholder="Report Code"
                value={this.state.reportCode}
                onChange={this.handleChange}
                required
              />
              <div className="submitButton">
                <button type="submit">Submit{loading ? "ting" : ""}</button>
              </div>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}
export default CreateReport;
