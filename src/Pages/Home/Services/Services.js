import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://immense-hamlet-30745.herokuapp.com/tours')
            .then(res => res.json())
            .then(data => setServices(data.tours))
    }, [services])
    return (
        <div id='services' className='mt-5'>
            <h1 className='my-5 text-primary'>Our Services</h1>
            <div className="service-container">
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;