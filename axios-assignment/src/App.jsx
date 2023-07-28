import React from 'react'
import{Link,Route,Routes} from 'react-router-dom'
import Post from './components/Post'
import Users from './components/Users'
import Todos from './components/Todos'

const App = () => {



  return (
    <>
<nav>
  <ul>
    <li><Link to='/Post'>Post</Link></li>
    <li><Link to='/Users'>Users</Link></li>
    <li><Link to='/Todos'>Todos</Link></li>
  </ul>
</nav>
<Routes>
  <Route path = '/Post' element={<Post></Post>}></Route>
  <Route path = '/Users' element={<Users></Users>}></Route>
  <Route path = '/Todos' element={<Todos></Todos>}></Route>
</Routes>
    </>
  )
}

export default App