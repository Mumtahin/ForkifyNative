import axios from 'axios';
import { connection } from '../../connection';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: connection.YELP_TOKEN
    }
});