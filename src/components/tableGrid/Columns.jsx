import {
    ColumnDataType,
    ColumnModel,
    ColumnSortDirection
  } from "tubular-common";
  
  const columns = [
    new ColumnModel("cand1stName", {
      dataType: ColumnDataType.text,
      filterable: true,
      isKey: true,
      label: "First Name",
      sortDirection: ColumnSortDirection.Ascending,
      sortOrder: 1,
      sortable: true
    }),
    new ColumnModel("cand2ndName", {
      dataType: ColumnDataType.text,
      filterable: true,
      isKey: true,
      label: "Last Name",
      sortDirection: ColumnSortDirection.Ascending,
      sortOrder: 1,
      sortable: true
    }),
    new ColumnModel("email", {
      dataType: ColumnDataType.text,
      filterable: true,
      isKey: true,
      label: "Email",
      sortDirection: ColumnSortDirection.Ascending,
      sortOrder: 1,
      sortable: true
    }),
    new ColumnModel("placeOfBirth", {
      dataType: ColumnDataType.text,
      filterable: true,
      isKey: true,
      label: "Birth Place",
      sortDirection: ColumnSortDirection.Ascending,
      sortOrder: 1,
      sortable: true
    }),
  
  ];
  export default columns;
  