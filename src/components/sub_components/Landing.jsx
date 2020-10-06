import React from 'react';
import { NavLink } from 'react-router-dom';

const Landing = (props) => {
    return(
        <>
        <div className='container-fluid'>
            <div id='hero_container' className='row'>
                <div className='hero_col col-lg-5 col-md-12 col-sm-12'>
                    <h1 id='hero_heading'>{props.heading} <span id='hero_span'>Grow Buzz</span></h1>
                    <p id='hero_desc'>We are a team of talented developer making websites</p>
                    <NavLink id='hero_btn' to={props.url} className="btn">{props.button}</NavLink>
                </div>
                <div className='hero_col col-lg-5 col-md-12 col-sm-12'>
                    <img id='hero_img' src={props.img} alt='home_img' />
                </div>
            </div>
        </div>
        </>
    )
};

export default Landing;