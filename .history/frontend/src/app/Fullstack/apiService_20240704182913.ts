import axios from 'axios';

export const userPost = ({userData: { name: string; address: string; phone: string; birthday: string }) =>{
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
}