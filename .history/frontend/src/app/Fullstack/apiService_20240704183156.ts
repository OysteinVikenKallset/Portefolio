import axios from 'axios';

export const userPost = (userData: { name: string; address: string; phone: string; birthday: string }) =>{
    return axios.post('http://localhost:5177/api/Users', {
        id: 0,
        ...userData
    });
        
}