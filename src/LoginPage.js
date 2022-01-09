import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import Main from "./Main";

function LoginPage(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [main, setMain] = useState(true);

  function handleCheck(e) {
    let storedName = localStorage.getItem("Name", name);
    let storedPw = localStorage.getItem("Password", password);

     if(name !== storedName || password !== storedPw) {
        alert('Invalid Credentials');
    }else {
        setMain(!main);
        alert('You is logged in successfully');
    }
  }


  return (
    <div>
      {main ? (
      <Box m={1} p={2}>
        <h2>Login Page</h2>
        <TextField
          variant="standard"
          label="Name"
          style={{ width: 300 }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <TextField
          variant="standard"
          label="Password"
          style={{ width: 300 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <Button variant="contained" onClick={handleCheck}>Submit</Button>
      </Box>
      ) : (
        <Main />
      )}
    </div>
  );
}

export default LoginPage;
