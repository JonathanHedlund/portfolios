import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import back from '../back.png'
import Csncountdown from './projects/csncountdown'
import Arboreal from './projects/arboreal'
import Idagochinatt from './projects/idagochinatt'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Link as Liink, animateScroll as scroll } from "react-scroll";

var randomColor = require('randomcolor'); // import the script
var color = randomColor(); // a hex code for an attractive color

const Projects = () => {
    return (
        <div className="work">
            <div className="header">
                <Link to="/"><img src={back} alt="Back arrow" /></Link>
                <Link className="notCurrent" to="../work"><h1>Work</h1></Link>
                <Link className="current" to="../projects"><h1>Projects</h1></Link>
                <Link className="notCurrent" to="../experiences"><h1>Experience</h1></Link>
            </div>
            <div className="info">
                <div className="list">
                    <ul>
                        <Liink
                            activeClass="active"
                            to="csncountdown"
                            spy={true}
                            smooth={true}
                            offset={-125}
                            duration={500}
                        >
                            <li id="link"><h3>CSN Countdown</h3></li>
                        </Liink>
                        <Liink
                            activeClass="active"
                            to="arboreal"
                            spy={true}
                            smooth={true}
                            offset={-125}
                            duration={500}
                        >
                            <li id="link"><h3>Arboreal</h3></li>
                        </Liink>
                        <Liink
                            activeClass="active"
                            to="idag"
                            spy={true}
                            smooth={true}
                            offset={-125}
                            duration={500}
                        >
                            <li id="link"><h3>IDag & Inatt</h3></li>
                        </Liink>

                    </ul>
                    <div class="vertical"></div>
                </div>
                <div>
                    <Csncountdown></Csncountdown>
                    <Arboreal></Arboreal>
                    <Idagochinatt></Idagochinatt>
                </div>
            </div>
        </div >
    );
}

export default Projects