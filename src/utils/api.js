import axios from 'axios';

//will export functions needed to navbar who will pass them down as props to the 
//make up viewer container 
const baseURL = `http://localhost:3000/api/makeup/`
export function getAll() {
    return axios.get(baseURL)
}
