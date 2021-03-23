import React, { useEffect, useState } from "react";
import { fetch_user } from "./store/actions/userAction";
import { update_user } from "./store/actions/userAction";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { Grid, Button } from "@material-ui/core";
import FormDetails from "./FormDetail";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core/styles';


function App({
  fetchUser,
  users,
  editDataDetails,
  updateUser,
  editDataDetailss,
}) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [jobType, setJobType] = useState("");
  const [experience, setExperience] = useState("");
  const [city, setCity] = useState("");
  const [states, setStates] = useState("");
  const [newData, setNewData] = useState([]);
  const [editData, setEditData] = useState([]);


  const themeContext = useTheme();
const isMobile = useMediaQuery(themeContext.breakpoints.down('sm'));
  useEffect(() => {
    console.log("u++", users);
    console.log("edit", editDataDetails);
    if (editDataDetails) {
      let data = editDataDetails;
      setName(data.name);
      setAge(data.age);
      setJobType(data.job_type);
      setExperience(data.experience);
      setCity(data.city);
      setStates(data.state);
      // setChangeBut(false)
      setEditData(editDataDetails)
    }
  }, [editDataDetails]);

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  const jobTypeHandler = (e) => {
    setJobType(e.target.value);
  };

  const experienceHandler = (e) => {
    setExperience(e.target.value);
  };

  const cityHandler = (e) => {
    setCity(e.target.value);
  };

  const stateHandler = (e) => {
    setStates(e.target.value);
  };

  const submitHandler = (e) => {
    if (age && name && experience && jobType && city && states) {
      const fullData = [];
      let data = {
        id: newData && newData.length + 1,
        name: name,
        age: age,
        job_type: jobType,
        experience: experience,
        city: city,
        state: states,
      };
      fullData.push(data);
      // let fullData1 = []
      setNewData([...newData, data]);
      console.log("data", fullData);
      fetchUser([...newData, data]);
      setAge("");
      setName("");
      setExperience("");
      setJobType("");
      setCity("");
      setStates("");
    } else {
      alert("Select All Reruired Fields!");
    }
  };
  const updateHandler = () => {
    if (age && name && experience && jobType && city && states) {
      let datas = editDataDetails;
      //  const fullData = []
      let data = {
        id: datas && datas.id,
        name: name,
        age: age,
        job_type: jobType,
        experience: experience,
        city: city,
        state: states,
      };
      updateUser(data);
      setEditData([])
      // setChangeBut(true)
      setAge("");
      setName("");
      setExperience("");
      setJobType("");
      setCity("");
      setStates("");
    } else {
      alert("Select All Reruired Fields!");
    }
  };
  return (
    <React.Fragment>
      <div style={{ background: '#ffe6ff'}}>
        <h1 style={{ textAlign: "center" }}>JOB DETAILS FORM</h1>
      </div>
      <Grid
        container
        spacing={3}
        style={{
          padding: "15px",
          marginTop: "40px",
          border: "solid 2px black",
          background: '#e6ffff'
        }}
      >
        <Grid item md="3" xs="12">
        <Box display='flex' justifyContent={isMobile ? 'center' : ''}>
          <TextField
            required
            style={{
              background: 'white'
            }}
            id="outlined-required"
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => nameHandler(e)}
          />
          </Box>
        </Grid>
        <Grid item md="3" xs="12">
        <Box display='flex' justifyContent={isMobile ? 'center' : ''}>
          <TextField
           style={{
            background: 'white'
          }}
            required
            id="outlined-required"
            type="number"
            label="Age"
            variant="outlined"
            value={age}
            onChange={(e) => ageHandler(e)}
          />
          </Box>
        </Grid>
        <Grid item md="3" xs="12">
        <Box display='flex' justifyContent={isMobile ? 'center' : ''}>
          <TextField
           style={{
            background: 'white'
          }}
            required
            id="outlined-required"
            label="Job Type"
            variant="outlined"
            value={jobType}
            onChange={(e) => jobTypeHandler(e)}
          />
          </Box>
        </Grid>
        <Grid item md="3" xs="12">
        <Box display='flex' justifyContent={isMobile ? 'center' : ''}>
          <TextField
           style={{
            background: 'white'
          }}
            required
            type="text"
            id="outlined-required"
            label="Experience"
            variant="outlined"
            value={experience}
            onChange={(e) => experienceHandler(e)}
          />
          </Box>
        </Grid>
        <Grid item md="3" xs="12">
        <Box display='flex' justifyContent={isMobile ? 'center' : ''}>
          <TextField
           style={{
            background: 'white'
          }}
            required
            id="outlined-required"
            label="City"
            variant="outlined"
            value={city}
            onChange={(e) => cityHandler(e)}
          />
          </Box>
        </Grid>
        <Grid item md="3" xs="12">
        <Box display='flex' justifyContent={isMobile ? 'center' : ''}>
          <TextField
           style={{
            background: 'white'
          }}
            required
            id="outlined-required"
            label="State"
            variant="outlined"
            value={states}
            onChange={(e) => stateHandler(e)}
          />
          </Box>
        </Grid>
        <Grid item md="3" xs="12">
        <Box display='flex' justifyContent={isMobile ? 'center' : ''}>
          {editData && editData.length <= 0 ? (
            <Button
              variant="contained"
              color="primary"
              style={{ width: "200px", height: "50px", marginTop: "5px" }}
              onClick={submitHandler}
            >
              SUBMIT
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              style={{ width: "200px", height: "50px", marginTop: "5px" }}
              onClick={updateHandler}
            >
              Update
            </Button>
         
          )}
              </Box>
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ padding: "15px"}}>
        <Grid item md="12" xs="12" style={{ marginTop: "60px", overflow: 'auto' }}>
          {users && users.length > 0 ? <FormDetails /> : []}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

const mapStateToprops = (state) => {
  return {
    users: state.userData.userData,
    editDataDetails: state.userData.editData,
    editDataDetailss: state.userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (data) => dispatch(fetch_user(data)),
    updateUser: (data) => dispatch(update_user(data)),
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(App);
