import axios from 'axios'// axios helps us to do HTTP requests from the browser
const instance = axios.create({
baseURL:"https://api.themoviedb.org/3"
});
export default instance ;