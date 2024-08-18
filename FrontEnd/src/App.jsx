import React from 'react'
import Register from './Register'
import { Routes,Route } from 'react-router-dom'
import Adminlogin from './Adminlogin'
import Dashborad from './Dashborad'
import Daig from './Daig'
import Fetchdaig from './Fetchdaig'
import DeletedandUpdate from './DeletedandUpdate'
import Updatedaig from './Updatedaig'
import Fetchstatus from './Fetchstatus'
import Updatestatus from './Updatestatus'

function App() {
  return (
   <>
   <Routes>
    <Route path="resgiter" element={<Register/>} />
    <Route path='/' element={<Adminlogin/>}/>
    <Route path='dashborad' element={<Dashborad/>}/>
    <Route path='daig' element={<Daig/>}/>
    <Route path='daigfetch' element={<Fetchdaig/>}/>
    <Route path='statusfetch' element={<Fetchstatus/>}/>
    <Route path='deleted&update' element={<DeletedandUpdate/>}/>
    <Route path='daigs/:id' element={<Updatedaig/>}/>
<Route path='status/:id' element={<Updatestatus/>}/>
   </Routes>
   
   </>
  )
}

export default App