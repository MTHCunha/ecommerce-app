import { View, Text, StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import Layout from '../components/Layout/Layout';

const Home = () => {
    return (
        <Layout>
            <View style={styles.container}>
                <Text>Testefd33</Text>
            </View>

        </Layout>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(95, 61, 61)",
        alignItems: 'center',
        justifyContent: 'center',
    }
})