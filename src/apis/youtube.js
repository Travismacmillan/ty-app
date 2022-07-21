import axios from 'axios';

const KEY = 'AIzaSyCOCpAafLOWKqxhfXW8A9YLYyrPlVx5kJM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});