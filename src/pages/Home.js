
import React from 'react';
import './Home.scss'
import HeaderImg from "../assets/img/header.png";

const Home = () => {
    return ( 
        <section className="header">
            <article className="main">
                <div>
                    <h1>Explore and Travel</h1>
                    <h4>Holiday finder</h4>
                </div>
                <div className="dropdowns">
                    <select name="Location" id="dropdown" placeholder="Location">Location</select>
                    
                    <select name="Activity" id="dropdown">Activity</select>
                    
                </div>
                <input type="submit" value="Explore" className="BtnExplore" />
              
            </article>s
     
             <img src={HeaderImg} id="main_img" alt="headerimg" />
           
        </section>
      
     );
}
 
export default Home;




