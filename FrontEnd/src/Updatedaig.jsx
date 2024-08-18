import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Updatedaig() {
    var [daigupdate,setdaig] = useState({
        daigName:"",
        daigDescription:"",
        daigOwnerNmae:"",
        daigOwnerNumber:"",
        daigOwnerAddress:"",
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
        alert('Failed to update daig.'); 
        console.error("Error updating daig:", error);
    });
    }
  return (
    <>      <header className='dashboard-header'>
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
<h1>Update On Daig</h1>
    <form onSubmit={update}>
        <input type='text' placeholder='Daig Name' name='daigName' onChange={handliS}  value={daigupdate.daigName}/>
        <input type='text' placeholder='Daig Description' name='daigDescription' onChange={handliS}   value={daigupdate.daigDescription} />
        <input type='text' placeholder='daig Owner Name' name='daigOwnerNmae' onChange={handliS}    value={daigupdate.daigOwnerNmae}  />
        <input type='text' placeholder='daig Owner Number' name='daigOwnerNumber' onChange={handliS}   value={daigupdate.daigOwnerNumber}  />
        <input type='text' placeholder='daig Owner Address' name='daigOwnerAddress' onChange={handliS}  value={daigupdate.daigOwnerAddress} />
        <input type='text'   value={daigupdate.daigtrackingid} />

<br/><br/>
<input type='submit' value="Update daig"/>
    </form>

</main>
    </>
  )
}

export default Updatedaig