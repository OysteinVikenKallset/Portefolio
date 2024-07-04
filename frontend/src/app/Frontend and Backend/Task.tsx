"use client"
import { useState, useEffect } from 'react';

export default function task() {
    return (
        <div>
            <h2>Front-end:</h2>
            <ul>
                <li className=' m-2 ml-6 list-disc'> Systemet skal kunne ta inn user input med følgende data (Navn, adresse, telefonnummer, fødselsdato)</li>
                <li className=' m-2 ml-6 list-disc'> Systemet skal sende denne data til back-end-systemet ved å trykke på en knapp </li>
                <li className=' m-2 ml-6 list-disc'> Systemet skal kunne hente ut og vise tilsvarende data fra back-end-systemet ved å trykke på en knapp (eventuelt alltid vise oppdaterte data fra back-end)</li>
                <li className=' m-2 ml-6 list-disc'>Systemet skal vise dataene som er hentet fra back-end i passende felter, og skal i tillegg ha et felt for å vise navnet baklengs, et felt som viser tverrsummen av telefonnummeret, samt et felt som viser om personen er født i et skuddår.</li>
                <li className=' m-2 ml-6 list-disc'> Systemet skal vise enkel overordnet statistikk; antall personer lagret, antall personer født i skuddår og gjennomsnittlig lengde på navn (antall bokstaver).</li>
                <li className=' m-2 ml-6 list-disc'> Front-end bør være dynamisk, dvs. felter som oppdaterer seg uten at bruker trenger å trykke på noe for å oppdatere visning (for eksempel antall personer lagret)</li>
                <li className=' m-2 ml-6 list-disc'>Systemets front-end bør helst lages med et anerkjent front-endrammeverk, React, Angular, Vue eller lignende.</li>
            </ul>
        </div>

    )
}