import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Fetchdaig() {
var [fetcdaig,setfetchdaig] = useState([])

var getdata=()=>{
    axios.get("http://localhost:8000/fetchdaig").then((res=>{
        setfetchdaig(res.data)
    }))

}
useEffect(()=>{
    getdata();
},[])

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
<section className='dashboradadd'>
    <Link to={'/daig'} className='add-button'>  Add Daig  </Link>
    <h1>Daigs</h1>
</section>
<h1>Daigs featch </h1>


  <table border={3}>
<thead>
    <tr>
        <th>Daig Name</th>    
        <th>Daig Description</th>    
        <th>Daig Owner Name</th>    
        <th>Daig Owner Number</th>    
        <th>Daig Owner Address</th>    
        <th>Daig Status</th>    
        <th>Daig trackingid</th>    
    </tr>
    
 </thead>    
 <tbody>{
    fetcdaig.map((daigs)=>(
        <tr key={daigs._id}>
            <td>{daigs.daigName}</td>
            <td>{daigs.daigDescription}</td>
            <td>{daigs.daigOwnerNmae}</td>
            <td>{daigs.daigOwnerNumber}</td>
            <td>{daigs.daigOwnerAddress}</td>
            <td>{daigs.daigstatus}</td>
            <td>{daigs.daigtrackingid}</td>
            
            
  



    
 
        </tr>
    ))
    }

 </tbody>
  </table>
    </main>
   




   </>
  )
}

export default Fetchdaig