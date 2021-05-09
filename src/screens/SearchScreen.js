import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async () => {
        try {
            const reponse = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term,
                    location: 'London'
                }
            });
            setResults(reponse.data.businesses);
        } catch (err) {
            setErrorMessage('Oops, something went wrong...');
        }
    }

    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={searchApi}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>Search Screen {results.length}</Text>
        </View>
    )
};

const styles = StyleSheet.create({});

export default SearchScreen;