
import React from "react"
import './Navbar.css'
import { Link } from "react-router-dom"


const Navbar=()=>{
   return (
    <>
     <nav id="navbar">
        <div id="img">
            <img src="https://assets.milaap.org/assets/milaap-logo-tiny-4d3dbc4e55c2aaec351f0f376329c624236c4d6266b910f472684e70603f600d.png"/>

        </div>
        <div id="menu">
            
              
               <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>
               <div class="chalidManu" id="Home">
                <h4>Home</h4>
                </div></Link>
               
                
                
           
            
                <Link style={{ textDecoration: 'none', color: 'black' }} to="/Donate">
                <div class="chalidManu" id="Donate">
                <h4>Donate</h4>
                </div></Link>
            
            
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/About'>
                <div class="chalidManu">
                    <h4>About</h4>
                    </div></Link>
            
            
                <Link style={{ textDecoration: 'none', color:'black' }} to='/Pricing'>
                <div class="chalidManu">
                    <h4>Pricing</h4>
                    </div></Link>
            
            
                <Link style={{ textDecoration: 'none', color: 'black' }}  to='/Contact'>
                <div class="chalidManu">
                    <h4>Contact Us</h4>
                    </div></Link>
           
            <div class="chalidManu">
                <h4>Home</h4>
            </div>
        </div>
       
            
        <div id='fundraiser'>
            
            <h2>Start a fundraiser</h2>
            
              
            
        </div>
     </nav>
    </>
   )
}
export default Navbar