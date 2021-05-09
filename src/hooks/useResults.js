import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        console.log("searching api!");
        try {
            const reponse = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'London'
                }
            });
            setResults(reponse.data.businesses);
        } catch (err) {
            setErrorMessage('Oops, something went wrong...');
        }
    }

    // run searchApi when component is first rendered only
    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage];
};