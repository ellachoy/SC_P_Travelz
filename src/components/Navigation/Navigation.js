import React from 'react';
import './Navigation.scss'
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Navlogo from './logo.svg';


const Navigation = () => {
    return (  
        <section className="navigation">
            <nav>
               <Link  exact to="/">
                   <img src={Navlogo} alt="" />
               </Link>
                <ul>
                    <li><NavLink exact to="/HOME">HOME</NavLink></li>
                    <li><NavLink exact to="/Destination">Destination</NavLink></li>
                    <li><NavLink exact to="/Partner">Partner</NavLink></li>
                    <li><NavLink exact to="/Login">Login</NavLink></li>
                    <li><NavLink exact to="/Register">Register</NavLink></li>
                </ul>
            </nav>
        </section>
    );
}
 
export default Navigation;