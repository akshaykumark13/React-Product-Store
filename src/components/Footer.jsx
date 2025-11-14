import React, { useEffect, useState } from 'react'
import './Comp.css'

function Footer() {

  return (
      <footer className="footer-container" style={{backgroundColor:'#868585ff', color:'black'}}>
        
      <div className="footer-top">
        <h2 className="footer-logo">FakeStore</h2>

        <ul>
          <li>For designers</li>
          <li>Hire talent</li>
          <li>Inspiration</li>
          <li>Advertising</li>
          <li>Blog</li>
          <li>About</li>
          <li>Careers</li>
          <li>Support</li>
        </ul>

        {/* <div className="footer-social">
          <i className="bi bi-twitter"></i>
          <i className="bi bi-facebook"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-pinterest"></i>
        </div> */}
      </div>

      <div className="footer-bottom" style={{color:'black'}}>
        <p>© 2025 FakeStore</p>

        <div className="footer-links">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Cookies</a>
        </div>

        <div className="footer-bottom-right">
          <a href="#">Jobs</a>
          <a href="#">Designers</a>
          <a href="#">Freelancers</a>
          <a href="#">Tags</a>
          <a href="#">Places</a>
          <a href="#">Resources</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer