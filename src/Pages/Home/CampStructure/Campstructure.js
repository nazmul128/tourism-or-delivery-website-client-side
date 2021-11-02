import React from 'react';
import './Campstructure.css'

const Campstructure = () => {
    return (
        <div id='camp'>
            <h1 className='my-5 text-primary'>Camp Infrastructure</h1>
            <div className='camp-container'>
                <div>
                    <div className='camp'>
                        <i class="fas fa-parking"></i>
                        <h3 >Parking in the camp</h3>
                    </div>
                    <p>Finding space to park your car and managing such parking lots are both cumbersome and time-consuming tasks. </p>
                </div>

                <div>
                    <div className='camp'>
                        <i class="fas fa-caravan"></i>
                        <h3>Motorhome service</h3>
                    </div>
                    <p>Canvas breaks in a spacious Isère holiday park.Good location for hikes, bike rides, climbing and watersports. Heated pool, restaurant, lake beach area and summer activities </p>
                </div>

                <div>
                    <div className='camp'>
                        <i class="fas fa-hands-wash"></i>
                        <h3>Washing machines </h3>
                    </div>
                    <p> This is a mini washing machine that goes anywhere. It is electric, portable and very easy to use. It comes with a handle for easy carry and when you’re done, simply store it away. </p>
                </div>
                <div>

                    <div className='camp'>
                        <i class="fas fa-hands-wash"></i>
                        <h3>Sanitary Facilites</h3>
                    </div>
                    <p> The Tourism Task Force asked EFLA's to estimate the need for sanitation facilities across the country and prioritize destinations where sanitation facilities must be improved. Much needs to be done to accommodate the vast number of tourists expected in Iceland in coming years.</p>
                </div>

                <div>
                    <div className='camp'>
                        <i class="fas fa-wifi"></i>
                        <h3>Fast Internet</h3>
                    </div>
                    <p> E-tourism is essentially the digitalization of the whole touristic industry and infrastructure. Some of the advantages of e-tourism are the reduction of seasonality, the more successful communication with the customers and the raise in reservations and sales in general.</p>
                </div>
                <div>

                    <div className='camp'>
                        <i class="fas fa-plug"></i>
                        <h3>Electrical cabinets</h3>
                    </div>
                    <p> An electrical enclosure is a cabinet for electrical or electronic equipment to mount switches, knobs and displays and to prevent electrical shock to equipment users and protect the contents from the environment</p>
                </div>


            </div>
        </div >
    );
};

export default Campstructure;