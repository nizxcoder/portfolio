import React, { useRef } from 'react'
import './Navbar.css'
export default function Navbar() {
    const close = useRef(null)
    const handleOnClick = (loc) => {
        if (window.innerWidth < 992) {
            // console.log(window.innerWidth)
            close.current.click();
        }
        if(loc === "home"){
            window.scrollTo(0,0);
        }
        else if(loc === "about") window.scrollTo(0,300);
        else if(loc === "project") window.scrollTo(0,500);
        else window.scrollTo(0, 1000);

    }
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg bg-body-light" >
                <div className="container-fluid" >
                    <div className='container d-flex p-0' style={{margin: "0px"}}>
                        <a className="navbar-brand mx-3" href="/home">Nizam.dev</a>
                        <button ref={close} className="navbar-toggler mx-2 nav-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" ></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse mx-3" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button className="nav-link" aria-current="page" onClick={()=>{handleOnClick("home")}}>Home</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" aria-current="page" onClick={()=>{handleOnClick("about")}}>About</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" aria-current="page" onClick={()=>{handleOnClick("project")}}>Project</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" aria-current="page" to="#" onClick={()=>{handleOnClick("contact")}}>Contact</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </div >
    )
}
