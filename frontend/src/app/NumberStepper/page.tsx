"use client"
import { useState, useEffect } from 'react';
import Task from './Task';
import moment from 'moment';
import 'moment/locale/nb'; // Importer det norske språket
moment.locale('nb'); // Setter globalt språk til norsk

export default function NumberStepper() {

    // Definerer currentDate som en tilstandsvariabel
    const [currentDate, setCurrentDate] = useState(moment());
    /*
        const [count, setCount] = useState(0);
    
        const increment = () => {
            setCount(count + 1);
         
        }
    
        const decrement = () => {
            setCount(count - 1);
       
        }*/

    //Increment Year

    const incrementOneYear = () => {
        // Antar at currentDate er definert som et moment-objekt eller en dato-streng som kan parses av moment
        setCurrentDate(prevDate => moment(prevDate).add(1, 'years'));
    };

    //Decrement Year

    const decrementOneYear = () => {
        // Antar at currentDate er definert som et moment-objekt eller en dato-streng som kan parses av moment
        setCurrentDate(prevDate => moment(prevDate).subtract(1, 'years'));
    };

    //Increment Month

    const incrementOneMonth = () => {
        // Antar at currentDate er definert som et moment-objekt eller en dato-streng som kan parses av moment
        setCurrentDate(prevDate => moment(prevDate).add(1, 'months'));
    };

    //Decrement Month

    const decrementOneMonth = () => {
        // Antar at currentDate er definert som et moment-objekt eller en dato-streng som kan parses av moment
        setCurrentDate(prevDate => moment(prevDate).subtract(1, 'months'));
    };

    //Increment Day

    const incrementOneDay = () => {
        // Antar at currentDate er definert som et moment-objekt eller en dato-streng som kan parses av moment
        setCurrentDate(prevDate => moment(prevDate).add(1, 'days'));
    };

    //Decrement Day

    const decrementOneDay = () => {
        // Antar at currentDate er definert som et moment-objekt eller en dato-streng som kan parses av moment
        setCurrentDate(prevDate => moment(prevDate).subtract(1, 'days'));
    };

    //Increment Hour

    const incrementOneHour = () => {
        // Antar at currentDate er definert som et moment-objekt eller en dato-streng som kan parses av moment
        setCurrentDate(prevDate => moment(prevDate).add(1, 'hours'));
    };

    //Decrement Hour

    const decrementOneHour = () => {
        // Antar at currentDate er definert som et moment-objekt eller en dato-streng som kan parses av moment
        setCurrentDate(prevDate => moment(prevDate).subtract(1, 'hours'));
    };

    //Increment Minute

    const incrementOneMinute = () => {
        // Antar at currentDate er definert som et moment-objekt eller en dato-streng som kan parses av moment
        setCurrentDate(prevDate => moment(prevDate).add(1, 'minutes'));
    };

    //Decrement Minute

    const decrementOneMinute = () => {
        // Antar at currentDate er definert som et moment-objekt eller en dato-streng som kan parses av moment
        setCurrentDate(prevDate => moment(prevDate).subtract(1, 'minutes'));
    };

    //Increment Second

    const incrementOneSecond = () => {
        // Antar at currentDate er definert som et moment-objekt eller en dato-streng som kan parses av moment
        setCurrentDate(prevDate => moment(prevDate).add(1, 'seconds'));
    };

    //Decrement Second

    const decrementOneSecond = () => {
        // Antar at currentDate er definert som et moment-objekt eller en dato-streng som kan parses av moment
        setCurrentDate(prevDate => moment(prevDate).subtract(1, 'seconds'));
    };

    // Anta at resten av komponenten er definert her

    useEffect(() => {
        console.log("AddInterval");
        const timer = setInterval(() => {
            // Anta at `incrementOneSecond` er en funksjon som inkrementerer sekundene
            incrementOneSecond();
        }, 1000);

        // Rydd opp
        return () => {
            clearInterval(timer);
            console.log("ClearInterval");
        }
    }, []); // Tomt avhengighetsarray betyr at effekten kjører én gang ved montering

    const setToCurrentTime = () => {
        // Antar at currentDate er definert som et moment-objekt eller en dato-streng som kan parses av moment
        setCurrentDate(moment());
    };

    return (
        <div>
            <h1>Oppgave til kandidater for frontend-stilling</h1>
            <div className="flex flex-col justify-center text-center pt-5 pb-5 lg:flex-row">
                <div className="flex flex-row items-center content-center justify-start text-center p-2 lg:flex-col">
                    <h2 className='min-w-28 flex justify-start lg:justify-center'>År</h2>
                    <div className="flex flex-row items-center content-center justify-start text-center p-2 lg:flex-col">
                        <button onClick={incrementOneYear}>+</button>
                        <span className=' min-w-28 min-h-12 justify-items-center items-center justify-center flex'>{currentDate.format('YYYY')}</span>
                        <button onClick={decrementOneYear}>-</button>
                    </div>
                </div>
                <div className="flex flex-row items-center content-center justify-start text-center p-2 lg:flex-col">
                    <h2 className='min-w-28 flex justify-start lg:justify-center'>Måneder</h2>
                    <div className="flex flex-row items-center content-center justify-start text-center p-2 lg:flex-col">
                        <button onClick={incrementOneMonth}>+</button>
                        <span className='capitalize flex flex-col justify-center  min-w-28 min-h-12'>
                            <span className='justify-items-center items-center justify-center flex'>{currentDate.format('MM')}</span>
                            <span className='justify-items-center items-center justify-center flex'>{currentDate.format('MMMM')}</span>
                        </span>
                        <button onClick={decrementOneMonth}>-</button>
                    </div>
                </div>
                <div className="flex flex-row items-center content-center justify-start text-center p-2 lg:flex-col">
                    <h2 className='min-w-28 flex justify-start lg:justify-center'>Dager</h2>
                    <div className="flex flex-row items-center content-center justify-start text-center p-2 lg:flex-col">
                        <button onClick={incrementOneDay}>+</button>
                        <span className='capitalize flex flex-col justify-center  min-w-28 min-h-12'>
                            <span className='justify-items-center items-center justify-center flex'>{currentDate.format('DD')}</span>
                            <span className='justify-items-center items-center justify-center flex'>{currentDate.format('dddd')}</span>
                        </span>
                        <button onClick={decrementOneDay}>-</button>
                    </div>
                </div>
                <div className="flex flex-row items-center content-center justify-start text-center p-2 lg:flex-col">
                    <h2 className='min-w-28 flex justify-start lg:justify-center'>Timer</h2>
                    <div className="flex flex-row items-center content-center justify-start text-center p-2 lg:flex-col">
                        <button onClick={incrementOneHour}>+</button>
                        <span className=' min-w-28 min-h-12 justify-items-center items-center justify-center flex'>{currentDate.format('HH')}</span>
                        <button onClick={decrementOneHour}>-</button>
                    </div>
                </div>
                <div className="flex flex-row items-center content-center justify-start text-center p-2 lg:flex-col">
                    <h2 className='min-w-28 flex justify-start lg:justify-center'>Minutter</h2>
                    <div className="flex flex-row items-center content-center justify-start text-center p-2 lg:flex-col">
                        <button onClick={incrementOneMinute}>+</button>
                        <span className=' min-w-28 min-h-12 justify-items-center items-center justify-center flex'>{currentDate.format('mm')}</span>
                        <button onClick={decrementOneMinute}>-</button>
                    </div>
                </div>
                <div className="flex flex-row items-center content-center justify-start p-2 lg:flex-col">
                    <h2 className='min-w-28 flex justify-start lg:justify-center'>Sekunder</h2>
                    <div className="flex flex-row items-center content-center justify-start text-center p-2 lg:flex-col">
                        <button onClick={incrementOneSecond}>+</button>
                        <span className=' min-w-28 min-h-12 justify-items-center items-center justify-center flex'>{currentDate.format('ss')}</span>
                        <button onClick={decrementOneSecond}>-</button>
                    </div>
                </div>
                <button className='w-fit' onClick={setToCurrentTime}>Sett til nåværende tidspunkt</button>
            </div>
            <Task />
        </div>

    );
}

