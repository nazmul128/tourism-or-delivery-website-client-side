import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from './../../hooks/useAuth';


const SingleBooking=()=>{
  const {user}=useAuth();
   const [users,setUsers]=useState([])
   useEffect(()=>{
     fetch(`https://immense-hamlet-30745.herokuapp.com/bookingTour/${user?.email}`)
     .then(res=>res.json())
     .then(data=>setUsers(data));
   },[user.email])

   //DELETE AN USER
   const handleDeleteUser=id=>{
    const proceed=window.confirm('Are you sure,you want to delete?');
    if(proceed){
      const url=`https://immense-hamlet-30745.herokuapp.com/bookingTour/${id}`;
      fetch(url,{
        method:'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{
         if(data.deletedCount>0){
           alert('Successfully Deleted');
           const remainingUser=users.filter(user=>user._id!==id)
           setUsers(remainingUser);
         }
      })
    }
   }

    return(
        <div>
            <h1>My Booking</h1>
            <hr/>
            <Table striped bordered hover>
            <tr>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                  <tbody>
            {
              users.map(user=>
          
               
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.title}</td>
                    <td>{user.email}</td>
                    <td><Button>Pending</Button></td>
                    <td><Button onClick={()=>handleDeleteUser(user._id)}>Delete</Button></td>
                  </tr>
              )
            }
            </tbody>
              </Table>
        </div>
    );
};

export default SingleBooking;