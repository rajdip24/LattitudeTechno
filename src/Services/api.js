import axios from "axios";

const urln = "https://reqres.in/api/users";

export const addUser=async(user)=>{
    await axios.post(urln,user)
}




const url = "https://reqres.in/api/users?page=2";

export const getUsers=async()=>{
    return await axios.get(url);
}   
5