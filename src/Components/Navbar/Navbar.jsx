import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
  <div className="n-wrapper">
    <div className="n-left">
        <div className="n-name">Shekhar</div>
        <span>Toogle</span>
    </div>
    <div className="n-right">
        <div className="n-list">
            <ul style={{listStyleType:'none'}} >
                <li>Home</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Portfolio</li>
                <li>Testimonials</li>
            </ul>
        </div>
        <button className="button n-button">Contact us </button>
    </div>
  </div>
  )
}

export default Navbar
