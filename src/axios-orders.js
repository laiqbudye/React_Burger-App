import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://react-burger-project-e987f.firebaseio.com/'
});

export default instance;