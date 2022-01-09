import { Button } from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Main() {
  const [users, setUsers] = React.useState([]);
  const f = async () => {
    const res = await fetch("https://reqres.in/api/users?page=2");
    const json = await res.json();
    setUsers(json.data);
  };
  React.useEffect(() => {
    f();
  }, []);
  return (
    <div className="App">
      <h1>Hello users!</h1>
     <Button variant="outlined" className="btnpose"> <Link to="/AddUsers">Add user</Link></Button>
      <div className="flex">
        {users.length &&
          users.map((user,index) => {
            return (
              <div key={user.id}>
                <p>{index + 1}</p>
                <p>
                  <strong>{user.first_name}</strong>
                </p>
                <p>{user.email}</p>
                <img key={user.avatar} src={user.avatar} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
