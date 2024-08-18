import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Adminlogin() {

    var [admins,setAdmindata] = useState({
        adminemail: "",
        adminpassword: "", 
    });
    var [incorrect, setincorrectdate] = useState("");

    var nav = useNavigate();
    var handleInput = (e) =>{
        setAdmindata({...admins,[e.target.name]: e.target.value});
    }

    var adminlogin = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8000/loginadmin',admins)
        .then((response)=>{
            if (response.data){
          nav('/dashborad')
            }
            else{
                setincorrectdate("Invalid Email or Password")
                setAdmindata({adminemail:"",adminpassword:""});
            }
        }).catch(()=>{
            setincorrectdate("Email and Passoword not found");
            setAdmindata({ adminemail:"" , adminpassword:""})
        })

        
    }
  return (
    <>
    <section className='register'>

<div className='registerforms'>

<form onSubmit={adminlogin}>
<h1>Login</h1>

<h5>Enter Your Email</h5>


<input  type='text' placeholder='Enter Your Email' name='adminemail' onChange={handleInput}/>
<h5>Enter Your Password</h5>

<input type='password' placeholder='Enter Your Password' name='adminpassword' onChange={handleInput}/>
<input type='submit' value="login"/>
<Link to={'/resgiter'}> <h2 style={{color: "green"}}>resgeister your selft</h2> </Link>

</form>

<h3 style={{color:"red"}}>{incorrect}</h3>
</div>



  </section>
   
    </>
  )
}

export default Adminlogin