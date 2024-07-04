"use client"
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import Task from './Task';
import axios from 'axios';


type User = {
    id: number;
    name: string;
    address: string;
    phone: string;
    birthday: string;
    phoneDigitSum: number;
    isLeapYearBirthday: string;
};


export default function Triona() {
    const [name, setName] = useState("Petter");
    const [address, setaddress] = useState("Tiller");
    const [phone, setPhone] = useState("97562249");
    const [birthday, setBirthday] = useState("");
    const [leapYear, setLeapYear] = useState("");
    const [tverrsum, setTverrsum] = useState(0);
    const [users, setUsers] = useState<User[]>([]);



    function isLeapYear(birthdayDate: string) {
        const year = new Date(birthdayDate).getFullYear();
        console.log("Function: isLeapYear");
        console.log("Birthday: " + birthdayDate);
        console.log("Year: " + year);
        if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
            setLeapYear("Ja");
            console.log('setLeapYear("Ja")');
        } else {
            setLeapYear("Nei");
            console.log('setLeapYear("Nei")');
        };
    }

    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newBirthday = event.target.value;
        setBirthday(newBirthday);
        console.log("Skuddår: " + leapYear);
        isLeapYear(newBirthday);
    }


    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleaddressChange = (event: ChangeEvent<HTMLInputElement>) => {
        setaddress(event.target.value);
    }

    const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newPhone = event.target.value;
        setPhone(newPhone);
        const newTverrsum = newPhone.split('').reduce((sum, num) => sum + parseInt(num, 10), 0);
        setTverrsum(newTverrsum);
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Forhindrer formen i å sende en HTTP POST request

        axios.post('http://localhost:5177/api/Users', {
            id: 0,
            name: name,
            address: address,
            phone: phone,
            birthday: birthday
        })
            .then(response => {
                console.log(response);
                getUsers();

            })
            .catch(error => {
                console.log(error);
            })
    };

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        axios.get('http://localhost:5177/api/Users')
            .then(response => {
                // Behandle responsen her
                console.log(response.data);
                setUsers(response.data);
            })
            .catch(error => {
                console.log(error.response);
            });
    }

    const deleteUser = (userId: number) => {
        axios.delete(`http://localhost:5177/api/Users/${userId}`)
            .then(response => {
                // Behandle responsen her
                console.log(response.data);
                setUsers(response.data);
                getUsers();
            })
            .catch(error => {
                console.log(error.response);
            });
    }

    return (
        <div>
            <h1>Frontend og backend</h1>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col'>
                    <label htmlFor="name">Navn</label>
                    <input id="name" type="text" value={name} onChange={handleNameChange} />
                    <label htmlFor="address">Addresse</label>
                    <input id="address" type="text" value={address} onChange={handleaddressChange} />
                    <label htmlFor="phone">Telefonnummer</label>
                    <input id="phone" type="tel" value={phone} onChange={handlePhoneChange} />
                    <label htmlFor="birthday">Fødselsdag</label>
                    <input id="birthday" type="date" value={birthday} onChange={handleDateChange} />
                    <button type="submit" value="Submit">Send inn</button>
                </div>
            </form>

            <div>
                {users.length > 0 && (
                    <div className='flex flex-row flex-wrap'>
                        {users.map(user => (
                            <div key={user.id} className='p-2 m-2 rounded-3xl bg-amber-200 text-black'>
                                <ul key={user.id} className='mt-2 mb-2'>
                                    <li > Navn: {user.name}</li>
                                    <li > Address: {user.address}</li>
                                    <li > Phone: {user.phone}</li>
                                    <li > Birthday: {user.birthday}</li>
                                    <li > Tverrsum: {user.phoneDigitSum}</li>
                                    <li > Skuddår: {user.isLeapYearBirthday ? 'Ja' : 'Nei'}</li>
                                </ul>
                                <button onClick={() => deleteUser(user.id)}>Fjern</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div>
                <h2>Løsning med React i Frontend</h2>
                <p>Navn: {name}</p>
                <p>Addresse: {address}</p>
                <p>Telefonnummer: {phone}</p>
                <p>Fødselsdato: {birthday}</p>
                <p>Tverrsum av telefonnummer: {tverrsum}</p>
                <p>Skuddår: {leapYear}</p>
            </div>
        </div>

    )
}