"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

type User{
  
}

export default function Connect(){

    useEffect(() => {
      getUsers;
}, []);

let getUsers = () => {
    axios.get('http://localhost:5177/api/Users')
    .then(response => {
        // Behandle responsen her
        console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
}



    return (
    <div>
    {users.length > 0 && (
      <ul>
          {users.map(user => (
              <li key={user.id}>{user.name}</li>
          ))}
      </ul>
  )}
    </div>

    )
}