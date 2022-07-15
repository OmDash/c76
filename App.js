import React, { Components } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/homescreen';

export default class App extends Component {
    render() {
        return ( <
            View >
            <
            HomeScreen / >
            <
            /View>

        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});