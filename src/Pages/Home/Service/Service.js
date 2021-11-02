import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    // console.log(props.service);
    const { _id, img, name, Description} = props.service;
    return (
        <div className='service'>
            <img src={img} alt="" />
          <div className='Name'>
            <h4 >{name}</h4>
          </div>
            <p className='description'>{Description}</p>
          
            <Link to={`/details/${_id}`}><Button className='mb-3'>More Details</Button></Link>
        </div>
    );
};

export default Service;