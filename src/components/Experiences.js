import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import back from '../back.png'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Individ from './experiences/individ'
import Buddyprogrammet from './experiences/buddyprogrammet'
import Nordic from './experiences/nordic'
import { Link as Liink, animateScroll as scroll } from "react-scroll";


const Experiences = () => {
    return (
        <div className="work">
            <div className="header">
                <Link to="/"><img src={back} alt="Back arrow" /></Link>
                <NavLink className="notCurrent" to="../work"><h1>Work</h1></NavLink>
                <NavLink className="notCurrent" to="../projects"><h1>Projects</h1></NavLink>
                <NavLink className="current" to="../experiences"><h1>Experience</h1></NavLink>
            </div>
            <div className="info">
                <div className="list">
                    <ul>
                        <Liink
                            activeClass="active"
                            to="individ"
                            spy={true}
                            smooth={true}
                            offset={-125}
                            duration={500}
                        >
                            <li id="link"><h3>IndivID</h3></li>
                        </Liink>
                        <Liink
                            activeClass="active"
                            to="nordic"
                            spy={true}
                            smooth={true}
                            offset={-125}
                            duration={500}
                        >
                            <li id="link"><h3>Nordic.js & Design</h3></li>
                        </Liink>
                        <Liink
                            activeClass="active"
                            to="buddyprogrammet"
                            spy={true}
                            smooth={true}
                            offset={-125}
                            duration={500}
                        >
                            <li id="link"><h3>Buddy programme</h3></li>
                        </Liink>
                    </ul>
                    <div class="vertical"></div>
                </div>
                <div>
                    <Individ></Individ>
                    <Nordic></Nordic>
                    <Buddyprogrammet></Buddyprogrammet>
                </div>
            </div>
        </div>
    );
}

export default Experiences