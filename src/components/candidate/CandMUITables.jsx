import React, { Component } from "react";
import { Query } from "react-apollo";
import MUIDataTable from "mui-datatables";
import "typeface-roboto";
import { Paper, MuiThemeProvider, createMuiTheme, typography } from "@material-ui/core/styles";
import { getAllCandidatesQuery } from "../queries&Mutations&Functions/Queries";

const theme = createMuiTheme({ typography: { fontSize: 16 } });
class CandMUITables extends Component {
  render() {
    const columns = [
      {
        name: "cand1stName",
        label: "First Name",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "cand2ndName",
        label: "Last Name",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "birthPlace",
        label: "Birth Place",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "candCode",
        label: "Code",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "phoneNumb",
        label: "Phone",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "email",
        label: "Email",
        options: {
          filter: true,
          sort: true
        }
      }
    ];
    const theColumns = [{ name: "First Name", label: "cand1stName" }, "last Name", "Email", "Phone", "Birth Plaace", "Code"];

    const options = {
      filterType: "checkbox"
    };

    return (
      <Query query={getAllCandidatesQuery}>
        {({ data, loading, error }) => {
          {
            loading && <p> Loading...</p>;
          }
          {
            error && <Error error={error} />;
          }
          const { candidates } = data;
          console.log(candidates);
          return (
            <MuiThemeProvider theme={theme}>
              <Paper>
                <MUIDataTable title={"Candidate List"} data={candidates} columns={columns} options={options} />
              </Paper>
            </MuiThemeProvider>
          );
        }}
      </Query>
    );
  }
}

export default CandMUITables;
