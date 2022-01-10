// import { Button, FormControl, TextField } from "@mui/material";
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { LoadingButton, LocalizationProvider, DatePicker } from "@mui/lab";
// import axios from "axios";

// function AddUsers(props) {
//   let navigate = useNavigate();
//   const [user, setUser] = useState({
//     email: "",
//     first_name: "",
//     last_name: "",
//     avatar: "",
//   });

//   //   instead of putting value={user.email}... we can destructure it

//   const { email, first_name, last_name, avatar } = user;

//   const onInputChange = (e) => {
//     console.log(e.target.value);
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };
//     // const onSubmit= async e =>{
//     //     e.preventDefault();
//     //     await axios.post("https://reqres.in/api/users",user);
//     //     navigate('/mainpage')

//     // };

//     const onSubmit = async (e) => {

//             e.preventDefault();
//             await axios.post("https://reqres.in/api/users", user);
//             navigate("/mainpage");
//           };

// //   const onSubmit = async () => {
// //     const res = await fetch("https://reqres.in/api/users", user);
// //     const json = await res.json();
// //     navigate("/mainpage");
// //     setUser(json.data);
// //   };
// //   React.useEffect(() => {
// //     onSubmit();
// //   }, []);
//   return (
//     <FormControl>
//       <form onSubmit={(e) => onSubmit(e)}>
//         <h1>Add users data</h1>
//         <TextField
//           type="email"
//           label="email"
//           placeholder="Email"
//           style={{ width: 300 }}
//           value={email}
//           name="email"
//           onChange={(e) => onInputChange(e)}
//         />
//         <br />
//         <br />
//         <TextField
//           type="text"
//           label="first Name"
//           placeholder="first Name"
//           style={{ width: 300 }}
//           value={first_name}
//           name="first_name"
//           onChange={(e) => onInputChange(e)}
//         />
//         <br />
//         <br />
//         <TextField
//           type="text"
//           label="last Name"
//           placeholder="last Name"
//           style={{ width: 300 }}
//           value={last_name}
//           name="last_name"
//           onChange={(e) => onInputChange(e)}
//         />
//         <br />
//         <br />
//         <LoadingButton
//           size="large"
//           variant="contained"
//           component="label"
//           value={avatar}
//           name="avatar"
//           //   fullWidth
//           //   startIcon={<Icon icon={fileVideo} />}
//           onChange={(e) => onInputChange(e)}
//         >
//           Upload
//           <input type="file" hidden accept="video/*,photos/*" />
//         </LoadingButton>
//         <br />
//         <br />
//         <Button variant="outlined"> Add Data</Button>
//       </form>
//     </FormControl>
//   );
// }

// export default AddUsers;

import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    // email: "",
    // first_name: "",
    // last_name: "",
    // avatar: "",
    name:"",
    job:""
  });

  // const { email, first_name, last_name, avatar } = user;

  const { name , job } =user;


  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  // let axiosConfig = {
  //   headers: {
  //       'Content-Type': 'application/json;charset=UTF-8',
  //       "Access-Control-Allow-Origin": "*",
  //   }
  // };
  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   await axios.post("https://reqres.in/api/users", user,axiosConfig);
  //   navigate("/mainpage");
  // };

  //   const onSubmit = async () => {
  //         const res = await fetch("https://reqres.in/api/users", user);
  //         const json = await res.json();
  //         navigate("/mainpage");
  //         setUser(json.data);
  //       };
  //       React.useEffect(() => {
  //         onSubmit();
  //       }, []);

//  async function onFormSubmit(e){
//     e.preventDefault();
//     try{
//        await axios.post(`https://reqres.in/api/users`, user)  
//        navigate("/mainpage");
//       setUser(user.data);
//     }catch (error){
//       console.log("Something is Wrong")
//     }
//   }


const onSubmit=async(e)=>{
  e.preventDefault();
 await axios.post("https://reqres.in/api/users",user
  ).then((user)=>{
    navigate("/mainpage");
    console.log(user)
  });
}

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="job"
              name="job"
              value={job}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          {/* <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Last NAme"
              name="last_name"
              value={last_name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="file"
              className="form-control form-control-lg"
              placeholder="Avatar"
              accept="image/png"
              name="avatar"
              value={avatar}
              onChange={(e) => onInputChange(e)}
            />
          </div> */}
          <button className="btn btn-primary btn-block" onClick={e=>onSubmit(e)}>
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
