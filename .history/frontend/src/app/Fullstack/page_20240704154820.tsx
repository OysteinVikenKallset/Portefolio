"use client"
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';

import axios from 'axios';
import UsersList from './UsersList';
import { formatDate } from './UtilityFunctions';

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
        {users.length > 0 && (
            <UsersList
              users={users}
              editingUserId={editingUserId}
              editedUser={editedUser}
              handleUpdateUserChange={handleUpdateUserChange}
              handleUpdateClick={handleUpdateClick}
              handleEditClick={handleEditClick}
              deleteUser={deleteUser}
              formatDate={formatDate}
            />
          )}
        </div>

    )
}