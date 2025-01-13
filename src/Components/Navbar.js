import React,{useState,useEffect} from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'




function Navbar() {


  return (
    <>
    <div className="header">

        {/* logo */}
        <div className='logo'></div>

        {/* headings */}
        <h2 id="h2">𝑵𝒆𝒘𝒔𝑽𝒆𝒓𝒔𝒆</h2>
        <h4 id="h4">Every News Here</h4>

        {/* Make the header sections */}
        <ul>
            <li>
                <NavLink to="/"  className={({isActive})=>isActive?"active":"unactive"}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/latest" className={({isActive})=>isActive?"active":"unactive"}>Latest</NavLink>
            </li>
            <li>
                <NavLink to="/technology" className={({isActive})=>isActive?"active":"unactive"} >Technology</NavLink>
            </li>
            <li>
                <NavLink to ="/entertainment" className={({isActive})=>isActive?"active":"unactive"}>Entertainment</NavLink>
            </li>
            <li>
                <NavLink to ="/sports" className={({isActive})=>isActive?"active":"unactive"}>Sports</NavLink>
            </li>
            <li>
                <NavLink to ="/health" className={({isActive})=>isActive?"active":"unactive"}>Health</NavLink>
            </li>
        </ul>

        {/* Make the search button */}

        <div className="search">
            <input type="text" id="search" placeholder='Search News Here...' /><h3 id="searchH3">Search</h3>
        </div>

    </div>

    </>
  )
}

export default Navbar
