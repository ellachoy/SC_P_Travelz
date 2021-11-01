
import React from 'react';
import './Home.scss'
import HeaderImg from "../assets/img/header.png";

const Home = () => {
    return ( 
        <header>
            <section className="main">
                <div>
                    <h1>Explore and Travel</h1>
                    <h4>Holiday finder</h4>
                </div>
                <div className="dropdowns">
                    <select name="Location" id="dropdown">Location</select>
                    
                    <select name="Activity" id="dropdown">Activity</select>
                    <input type="submit" value="Explore" className="BtnOrange" />
                </div>
              
            </section>
            <img src={HeaderImg} id="main_img" alt="headerimg" />
        </header>
      
     );
}
 
export default Home;




