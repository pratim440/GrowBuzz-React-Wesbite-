import React from 'react';
import home_img from './../images/home_img.svg'
import Landing from './sub_components/Landing';

const Home = () => {
    return(
        <>
        {/* <div className='container-fluid'>
            <div id='hero_container' className='row'>
                <div className='hero_col col-lg-5 col-md-12 col-sm-12'>
                    <h1 id='hero_heading'>Grow your business with <span id='hero_span'>Grow Buzz</span></h1>
                    <p id='hero_desc'>We are a team of talented developer making websites</p>
                    <button type="button" id='hero_btn' class="btn">Get Started</button>
                </div>
                <div className='hero_col col-lg-5 col-md-12 col-sm-12'>
                    <img id='hero_img' src={home_img} alt='home_img' />
                </div>
            </div>
        </div> */}
        <Landing 
            heading='Grow your business with'
            button='Get Started'
            img={home_img}
            url="/services"
        />
        </>
    )
};

export default Home;