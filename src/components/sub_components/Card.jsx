import React from 'react';
import { NavLink } from 'react-router-dom';
import data from './../../data/Data';

const Card = () => {
    return(
      <div className='container-fluid mb-4' >
        <h1 id='service_heading'>Our Services</h1>
        <div  id='card_container' className='row'>
          {data.map((value) => (
          <div id='card' className="card col-lg-4 col-md-6 p-0 mr-2 mb-0">
            <img className="card-img-top" src={value.imgsrc} alt="Card" />
            <div className="card-body">
              <h5 className="card-title">{value.title}</h5>
              <p className="card-text">{value.desc.substring(0,100)} ...</p>
              <NavLink to={`/services/${value.name}`} className="btn btn-primary">Read More</NavLink>
            </div>
          </div>
          ))}
        </div>
      </div>
    );
};

export default Card;