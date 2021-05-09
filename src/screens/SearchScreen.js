import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
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

    useEffect(() => {
        searchApi('pasta');
    }, []);


    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>Results: {results.length}</Text>
        </View>
    )
};

const styles = StyleSheet.create({});

export default SearchScreen;