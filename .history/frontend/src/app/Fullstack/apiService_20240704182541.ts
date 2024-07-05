import axios from 'axios';

const userPost = () =>{
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