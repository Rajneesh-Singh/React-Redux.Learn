import React, {useState} from 'react';
import {fetch_user} from './store/actions/userAction'
import {edit_user} from './store/actions/userAction'
import {delete_user} from './store/actions/userAction'
import {connect} from 'react-redux'
import { Grid } from '@material-ui/core';
import {
    Button,
    Table,
    TableCell,
    TableRow,
    TableHead,
    TableBody,
  TablePagination
  } from '@material-ui/core'


function FormDetails({ fetchUser, users, details, editUser, deleteUser }) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);



  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }

  const editHandler = (name, age, jobType, experience, city, states, id) => {
    const data = {
        id: id,
        name: name,
        age: age,
        job_type: jobType,
        experience: experience,
        city: city,
        state: states
      }
      console.log('editUserData', data)
      editUser(data)
  }
  
  const deleteHandler = (id) => {
    deleteUser(id)
  }

 return (
    <Grid container spacing={3} style={{ padding: '15px'}}>
     <React.Fragment>
     <br />
               <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell> Age</TableCell>
                      <TableCell> Job Type</TableCell>
                      <TableCell> Experience</TableCell>
                      <TableCell> City</TableCell>
                      <TableCell> State</TableCell>
                      <TableCell> City</TableCell>
                      <TableCell> State</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  {details && details.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((val, i) => { 
                    return (
                  <TableRow>
                     <TableCell> { val.name ? val.name : ''}</TableCell>
                      {/* <TableCell>{ val.id} </TableCell> */}
                      <TableCell>{val.age ? val.age : ''}</TableCell>
                      <TableCell>{val.job_type ? val.job_type : ''} </TableCell>
                      <TableCell>{val.experience ? val.experience : ''} </TableCell>
                      <TableCell>{val.city ? val.city : ''}  </TableCell>
                      <TableCell>{val.state ? val.state : ''}  </TableCell>
                      <TableCell>  <Button variant="contained" color="primary" onClick= {() => editHandler(val.name, val.age , val.job_type, val.experience, val.city, val.state, val.id)}
      >
        Edit
      </Button> </TableCell>
                      <TableCell> <Button variant="contained" color="primary" onClick={() => deleteHandler(val.id)}
      >
        Delete
      </Button></TableCell>
                  </TableRow>
                    )
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
        </React.Fragment>
    </Grid>
  );


}

const mapStateToprops = state =>{
  return {
    details: state.userData.userData,
    editDataDetails: state.userData.editData
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    fetchUser:(data) => dispatch(fetch_user(data)),
    editUser:(data) => dispatch(edit_user(data)),
    deleteUser:(id) => dispatch(delete_user(id))
  }
}

export default connect(mapStateToprops , mapDispatchToProps)(FormDetails);
