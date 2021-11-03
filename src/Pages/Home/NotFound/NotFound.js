import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const NotFound = () => {
    return (
        <div>
            <h1>404 Not Found</h1>
            <Link to='/'><Button>Go Back</Button></Link>
        </div>
    );
};

export default NotFound;