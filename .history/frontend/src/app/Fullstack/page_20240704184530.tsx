"use client"
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import Task from './Task';
import axios from 'axios';
import { userPost } from './apiService'; // Importerer userPost fra apiService

type User = {
    id: number;
    name: string;
    address: string;
    phone: string;
    birthday: string;
    phoneDigitSum: number;
    isLeapYearBirthday: string;
};

export default function Fullstack() {
    const [name, setName] = useState("Petter");
    const [address, setaddress] = useState("Tiller");
    const [phone, setPhone] = useState("97562249");
    const [birthday, setBirthday] = useState("1990-01-01");
    /*const [leapYear, setLeapYear] = useState("");
    const [tverrsum, setTverrsum] = useState(0);*/
    const [users, setUsers] = useState<User[]>([]);
    const [editingUserId, setEditingUserId] = useState<number>();
    const [editedUser, setEditedUser] = useState({ name: '', address: '', phone: '', birthday: '' });
    
  




    const handleEditClick = (user: User) => {
        setEditingUserId(user.id);
        setEditedUser({ ...user });
    };

    const handleUpdateClick = () => {
        axios.put(`http://localhost:5177/api/Users/${editingUserId}`, {
            id: editingUserId,
            name: editedUser.name,
            address: editedUser.address,
            phone: editedUser.phone,
            birthday: editedUser.birthday
        })
            .then(response => {
                console.log(response);
                getUsers();

            })
            .catch(error => {
                console.log(error);
            })
        setEditingUserId(0);
        // Oppdater brukerlisten her etter vellykket oppdatering
    };

    const handleUpdateUserChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditedUser(prev => ({ ...prev, [name]: value }));
    };

    function formatDate(dateString: string) {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('nb-NO', options);
    }

    /*function isLeapYear(birthdayDate: string) {
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
    }*/

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleaddressChange = (event: ChangeEvent<HTMLInputElement>) => {
        setaddress(event.target.value);
    }

    const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newPhone = event.target.value;
        setPhone(newPhone);
        /*const newTverrsum = newPhone.split('').reduce((sum, num) => sum + parseInt(num, 10), 0);
        setTverrsum(newTverrsum);*/
    }

    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newBirthday = event.target.value;
        setBirthday(newBirthday);
       /* console.log("Skuddår: " + leapYear);
        isLeapYear(newBirthday);*/
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Forhindrer formen i å sende en HTTP POST request
        userPost(name, address, phone, birthday); 
        getUsers();
    };



    useEffect(() => {
        getUsers();
    }, []);

  

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
                    <label htmlFor="name">Navn<span className='text-red-500'> *</span></label>
                    <input id="name" type="text" value={name} onChange={handleNameChange} required />
                    <label htmlFor="address">Addresse<span className='text-red-500'> *</span></label>
                    <input id="address" type="text" value={address} onChange={handleaddressChange} required />
                    <label htmlFor="phone">Telefonnummer<span className='text-red-500'> *</span></label>
                    <input id="phone" type="tel" value={phone} onChange={handlePhoneChange} required />
                    <label htmlFor="birthday">Fødselsdag<span className='text-red-500'> *</span></label>
                    <input id="birthday" type="date" defaultValue="1990-01-01" value={birthday} onChange={handleDateChange} required />
                    <button type="submit" value="Submit">Legg til bruker</button>
                </div>
            </form>

            <div>
                {users.length > 0 && (
                    <div className='flex flex-row flex-wrap'>
                        {users.map(user => (
                            <div key={user.id} className='p-2 m-2 rounded-3xl bg-amber-200 text-black'>
                                {editingUserId === user.id ? (
                                    // Vis input-felter for redigering
                                    <ul key={user.id} className='mt-2 mb-2'>
                                        <li><input name="name" value={editedUser.name} onChange={handleUpdateUserChange} /></li>
                                        <li><input name="address" value={editedUser.address} onChange={handleUpdateUserChange} /></li>
                                        <li><input name="phone" value={editedUser.phone} onChange={handleUpdateUserChange} /></li>
                                        <li><input name="birthday" type="date" value={editedUser.birthday} onChange={handleUpdateUserChange} /></li>
                                        <li><button onClick={handleUpdateClick}>Oppdater</button></li>
                                    </ul>
                                ) : (
                                    <ul key={user.id} className='mt-2 mb-2'>
                                        <li > <span className='font-semibold'>Id: </span> {user.id}</li>
                                        <li > <span className='font-semibold'>Navn: </span> {user.name}</li>
                                        <li > <span className='font-semibold'>Address: </span>{user.address}</li>
                                        <li > <span className='font-semibold'>Phone: </span>{user.phone}</li>
                                        <li > <span className='font-semibold'>Birthday: </span>{formatDate(user.birthday)}</li>
                                        <li > <span className='font-semibold'>Tverrsum: </span>{user.phoneDigitSum}</li>
                                        <li > <span className='font-semibold'>Skuddår: </span>{user.isLeapYearBirthday ? 'Ja' : 'Nei'}</li>
                                        <li>
                                            <div>
                                                <button onClick={() => handleEditClick(user)}>Endre</button>
                                                <button onClick={() => deleteUser(user.id)}>Fjern</button>
                                            </div>

                                        </li>
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div>

           
            </div>
        </div>

    )
}