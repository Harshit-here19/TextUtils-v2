import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-${props.mode} bg-${props.mode} navbar-expand-lg`}>
    <div className="container-fluid">
        <Link className={`navbar-brand text-${props.textHand}`} to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className={`nav-link active text-${props.textHand}`} aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className={`nav-link text-${props.textHand}`} to="/about">{props.aboutText}</Link>
                </li>
                
            </ul>
            {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-primary" type="submit">Search</button>
            </form> */}
            
            <div className='d-flex flex-column flex-md-row flex-lg-row'>
                <div className="container align-self-center d-flex justify-content-end">
                    <span className={`rounded bg-light text-${props.danger} `} style={{width:"25px", height:"25px", cursor:"pointer" , marginLeft:"5px"}} onClick={props.white}></span>        
                    <span className={`rounded bg-success text-${props.success}`} style={{width:"25px", height:"25px", cursor:"pointer" , marginLeft:"5px"}} onClick={props.green}></span>        
                    <span className={`rounded bg-warning text-${props.warning} `} style={{width:"25px", height:"25px", cursor:"pointer" , marginLeft:"5px"}} onClick={props.orange}></span>        
                    <span className={`rounded bg-danger text-${props.danger} `} style={{width:"25px", height:"25px", cursor:"pointer" , marginLeft:"5px"}} onClick={props.red}></span>        
                    <span className={`rounded bg-dark text-${props.danger} `} style={{width:"25px", height:"25px", cursor:"pointer" , marginLeft:"5px"}} onClick={props.toggleMode}></span>        
                </div>
            </div>
        </div>
  </div>
</nav>
  );
}

Navbar.propTypes = {title : PropTypes.string.isRequired,
                    aboutText : PropTypes.string.isRequired}

Navbar.defaultProps = {
    title : "Set Title Here",
    aboutText : "Set About Here"
};

// For Aqua Color - linear-gradient(0deg, #b3ffab 0%, #12fff7 100%)