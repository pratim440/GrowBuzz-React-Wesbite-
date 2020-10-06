import React from 'react';
import Landing from './sub_components/Landing';
import about_img from './../images/about_img.png'

const About = () => {
    return(
        <>
            <Landing 
                heading='Want to know more about'
                button='Contact Now'
                img={about_img}
                url="/contact"
            />
        </>
    )
};

export default About;