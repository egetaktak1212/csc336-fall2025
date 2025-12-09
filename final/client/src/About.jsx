import './About.css'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function About() {


    return (

        <>
            <div className='about-full-page'>
                <div className="about-cont">
                    <div className="about-nav-buttons">
                        <NavLink to="/" style={{ color: 'white'}}>Home</NavLink>
                    </div>
                    <div id="maintitle">
                        <span className="about ari">ABOUT</span>
                        <br />
                        <span className="about-mission ari">OUR MISSION</span>
                    </div>

                    <div className='about-text ari'>
                        Enchanting the minds since 1984, THE GAZEBO reinvented what it meant to tunnel vision on a single class during some of your hardest semesters. Infused with the astral magic of wasting your 20s, THE GAZEBO is forever preserved in our crowd-funded emulator.
<br /><br />
                        As of 2008, THE GAZEBO EMULATOR has been updated to include its controversial sequel, THE HULLABALOO. Often mentioned in the same breath as The Challenger, THE HULLABALOO's failed launch tainted its good image, but all is reserved right here. Scorch marks and all.


                    </div>

                </div>
            </div>
        </>
    );
}


export default About;