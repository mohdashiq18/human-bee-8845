import { useState } from "react"
import React from "react"
import './Navbar.css'
import { Link } from "react-router-dom"


const Navbar=()=>{
 const [togel,setTogel]=useState(false)
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
           
            <div >
                <div id="main">
                    {!togel && <p id="ind">INR</p>}
                    {/* <p>IND</p> */}
                   {togel &&  <div id='left' onClick={()=>setTogel(false)}></div>}
                    {!togel && <div id="right" onClick={()=>setTogel(true)}></div>}
                    {togel && <p id="usd">USD</p>}
                </div>
            </div>
        </div>
       
            
        <div id='fundraiser'>
            
            <h2>Start a fundraiser</h2>
            
            <svg id="log" width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="19.5" cy="19.5" r="18.75" fill="white" stroke="#9C3352" stroke-width="1.5"></circle>
<path d="M22.5759 20.4688C21.4107 20.4688 20.8884 21.125 19 21.125C17.0714 21.125 16.5491 20.4688 15.3839 20.4688C12.4107 20.4688 10 22.9707 10 26.0059V27.0312C10 28.1387 10.8438 29 11.9286 29H26.0714C27.1161 29 28 28.1387 28 27.0312V26.0059C28 22.9707 25.5491 20.4688 22.5759 20.4688ZM26.0714 27.0312H11.9286V26.0059C11.9286 24.0371 13.4554 22.4375 15.3839 22.4375C15.9866 22.4375 16.9107 23.0938 19 23.0938C21.0491 23.0938 21.9732 22.4375 22.5759 22.4375C24.5045 22.4375 26.0714 24.0371 26.0714 26.0059V27.0312ZM19 19.8125C22.1741 19.8125 24.7857 17.1875 24.7857 13.9062C24.7857 10.666 22.1741 8 19 8C15.7857 8 13.2143 10.666 13.2143 13.9062C13.2143 17.1875 15.7857 19.8125 19 19.8125ZM19 9.96875C21.0893 9.96875 22.8571 11.7734 22.8571 13.9062C22.8571 16.0801 21.0893 17.8438 19 17.8438C16.8705 17.8438 15.1429 16.0801 15.1429 13.9062C15.1429 11.7734 16.8705 9.96875 19 9.96875Z" fill="#9C3352"></path>
</svg>
            
        </div>
     </nav>
    </>
   )
}
export default Navbar