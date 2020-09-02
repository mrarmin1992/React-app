import axios from 'axios'; 


const instance = axios.create({
    baseURL: 'https://react-my-burger-3c75c.firebaseio.com/'
});

export default instance;