import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const Post = () => {

    const[userInfo,setUserinfo]= useState([]);

    const clickButton=()=>{
        console.log("button clicked")
        let mypromise= axios.get('https://jsonplaceholder.typicode.com/posts')
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
        <h3> This is the axios post data</h3>

        <button onClick={clickButton}>get data</button>
       <br></br>
<br></br>
<br></br>
       <table border={1}>
<thead>
    <tr>
<th>userId</th>
<th>id</th>
<th>title</th>
<th>body</th>
    </tr>
</thead>
<tbody>
    {
        userInfo.map((row)=>{
            return(<tr key={row.id}>
                <td>{row.userId}</td> <td>{row.id} </td> <td> {row.title}</td>
                <td>{row.body}</td>


            </tr>)
        })
    }
</tbody>
       </table>











    </div>
  )
}

export default Post