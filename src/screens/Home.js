import { View, Text, StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import Layout from '../components/Layout/Layout';

const Home = () => {
    return (
        <Layout>
            <View>
                <Text>teste</Text>
            </View>

        </Layout>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(121, 91, 91)",
        alignItems: 'center',
        justifyContent: 'center',
    }
})