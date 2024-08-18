import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './resgister.css'

function Register() {


var [admindata,setAdmindata] = useState
({
    adminname:"",
    adminemail:"",
    adminpassword:"",  
})

var handleSubmit=(s)=>{
    setAdmindata({...admindata,[s.target.name]:s.target.value})
}


var resgiteradmin=(y)=>{
    y.preventDefault();

    axios.post("http://localhost:8000/admins",admindata);

}


  return (
  <>
   <section className='register'>
    
    <div className='divregister'>
    <h1>Create  Account</h1>
    <h2>already have an account? <Link to='/'>Log in</Link></h2>
    <div className='registerforms'>
   <form  onSubmit={resgiteradmin}>
   <h5>Enter Your Name</h5>
    <input type='text' placeholder='Enter Your Name' name='adminname'     onChange={handleSubmit}/>
 
    <h5>Enter Your Email</h5>
    <input type='text' placeholder='Enter Your Email' name='adminemail'    onChange={handleSubmit}/>

    <h5>Enter Your Password</h5>
    <input type='text' placeholder='Enter Your Password' name='adminpassword'   onChange={handleSubmit}/>
   <h5 className='registerterms'>read the terms &  conditions</h5>
   <input type='submit' value="create your account"/>
   </form>
    </div>
</div>
  

    </section>
  </>
  )
}

export default Register