import React, {useState,useEffect} from 'react' ;
import axios from 'axios'
import './UserList.css'


/**base url to make requests */

function UserList() {
    /**useState hook */
    const [users, setUsers]=useState([])

    /**useEffect accepts arrow function */
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
           .then( res =>{
               console.log(res)
               setUsers(res.data)
           })
           .catch(err=>{
               console.log(err)
           })
    })
    return (
        <div className="container" >
           
                {users.map(user=>(
                    <div className="user" >
               
                   <li  key={user.id} >  <img className="pic" src="https://static.thenounproject.com/png/711246-200.png" style={{ height:"50px", width:"50px"}} alt ='profile'></img>
                   <div className="user-name">Name : {user.name}</div> 
                   <div className="user-username"> UserName : {user.username}</div> 
                  </li>
                  
                </div>))}
           
        </div>
    )
}

export default UserList
