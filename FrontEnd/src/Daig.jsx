import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Daig() {
var[setdaig,datedaig] = useState({
    daigName:"",
    daigDescription:"",
    daigOwnerNmae:"",
    daigOwnerNumber:"",
    daigOwnerAddress:"",
    daigstatus:"",
    daigtrackingid:""
})

var handliS=(e)=>{
    datedaig({...setdaig,[e.target.name]: e.target.value})
}
var nav = useNavigate()

var addata=(d)=>{
    d.preventDefault();
    axios.post("http://localhost:8000/daig",setdaig);
    nav('/daigfetch');
}

  return (
    <>
         <header className='dashboard-header'>
         <h1 className='dashboard-title'><Link to={'/dashborad'} className='dashtitle'>    Dashborad    </Link> </h1>


   </header>
<nav className='dashboard-sidebar'>
<ul className='dashboard-menu'>
<li> <Link to={'/daigfetch'}> Daig    </Link> </li>
<li> <Link to={'/deleted&update'}> Deleted / Update Daig    </Link> </li>

<li> <Link>Logout   </Link></li> 
</ul>

</nav>
<main className='dashboard-content'>      
<h1>Add Daig</h1>
    <form onSubmit={addata}>
        <input type='text' placeholder='Daig Name' name='daigName' onChange={handliS}/>
        <input type='text' placeholder='Daig Description' name='daigDescription' onChange={handliS}/>
        <input type='text' placeholder='daig Owner Name' name='daigOwnerNmae' onChange={handliS}/>
        <input type='text' placeholder='daig Owner Number' name='daigOwnerNumber' onChange={handliS}/>
        <input type='text' placeholder='daig Owner Address' name='daigOwnerAddress' onChange={handliS}/>
        <select name='daigstatus' onChange={handliS}>
            <option hidden>Select the Status</option>
            <option value='pending'>Pending</option>
         <option value='in_process'>In Process</option>
          < option value='completed'>Completed</option>
           <option value='cancelled'>Cancelled</option>
        </select>
        <input type='text' placeholder='daig tracking id' name='daigtrackingid' onChange={handliS}/>

<br/><br/>
<input type='submit' value="add daig"/>
    </form>

</main>
    </>
  )
}

export default Daig