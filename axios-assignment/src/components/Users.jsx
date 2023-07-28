import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Users = () => {

const[userInfo,setUserinfo]= useState([]);

const clickButton=()=>{
    console.log("button clicked")
    let mypromise= axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(mypromise);

    mypromise.then((obj)=>{
        console.log(obj.data)
      setUserinfo(obj.data)
    })
    mypromise.catch((error)=>{
        console.log(error)
    })
}


  return (
    <div>
        <h3> This is the axios code of users</h3>
        <button onClick={clickButton}>get data</button>
       <br></br>
<br></br>
       <table border={1}>
<thead>
    <tr>
<th>id</th>
<th>name</th>
<th>username</th>
<th>email</th>
    </tr>
</thead>
<tbody>
    {
        userInfo.map((row)=>{
            return(<tr key={row.name}>
                <td>{row.id}</td> <td>{row.name} </td> <td> {row.username}</td>
                <td>{row.email}</td>


            </tr>)
        })
    }
</tbody>
       </table>


    </div>
  )
}

export default Users;