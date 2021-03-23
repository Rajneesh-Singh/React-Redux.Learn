import React, { useState } from "react";
import { fetch_user } from "./store/actions/userAction";
import { edit_user } from "./store/actions/userAction";
import { delete_user } from "./store/actions/userAction";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import {
  Button,
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  TablePagination,
} from "@material-ui/core";

const table = {
  fontSize: "18px",
};

function FormDetails({ fetchUser, users, details, editUser, deleteUser }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const editHandler = (name, age, jobType, experience, city, states, id) => {
    const data = {
      id: id,
      name: name,
      age: age,
      job_type: jobType,
      experience: experience,
      city: city,
      state: states,
    };
    console.log("editUserData", data);
    editUser(data);
  };

  const deleteHandler = (id) => {
    deleteUser(id);
  };

  return (
    <Grid container spacing={3}>
      <Grid item md="12" xs="12">
        <br />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={table}>Name</TableCell>
              <TableCell style={table}> Age</TableCell>
              <TableCell style={table}> Job Type</TableCell>
              <TableCell style={table}> Experience</TableCell>
              <TableCell style={table}> City</TableCell>
              <TableCell style={table}> State</TableCell>
              <TableCell style={table}> City</TableCell>
              <TableCell style={table}> State</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {details &&
              details
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((val, i) => {
                  return (
                    <TableRow>
                      <TableCell> {val.name ? val.name : ""}</TableCell>
                      {/* <TableCell>{ val.id} </TableCell> */}
                      <TableCell>{val.age ? val.age : ""}</TableCell>
                      <TableCell>{val.job_type ? val.job_type : ""} </TableCell>
                      <TableCell>
                        {val.experience ? val.experience : ""}{" "}
                      </TableCell>
                      <TableCell>{val.city ? val.city : ""} </TableCell>
                      <TableCell>{val.state ? val.state : ""} </TableCell>
                      <TableCell>
                        {" "}
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() =>
                            editHandler(
                              val.name,
                              val.age,
                              val.job_type,
                              val.experience,
                              val.city,
                              val.state,
                              val.id
                            )
                          }
                        >
                          Edit
                        </Button>{" "}
                      </TableCell>
                      <TableCell>
                        {" "}
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => deleteHandler(val.id)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={details && details.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Grid>
    </Grid>
  );
}

const mapStateToprops = (state) => {
  return {
    details: state.userData.userData,
    editDataDetails: state.userData.editData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (data) => dispatch(fetch_user(data)),
    editUser: (data) => dispatch(edit_user(data)),
    deleteUser: (id) => dispatch(delete_user(id)),
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(FormDetails);
