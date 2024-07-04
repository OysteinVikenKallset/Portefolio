"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Connect(){

    useEffect(() => {
      getUsers;
}, []);

let getUsers = () => {
    axios.get('http://localhost:5177/api/Users', {
        headers: {
            'accept': 'application/json'
        }
    })
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
    </div>

    )
}