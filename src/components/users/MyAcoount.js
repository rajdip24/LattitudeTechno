import { Button } from '@mui/material';
import React, { useState ,useEffect} from 'react';





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
        
    useEffect(()=>{
        
        // setLoggedIn(localStorage.getItem('Name'))
        console.log(localStorage.getItem('Name'))
        // setLoggedIn(loggedin)
        // console.log('loop')
        },[])
        const removeAccount = () =>{
            alert('Are you sure you want delete the account')
            localStorage.clear();
        }
        
    return (
        <div>
            <h4>My Account</h4>
            <p>Name is :{localStorage.getItem('Name')}</p>
            <p>Password is :{localStorage.getItem('Password')}</p>
            <p>Email is :{localStorage.getItem('Email')}</p>
            <p>Number is :{localStorage.getItem('Number')}</p>
            <p>PIc is :{localStorage.getItem('pic')}</p>
            <Button onClick={removeAccount}>Account deleted</Button>
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