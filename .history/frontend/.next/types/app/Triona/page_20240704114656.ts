"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Connect(){

    useEffect(() => {
        axios.get('http://localhost:5177/api/Users', {
            headers: {
                'accept': 'text/plain'
            }
        })
        .then(response => {
            // Behandle responsen her
            console.log(response.data);
        })
        .catch(error => {
            if (error.response) {
                // Serveren responderte med en statuskode som indikerer en feil
                console.error("Detaljer:", error.response.data);
                console.error("Statuskode:", error.response.status);
                console.error("Headers:", error.response.headers);
            } else if (error.request) {
                // Forespørselen ble sendt, men ingen respons ble mottatt
                console.error("Ingen respons mottatt:", error.request);
            } else {
                // Noe gikk galt i oppsettet av forespørselen
                console.error("Feil ved oppsett av forespørsel:", error.message);
            }
            console.error('Feilkonfigurasjon:', error.config);
        });
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