import React from 'react'
import { Link } from 'react-router-dom'
import './dashborad.css'

function Dashborad() {

    
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
    <h1>Welcome To Dashborad</h1>
    </main>
   




   </>
  )
}

export default Dashborad