import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { NavigationContext } from 'react-navigation';

const ResultsShowScreen = ( {navigation }) => {

    const id = navigation.getParam('id');

    return (
        <View>
            <Text>Results Show</Text>
            <Text>ID: {id}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;