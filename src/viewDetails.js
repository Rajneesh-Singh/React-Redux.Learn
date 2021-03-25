import React, { useState, useEffect } from "react";
import { fetchViewUserDetails } from "./store/actions/userAction";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import {
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

function ViewDetails({ fetchViewDetails, details }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    fetchViewDetails();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Grid container spacing={3}>
      <Grid item md="12" xs="12">
        <br />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={table}>User ID</TableCell>
              <TableCell style={table}> ID</TableCell>
              <TableCell style={table}> Title</TableCell>
              <TableCell style={table}> Completed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {details &&
              details
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((val, i) => {
                  return (
                    <TableRow>
                      <TableCell> {val.userId ? val.userId : ""}</TableCell>
                      <TableCell>{val.id ? val.id : ""}</TableCell>
                      <TableCell>{val.title ? val.title : ""} </TableCell>
                      <TableCell>
                        {val.completed ? 'Yes' : 'No'}
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
    details: state.userData.viewData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchViewDetails: () => dispatch(fetchViewUserDetails()),
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(ViewDetails);
