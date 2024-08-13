import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div>
   <div className="container-fluid p-3 ">
        <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="col-md-8 p-3">
      <a className="navbar-brand" href="#">
        <img src={process.env.PUBLIC_URL + '/Assets/Images/logo.png'} width="50" height="50" alt="Logo" />
      </a>
    </div>
    
<button className="navbar-toggler m-3" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

<div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav ms-auto col-9">
      <li className="nav-item">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link" href="#">Contact</a>
      </li>
      <li className="nav-item pe-2">
        <a className="nav-link" href="#">Gallery</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link bg-dark text-light rounded pe-2" href="#">Enquiry</a>
      </li>
    </ul>
    </div>
   
</nav>
</div>

{/* end of navbar */}
</div>

    
  )
}

export default Navbar
