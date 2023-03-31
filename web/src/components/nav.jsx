
import React from "react";
import { Link } from "react-router-dom";


// const [toogle,setToogle]=useState('')


export default function Navbar(){

return(
  <div className="navPage">
        <nav>
            <div className="logo">
                <p>YATRA</p>
            </div>
            <div className="elements">
              <ul>
                <Link to='home'smooth={true} duration={1000} className='navLink active'>Home</Link>
                <Link to='products' smooth={true} duration={1000} className='navLink'>Products</Link>
                <Link to='contact' smooth={true} duration={1000} className='navLink'>Contact</Link>
                <Link to='about' smooth={true} duration={1000} className='navLink'>About</Link>
                <Link to='login' smooth={true} duration={1000} className='navLink'>Login</Link>
              </ul>
            </div>
        </nav>
  </div>
)
}
