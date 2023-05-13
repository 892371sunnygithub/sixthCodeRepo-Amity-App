import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
const Header = () => {
  // const ShowHide=()=>{
  //   alert('clicked')
  // }
  const[show, setShow]=useState(true);
  return (
   <div className="fragment">
   
      <header className='header'>
        <div className="logo">
         <h4>DummyWebsite</h4>
        </div>
        <nav className="navbar">
         <ul className={`${show?"nav_list":""}`}>
           <li className="list_item"> <NavLink to="/" className="nav_link" > Home </NavLink> </li>
           <li className="list_item"> <NavLink to="/grandlodge" className="nav_link" > Grand Lodge </NavLink> </li>
           <li className="list_item"> <NavLink to="/members" className="nav_link" > Members </NavLink> </li>
           <li className="list_item"> <NavLink to="/service" className="nav_link" > Service </NavLink> </li>
           <li className="list_item"> <NavLink to="/contact" className="nav_link" > Contact </NavLink> </li>

           <li className="list_item"> <NavLink to="/statistics" className="nav_link" > Statistics </NavLink> </li>

           <li className="list_item"> <NavLink to="/map" className="nav_link" > Map </NavLink> </li>

           <li className="list_item"> <NavLink to="/lodges" className="nav_link" > Lodges </NavLink> </li>

           <li className="list_item"> <NavLink to="/datasharing" className="nav_link" > DataSharing </NavLink> </li>
         </ul>
        </nav>
        <button className='btn btn-success show_hide_btn' onClick={()=>setShow(!show)}>Menu</button>
      </header>
   
   </div> 
  )
}

export default Header;