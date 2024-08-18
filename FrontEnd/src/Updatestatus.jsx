import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
function Updatestatus() {

    var [daigupdate,setdaig] = useState({
     
        daigstatus:"",

    })

    var handliS=(e)=>{
        setdaig({...daigupdate,[e.target.name]: e.target.value})
    }
    var {id}  = useParams();

    var getsingle=()=>{
        axios.get(`http://localhost:8000/daigupdate/${id}`).then((reponse)=>{
            setdaig(reponse.data)
        })
    }
useEffect(()=>{getsingle()},[])
    
var nav = useNavigate()
    
    var update = (i) =>{
        i.preventDefault();
        axios.put(`http://localhost:8000/daig/${id}`, daigupdate)
        .then((response) => {
           alert('Daig updated successfully'); 
           nav('/dashborad'); 
       }).catch((error) => {
           alert('Failed to update daig.'); // Show error alert
           console.error("Error updating daig:", error);
       });
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
<li> <Link to={'/statusfetch'}> Status  </Link> </li>
<li> <Link>Logout   </Link></li> 
</ul>

</nav>
       <main className='dashboard-content'>      
<h1>Update On Daig stautes</h1>
    <form onSubmit={update}>
    <input type='text'  value={daigupdate.daigName}/>
        <input type='text'   value={daigupdate.daigDescription} />
        <input type='text'    value={daigupdate.daigOwnerNmae}  />
        <input type='text'   value={daigupdate.daigOwnerNumber}  />
        <input type='text'   value={daigupdate.daigOwnerAddress} />
        <input type='text'  value={daigupdate.daigtrackingid} />

    <select name='daigstatus' onChange={handliS}>
            <option hidden>Select the Status</option>
            <option value='pending'>Pending</option>
         <option value='in_process'>In Process</option>
          < option value='completed'>Completed</option>
           <option value='cancelled'>Cancelled</option>
        </select>
<br/><br/>
<input type='submit' value="Update stautes"/>
    </form>

</main>
   
   </>
  )
}

export default Updatestatus