// import { Button } from "@mui/material";
// import * as React from "react";
// import { Link } from "react-router-dom";
// import "./styles.css";

// export default function Main() {
//   const [users, setUsers] = React.useState([]);
//   const f = async () => {
//     const res = await fetch("https://reqres.in/api/users?page=2");
//     const json = await res.json();
//     setUsers(json.data);
//   };


  
//   React.useEffect(() => { 
//     f();
//   }, []);
//   return (
//     <div className="App">
//       <h1>Hello users!</h1>
//      <Button variant="outlined" className="btnpose"> <Link to="/AddUsers">Add user</Link></Button>
//       <div className="flex">
//         {users.length &&
//           users.map((user,index) => {
//             return (
//               <div key={user.id}>
//                 <p>{index + 1}</p>
//                 <p>
//                   <strong>{user.first_name}</strong>
//                 </p>
//                 <p>{user.email}</p>
//                 <img key={user.avatar} src={user.avatar} />
                
//               </div>
//             );
//           })}
//       </div>
//     </div>
//   );
// }

import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";

export default function Main() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      <Paper>
        <MenuList>
          <MenuItem><Link to="/AddUsers">Other User List</Link></MenuItem>
          <MenuItem><Link to="/Myaccount">My ACcount </Link></MenuItem>
        </MenuList>
      </Paper>
      <div>

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                 
                  </MenuList>
                </ClickAwayListener>  
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
