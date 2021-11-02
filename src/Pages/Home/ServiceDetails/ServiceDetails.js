import React, { useState, useEffect,useRef} from 'react';
import { Form,Button } from 'react-bootstrap';
import { useParams } from 'react-router';

import './ServiceDetails.css'
import useAuth from './../../hooks/useAuth';
import { useHistory } from 'react-router-dom';


const ServiceDetails = () => {
    const [newDetail,setNewDetail]=useState({})
    const { id } = useParams();
    const history=useHistory();
    const {user}=useAuth();
    const nameRef=useRef()
    const emailRef=useRef()
    const titleRef=useRef()
  

    const [details, setDetails] = useState([])
    useEffect(() => {
        fetch('https://immense-hamlet-30745.herokuapp.com/tours')
            .then(res => res.json())
            .then(data => {setDetails(data.tours)
            // console.log(data)
            })
    }, [])
    // console.log(id)
    
  useEffect(()=>{
    const match = details?.find(detail => detail?._id == id)
    setNewDetail(match)
  },[details])
  

    // console.log(newDetail)
    
    const handleAddUser=e=>{
        const name=nameRef.current.value;
        const email=emailRef.current.value;
        const title=titleRef.current.value;
      
        const newUser={name,email,title};
        
        fetch('https://immense-hamlet-30745.herokuapp.com/bookingTour',{
            method:'POST',
            headers:{
                 'content-type': 'application/json'
            },
            body:JSON.stringify(newUser)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('SuccessFully added the user');
                e.target.reset();
                history.push(`/MyBooking/${user.email}`)
            }
        })
        e.preventDefault();
    }


    return (
        <div className='d-flex'>
          <div className='Details'>
        
          <img src={newDetail?.img}alt="" />
         
          <h4> {newDetail?.name}</h4>
         
          
          <p className='des'>{newDetail?.Description}</p>
         
          </div>

          <div>
          <Form onSubmit={handleAddUser} className='m-5' >
              <h1>Booking</h1>
          <Form.Group className="mb-3" controlId="formBasicName">
         <Form.Control type="name" ref={nameRef} defaultValue={user?.displayName}  placeholder="Enter name"  />
        </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicTitle">
         <Form.Control type="title" ref={titleRef} defaultValue={newDetail?.name} placeholder="Title" readOnly/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Control type="email" ref={emailRef}  defaultValue={user?.email} placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress1">
      
        <Form.Control placeholder="1234 Main St"/>
        </Form.Group>
       

        <Button variant="primary" type="submit">Booking Now</Button>
</Form>
          </div>
        </div>
    );
};

export default ServiceDetails;