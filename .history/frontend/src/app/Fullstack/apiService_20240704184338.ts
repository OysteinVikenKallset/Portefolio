import axios from 'axios';

export const userPost = (newName: string, newAdress: string, newPhone: string, newBirthday: string) =>{
    axios.post('http://localhost:5177/api/Users', {
        id: 0,
        name: newName,
        address: newAdress,
        phone: newPhone,
        birthday: newBirthday
    })
        .then(response => {
            console.log(response);
            

        })
        .catch(error => {
            console.log(error);
        })
}