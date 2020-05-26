import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://udemy-react-course-46870.firebaseio.com/'
});

export default instance;