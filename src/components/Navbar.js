import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import About from './components/About';


export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">{props.about}</Link>
              </li>
            </ul>

            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DarkMode</label>
            </div>

          </div>
        </div>
      </nav>

    </>
  )
}


// ye default mai dene ke sliye hai.... agar kisi ne galat prop paas kr diya to...
// Navbar.propTypes = {
//   title: PropTypes.string,
//   about: PropTypes.string
// };



// ye jab istmaal hoga jab hum props mai kuch bhi na bheje
// Navbar.defaultProps = {
//   title: 'Set your Title here',
//   about: 'Your about section'
// };                  
