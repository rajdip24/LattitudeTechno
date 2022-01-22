// import { Button } from '@mui/material';
import React, { useState, useEffect } from "react";
import {
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
  FormGroup,
  FormControl,
} from "@mui/material";

// const getLocalStorage =()=>{
//     let loggedin = localStorage.getItem('Name');
//     if(loggedin){
//       return JSON.parse(localStorage.getItem('Password'))
//     }
//     else{
//       return []
//     }
//   }

function MyAcoount() {
  const [name, setName] = useState(localStorage.getItem("Name"));
  const [pic, setPic] = useState(localStorage.getItem(""));
  const [password, setPassword] = useState(localStorage.getItem("Password"));
  const [email, setEmail] = useState(localStorage.getItem("Email"));
  const [num, setNum] = useState(localStorage.getItem("Number"));

  useEffect(() => {
    // setLoggedIn(localStorage.getItem('Name'))
    console.log(localStorage.getItem("Name"));
    // setLoggedIn(loggedin)
    // console.log('loop')
  }, []);
  const removeAccount = () => {
    alert("Are you sure you want delete the account");
    localStorage.clear();
  };


  const editfun=()=>{
    localStorage.setItem("Name", name);
    localStorage.setItem("Password", password);
    localStorage.setItem("Email", email);
    localStorage.setItem("Number", num);
    localStorage.setItem("pic",pic);
  }

//   function handleChange([event]) {
//     const file = event.target.files[0];
//     console.log(file);
//     setValue(pic, file);
//     return {};
//   }
  return (
    <div>
      <h4>My Account</h4>
      {/* <p>Name is :{localStorage.getItem('Name')}</p>
            <p>Password is :{localStorage.getItem('Password')}</p>
            <p>Email is :{localStorage.getItem('Email')}</p>
            <p>Number is :{localStorage.getItem('Number')}</p>
            <p>PIc is :{localStorage.getItem('pic')}</p> */}
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

        <input
          type="file"
          accept="image/*"
          name="pic"
          value={pic}
          onChange={(e) => setPic(e.target.value)}
        />
        <Button onClick={removeAccount}>Account deleted</Button>
        <Button onClick={editfun}>Edit</Button>
      </FormControl>
    </div>
  );
}

export default MyAcoount;

// const editItem = (id) =>{
//     const specificItem = list.find((item)=>item.id == id);
//     setEditing(true);
//     seteditID(id);
//     setName(specificItem.title)
//   }
// Email", email);
//     localStorage.setItem("Number", num);
//     localStorage.setItem("pic",pic);
//   };
