import React from 'react';
import '../Work.css';
import { Link, NavLink } from 'react-router-dom'
import back from '../back.png'
import Piteakommun from './work/piteakommun'
import { Route } from 'react-router-dom'
import { Link as Liink, animateScroll as scroll } from "react-scroll";

const WorkExperience = () => {
    return (
        <div className="work">
            <div className="header">
                <Link to="/"><img src={back} alt="Back arrow" /></Link>
                <NavLink className="current" to="../work"><h1>Work</h1></NavLink>
                <NavLink className="notCurrent" to="../projects"><h1>Projects</h1></NavLink>
                <NavLink className="notCurrent" to="../experiences"><h1>Experience</h1></NavLink>
            </div>
            <div className="info">
                <div className="list">
                    <ul>
                        <Liink
                            activeClass="active"
                            to="pitea"
                            spy={true}
                            smooth={true}
                            offset={-150}
                            duration={500}
                        >
                            <li id="link"><h3>Piteå kommun</h3></li>
                        </Liink>
                    </ul>
                    <div class="vertical"></div>
                </div>
                <div>
                    <Piteakommun></Piteakommun>
                </div>

            </div>
        </div>
    );
}

export default WorkExperience