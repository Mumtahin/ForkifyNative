import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer cJEicHLeHI7ktLP_lh-RHXI14IAW4vUfUqPF4NTK9g-FqfeW74DOGfsY6ynAramgryUG-cbLM-tkzqNS06nC7KXowCOHcplCl31sAHt-l5dQycs1oLWnUqeaMoNnYHYx'
    }
});