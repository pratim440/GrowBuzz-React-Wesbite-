import React from 'react';
import { useParams } from 'react-router-dom';
import data from './../data/Data';
const CardDetail = (props) => {
    const {name} = useParams();
    const val = data.filter((value) => {
        return value.name === name 
    });
    return(
        <div id='cardDetail_container' className='container-fluid col-lg-10'>
            <h1 id='cardDetail_heading'>{val[0].title}</h1>
            <img id='cardDetail_img' src={val[0].imgsrc} alt='img' />
            <p id='cardDetail_text'>{val[0].desc}</p>
        </div>
    );
};

export default CardDetail;