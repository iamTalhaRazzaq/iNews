import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" >iNEWS</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                </ul>
                <div>
                </div>
                {/* <select class="form-select form-select-lg " style={{width:'10%'}} aria-label=".form-select-lg example">
                   { <option selected>Home</option> }
                  <option value={this.props.category}><Link className="" to="/business">Business</Link></option>
                  <option value={this.props.category}>Two</option>
                  <option value={this.props.category}>Three</option>
                </select> */}

                <div className="dropdown">
                  <button className=" btn btn-secondary dropdown-toggle mx-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >{'News Catagory'}</button>
                  <ul className="dropdown-menu dropdown-menu-dark mx-2" aria-labelledby="dropdownMenuButton2">
                    <li><Link className="dropdown-item" to="/business">Business</Link></li>
                    <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                    <li><Link className="dropdown-item" to="/general">General</Link></li>
                    <li><Link className="dropdown-item" to="/health">Health</Link></li>
                    <li><Link className="dropdown-item" to="/science">Science</Link></li>
                    <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                    <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                  </ul>
                </div>
                {/* <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle mx-3  my-2" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">Country</button>
                  <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                    <li><Link className="dropdown-item" to="/au">Australia</Link></li>
                    <li><Link className="dropdown-item" to="/ca">Canada</Link></li>
                    <li><Link className="dropdown-item" to="/sa">Saudi Arabia</Link></li>
                    <li><Link className="dropdown-item" to="/uk">United Kingdom</Link></li>
                    <li><Link className="dropdown-item" to="/us">USA</Link></li>
                    <li><Link className="dropdown-item" to="/nz">New Zealand</Link></li>
                    <li><Link className="dropdown-item" to="/in">India</Link></li>
                  </ul>
                </div> */}

                </div>
            </div>
        </nav>
      </div>
      </>
    )
  }
}
