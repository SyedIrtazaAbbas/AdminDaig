import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function DeletedandUpdate() {

    var [fetcdaig,setfetchdaig] = React.useState([]);

var getdata=()=>{
    axios.get("http://localhost:8000/fetchdaig").then((res=>{
        setfetchdaig(res.data)
    }))

}
useEffect(()=>{
    getdata();
},[])





const deleteddiag=(id)=>{
    axios.delete(`http://localhost:8000/deleteddaig/${id}`).then(() => {
        getdata(); 
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
<section className='dashboradadd'>
    <h1>Daigs</h1>
</section>
<h1>Daigs featch </h1>


  <table border={3}>
<thead>
    <tr>
        <th>Daig Name</th>    
        <th>Daig Owner Name</th>    
        <th>Daig Status</th>    
        <th>Daig trackingid</th>    
        <th>Delete</th>    
        <th>Update</th>    
    </tr>
    
 </thead>    
 <tbody>{
    fetcdaig.map((daigs)=>(
        <tr key={daigs._id}>
            <td>{daigs.daigName}</td>
            <td>{daigs.daigOwnerNmae}</td>
            <td>{daigs.daigstatus}</td>
            <td>{daigs.daigtrackingid}</td>
            
            
<td>
    <button onClick={()=> deleteddiag(daigs._id)} className='dele'>
    deleted
    </button>
    
    </td>  

<td>
<Link to={`/daigs/${daigs._id}`}><button> Update</button> </Link>

</td>

    

        </tr>
    ))
    }

 </tbody>
  </table>
    </main>
   

    
    </>
  )
}

export default DeletedandUpdate