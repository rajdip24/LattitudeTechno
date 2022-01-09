import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';

import {
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
  FormGroup,
  FormControl
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styling.css";
// import options from "./options";
// import Options from "./options";

const useStyle = makeStyles({
  container: {
    margin: "5% 0 0 25%",
  },
});
function SignUp() {
  const classes=useStyle();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [num, setNum] = useState("");
  const [profe, setProfe] = useState("");
  const [info, setInfo] = useState(true);
  // // const [selected, setSelected] = useState([]);

  // const handleChange = (s) => {
  //   localStorage.setItem("selected", selected);
  //   setSelected(s);
  // };

  function handleInfo() {
    setInfo(!info);
  }
  const handle = () => {
    localStorage.setItem("Name", name);
    localStorage.setItem("Password", password);
    localStorage.setItem("Email", email);
    localStorage.setItem("Number", num);
    localStorage.setItem("Profession", profe);
  };
  return (
    <div>
      <h3>Sign up page</h3>
      <div className="new" onClick={handleInfo}>
        <Button variant="outlined" className="new">
          Company Info
        </Button>
      </div>
      {info ? (
        <Box m={1} p={2}>
          <Grid sm={9}>
            <FormGroup className={classes.container}>
              <FormControl>
            <TextField
              variant="standard"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: 500 }}
            />
            <br />
            <br />
            <TextField
              variant="standard"
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // hintText="Password"
              // floatingLabelText="Password"
              style={{ width: 500 }}
            />
            <br />
            <br />
            <TextField
              variant="standard"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              style={{ width: 500 }}
            />

            <br />
            <br />
            <TextField
              variant="standard"
              label="Phone Number"
              type="number"
              value={num}
              onChange={(e) => setNum(e.target.value)}
              style={{ width: 500 }}
            />

            <br />
            <br />

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={profe}
              label="Professions"
              placeholder="Professions"
              onChange={(e) => setProfe(e.target.value)}
              style={{ width: 500 }}
            >
              <MenuItem value="Software developer">Software developer</MenuItem>
              <MenuItem value="Data Analyst">Data Analyst</MenuItem>
              <MenuItem value="Software tester">Software Tester</MenuItem>
            </Select>

            <br />
            <br />
            <Button variant="contained" onClick={handle}  style={{ width: 500 ,Color: "black"}}>
              <Link to="/LoginPage">Submit</Link>
            </Button>
            </FormControl>
            </FormGroup>
          </Grid>
        </Box>
      ) : (
        <div>
          <p>
            <strong>Company:</strong> Lattitude Technologies PVT Ltd
          </p>
          <p>
            <strong>Address:</strong> Ahemdabad Gujarat
          </p>
          <p>
            <strong>Phone:</strong> 27272727
          </p>
          <p>
            <strong>Email:</strong> XXXXXXXX@gmail.com
          </p>
        </div>
      )}
    </div>
  );
}

export default SignUp;
